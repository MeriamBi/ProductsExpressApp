export class Product {
    constructor(id,name, description, price, image, year_of_production, fuel_type, fuel_consumption, engine) {
        this.id=id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.year_of_production = year_of_production;
        this.fuel_type = fuel_type;
        this.fuel_consumption = fuel_consumption;
        this.engine = engine;
    }
}