import products from "../mocks/product.mock.ts";

export function findAllproducts() {
    return products;
}

export function findProductById(id: number) {
    const product = products.find( product => product.id === id);

if (!product)
    throw new console.error(`produto de id ${id} não encontrado.`);
    
    return product;
}
 

export function insertProduct({name, rpice, description} : CreateProduct) {
    const id = product[products.length - 1].id + 1;


const product: product = {
    id, 
    name,
    price,
    description
};

products[products.length] = product;
return product;

}

export function modifyProduct(id: number, {name, price, description}: UpdadteProduct) {
    const product = findProductById(id);

    if (name !== undefined && name !== '') product.name = name;
    if (name !== undefined && price !== '') product.price = price;
    if (name !== undefined && description !== '') product.description = description;

    return product;
}

export function removeProduct (id: number) {
    findProductById(id);

    let index = null;

    for( let i = 0; i < products.length; i++) {
        if (id ===products[i].id) products.slice(i, 1)
    }
}