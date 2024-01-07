import { Product } from '../models/Product';
import express, {Request, Response} from 'express';

// The current products
const products: Product[] = [];

export function createProduct(req: Request, res: Response) {
    try {
        const newProduct: Product = req.body;
        console.log(newProduct)
        // Basic verification of the input
        if (!newProduct.name || !newProduct.price) {
            throw new Error("Missing product details to add");
        }

        // Make sure we don't already have a product by this name
        const index = products.findIndex(item => item.name === newProduct.name);
        if (index !== -1) {
            throw new Error("Item to add already exists");
        }

        console.log("Adding:", newProduct);

        // Just add the new Product to the array
        products.push(newProduct);

        // Return the new list of products to the client
        res.send({ products });

    } catch (error) {
        if (error instanceof Error) {
            res.status(404).send({ error: error.message });
        }
    }
}

export function getProducts(req:Request, res: Response) {
    // Just return the list of products to the client
    res.send({ products });
}

export function updateProductPriceBody (req: Request, res: Response) {
    try {
        const { name, price } = req.body;
        console.log(name, price)
        // Basic verification of the input
        if (!name || !price) {
            throw new Error("Missing product details to update");
        }

        // Find the item to update
        const oldProduct = products.find(item => item.name === name);
        if (!oldProduct) {
            throw new Error("Item to update not found");
        }

        console.log(`Updating (Patch) "${oldProduct.name}":`);
        console.log("Before:", oldProduct);

        // Updates by reference directly inside the array
        oldProduct.price = price;
        console.log("After :", oldProduct);

        res.send({ products });
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).send({ error: error.message });
        }
    }
}

export function updateProductPriceQuery(req: Request, res: Response) {
    try {
        const { name } = req.params;
        const { price } = req.body;

        // Basic verification of the input
        if (!name || !price) {
            throw new Error("Missing product details to update");
        }

        // Find the item to update
        const oldProduct = products.find(item => item.name === name);
        if (!oldProduct) {
            throw new Error("Item to update not found");
        }

        console.log(`Updating (Patch) "${oldProduct.name}":`);
        console.log("Before:", oldProduct);

        // Updates by reference directly inside the array
        oldProduct.price = price;

        console.log("After :", oldProduct);

        res.send({ products });
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).send({ error: error.message });
        }
    }
}

export function overwriteProductBody(req: Request, res: Response) {
    try {
        const newProduct: Product = req.body;

        // Basic verification of the input
        if (!newProduct.name || !newProduct.price) {
            throw new Error("Missing product details to update");
        }

        // Find the item to update
        const index = products.findIndex(item => item.name === newProduct.name);
        if (index === -1) {
            throw new Error("Item to replace not found");
        }

        const oldProduct = products.splice(index, 1, newProduct);

        // splice() returns an array, in this case with just one item.
        // use oldProduct[0] for the actual item.
        console.log(`Updating (Put) "${oldProduct[0].name}":`);
        console.log("Before:", oldProduct[0]);
        console.log("After :", newProduct);

        res.send({ products });
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).send({ error: error.message });
        }
    }
}

export function overwriteProductQuery(req: Request, res: Response) {
    try {
        const { name } = req.params;
        const newProduct: Product = req.body;

        // Basic verification of the input
        if (!name) {
            throw new Error("Missing old product details to update");
        }

        if (!newProduct.name || !newProduct.price) {
            throw new Error("Missing new product details for update");
        }

        const index = products.findIndex(item => item.name === name);
        if (index === -1) {
            throw new Error("Item to replace not found");
        }

        if (name !== newProduct.name) {
            // We're updating the name property. Make sure the new name does not already exist.
            const newIndex = products.findIndex(item => item.name === newProduct.name);
            if (newIndex !== -1) {
                throw "Replacement item already exists";
            }
        }

        const oldProduct = products.splice(index, 1, newProduct);

        // splice() returns an array, in this case with just one item.
        // use oldProduct[0] for the actual item.
        console.log(`Updating (Put) "${oldProduct[0].name}":`);
        console.log("Before:", oldProduct[0]);
        console.log("After :", newProduct);

        res.send({ products });
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).send({ error: error.message });
        }
    }
}

export function deleteProduct(req: Request, res: Response) {
        try {
            const { name } = req.body;

            if (!name) {
                throw new Error("Missing old product name to delete");
            }

            // Does the product exist?
            const index = products.findIndex(item => item.name === name);
            if (index === -1) {
                throw new Error("Item to delete not found");
            }

            // splice() returns an array, in this case with just one item.
            // use oldProduct[0] for the actual item.
            const oldProduct = products.splice(index, 1);
            console.log("Deleted:", oldProduct[0]);

            res.send({ products });

        } catch (error) {
            if (error instanceof Error) {
                res.status(404).send({ error: error.message });
            }
        }
    }
