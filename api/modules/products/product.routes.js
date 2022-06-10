import {findAllProduct,insertOneProduct,findOneProduct,deleteOneProduct} from "./product.controller.js"
function productRoutes (app)  {
    app.route('products')
        .get(findAllProduct)
        .post(insertOneProduct)
    app.route('products/:id')
        .get(findOneProduct)
        .delete(deleteOneProduct)
}

export {productRoutes}