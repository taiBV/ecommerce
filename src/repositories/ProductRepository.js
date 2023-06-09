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
const {APIError} = require("../core/Response");
const InventRepository = require("../repositories/InventRepository")

class ProductRepository {
    constructor() {

    }

    static classModelProductType = {}

    getClassProductType() {
        return ProductRepository.classModelProductType
    }

    static registerClassProductType(type, classModel) {
        ProductRepository.classModelProductType[type] = classModel
    }

    async create(type, params) {
        const classProduct = this.getClassProductType()[type]

        if (classProduct === undefined) throw new APIError("Type Product not exist")

        const newProduct = await new classProduct(params).create();
        console.log('newProduct', newProduct)
        if (newProduct) {
            const inventObj = {
                shop_id: params.shop_id,
                product_id: newProduct._id,
                product_qty: params.product_quantity,
                booking_order: [],
            }
            console.log('inventObj', inventObj)
            const inventRepo = new InventRepository()
            inventRepo.create(inventObj)
        }

        return newProduct
    }
}

class ProductFactory {
    constructor(params) {
        this.product_name = params.product_name
        this.product_thumb = params.product_thumb
        this.product_description = params.product_description
        this.product_quantity = params.product_quantity
        this.product_price = params.product_price
        this.shop_id = params.shop_id
        this.product_attributes = params.product_attributes
    }

    async createProduct() {
        return await ProductModel.create(this);
    }
}

class ProductClothingRepository extends ProductFactory {
    constructor(params) {
        super(params);
    }

    async create() {
        // create attribute
        const saveProduct = await super.createProduct()
        const attrs = {
            ...this.product_attributes,
            product_id: saveProduct._id
        }
        await ProductClothing.create(attrs)
        return saveProduct
    }
}

class ProductElectronicRepository extends ProductFactory {
    constructor(params) {
        super(params);
    }

    async create() {
        // create attribute
        const saveProduct = await super.createProduct()
        const attrs = {
            ...this.product_attributes,
            product_id: saveProduct._id
        }
        await ProductElectronic.create(attrs)
        return saveProduct
    }
}

// Init Class Model Product Type
ProductRepository.registerClassProductType("CLOTHING", ProductClothingRepository)
ProductRepository.registerClassProductType("ELECTRONIC", ProductElectronicRepository)

module.exports = ProductRepository
