import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Product } from '../models/product.js';

// returns the list of products
export async function listOfProducts() {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = join(__dirname, '../products.json');

    try {
        const data = await readFile(filePath, 'utf8');
        const products = JSON.parse(data);
        const list = products.map(
            (product) => new Product(
                product.id,
                product.name,
                product.description,
                product.price,
                product.image,
                product.year_of_production,
                product.fuel_type,
                product.fuel_consumption,
                product.engine
            )
        );
        return list;
    } catch (err) {
        console.error('Error reading file:', err);
        throw new Error('Internal server error');
    }
}

// returns a JSON object of all the products
export async function getAll(req, res) {
    try {
        const products = await listOfProducts();
        res.status(200).json(products);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}



//get one product by id in products.json
export async function getOneById(req, res) {
    try {
        const productId = parseInt(req.params.id);
        const products = await listOfProducts();
        const product = products.find((product) => product.id === productId);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json(product);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

