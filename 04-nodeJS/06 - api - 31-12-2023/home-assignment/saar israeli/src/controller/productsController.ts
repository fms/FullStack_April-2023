import express from 'express';
import { Product } from '../model/products';

const products: Product[] = [];
const print = console.log;

export function createProduct(req: express.Request, res: express.Response){
    try {
        const newProduct: Product = req.body;

        if(!newProduct.name || !newProduct.price) {
            throw new Error("Missing product detail to add");
        }

        const index = products.findIndex(item => item.name === newProduct.name);
        if(index !== -1) {
            throw new Error("Item to add already exits");
        }

        print("Adding:", newProduct);
        products.push(newProduct);
        res.send({products});
    } catch (error) {
        if(error instanceof Error) {
            res.status(404).send({ error: error.message});
        }
    }
}

export function getProducts(req: express.Request, res: express.Response) {
    res.send({ products });
}

export function updateProductPriceBody(req: express.Request, res: express.Response) {
    try{
        const {name,price} = req.body;
        if(!name || !price) {
            throw new Error("Missing prodcut details to update")
        }

        const oldProduct = products.find(item => item.name === name);
        if(!oldProduct) {
            throw new Error("Item to update not found");
        }

        print(`Updating (Patch) "${oldProduct.name}":`);
        print("Before:", oldProduct);

        oldProduct.price = price;
        print("After:", oldProduct);
        res.send({ products });
    } catch(error) {
        if(error instanceof Error) {
            res.status(404).send({ error: error.message });
        }
    }
}

export function overwriteProductQuery(req: express.Request, res: express.Response) {
    try {
        const { name } = req.params;
        const newProduct:Product = req.body;

        if(!name) {
            throw new Error("Missing old product detail to update");
        }

        if(!newProduct.name || !newProduct.price) {
            throw new Error("Missing new product detail to update");
        }
        
        const index = products.findIndex(item => item.name === name);
        if(index === -1) {
            throw new Error("Item to replace not found");
        }

        if(name !== newProduct.name) {
            const newIndex = products.findIndex(item => item.name === newProduct.name);
            if(newIndex !== -1){
                throw "Replacement item already exists"
            }
        }

        const oldProduct = products.splice(index,1,newProduct);

        print(`Updating (Put) "${oldProduct[0].name}":`);
        print("Before:", oldProduct[0]);
        print("After:" ,newProduct);

        res.send({ products });
    }catch (error) {
        if(error instanceof Error) {
            res.status(404).send({ error: error.message });
        }
    }
}

export function deleteProduct(req: express.Request, res: express.Response){
    try {
        const { name } = req.body;

        if(!name) {
            throw new Error("Missing product to delete");
        }
        
        const index = products.findIndex(item => item.name === name);
        if(index === -1) {
            throw new Error("Item to delete not found");
        }

        const oldProduct = products.splice(index,1);
        print("Deleted:", oldProduct[0]);

        res.send({ products });
    } catch (error) {
        if(error instanceof Error) {
            res.status(404).send({ error: error.message });
        }
    }
}