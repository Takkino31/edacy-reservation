const products = [
    {
        id: 1,
        name : 'Shoes Jo 12',
        price: 16000
    },
    {
        id: 2,
        name : 'water',
        price: 5000
    }
];
function findAllProduct() {
    return products;
}

function findOneProduct(ProductId) {
    return products.find((resa) => resa.id == ProductId);
}
function deleteOneProduct (ProductId) {
    const index = products.findIndex((resa) => resa.id == ProductId);
    products.splice(index, 1);
    return true;
}

function insertOneProduct (Product) {
    products.push(Product);
}

export {findAllProduct,findOneProduct,deleteOneProduct,insertOneProduct}