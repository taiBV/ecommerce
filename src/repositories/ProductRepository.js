/*
*  product_name: String,
    product_thumb: String,
    product_description: String,
    product_quantity: Number,
    product_price: Number,
    shop_id: Number,
    product_attributes: {type: Schema.Types.Mixed},
* */
const {ProductModel, ProductElectronic, ProductClothing} = require("../models/Product")

class ProductRepository {
    constructor() {

    }

    create(type, params) {
        switch (type) {
            case "CLOTHING":
                return new ProductClothingRepository(params).create()
            case "ELECTRONIC":
                return new ProductElectronicRepository(params).create()
        }
    }
}

class ProductFactory {
    constructor(product_name, product_thumb, product_description, product_quantity, product_price, shop_id, product_attributes) {
        this.product_name = product_name
        this.product_thumb = product_thumb
        this.product_description = product_description
        this.product_quantity = product_quantity
        this.product_price = product_price
        this.shop_id = shop_id
        this.product_attributes = product_attributes
    }

    async createProduct() {
        console.log('this ProductRepository createProduct : ', this)
        return ProductModel.create(this);
    }
}
class ProductClothingRepository extends ProductFactory{
    async create() {
        // create attribute
        const saveAttribute = ProductClothing.create(this.product_attributes)
        return super.createProduct()
    }
}

class ProductElectronicRepository extends ProductFactory{
    async create() {
        // create attribute
        const saveAttribute = ProductElectronic.create(this.product_attributes)
        return super.createProduct()
    }
}
module.exports = ProductRepository
