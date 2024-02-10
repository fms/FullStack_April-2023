import express from 'express';
import { log } from "console";
import { appendFile } from "fs";
import * as controller from '../src/controllers/productsController';
const router = express.Router();

// The expected payload
export interface Product {
    name: string;
    price: number;
}
let Myform = document.querySelector("#Myform") as HTMLFormElement;
const rootElement = document.querySelector('#root') as HTMLDivElement;
getProducts();

// Gets products from server
async function getProducts() {
    try {
        const response = await fetch("/api/products/products");
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
        const data = await response.json();
        // console.log(data);
        renderProducts(rootElement, data.products);
        
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }}
    
    // Update the page's product list
    function renderProducts(element: HTMLDivElement, products: Product[]) {
    element.innerHTML = "<h1>Products</h1>" + 
    products.map(product => {
        return `<p>${product.name}, price: ${product.price}</p>`
    }).join('<hr>');
}

async function AddProduct() {
    let ProductName = (Myform.querySelector('#name') as HTMLInputElement).value;
    let ProductPrice = (Myform.querySelector('#price') as HTMLInputElement).valueAsNumber
    try {
        const newProductToadd: Product = {name: ProductName, price: ProductPrice};
        console.log(ProductName);
        const response = await fetch("/api/products/product", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(newProductToadd)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
        renderProducts(rootElement, data.products);
        
    } catch (error) {
        if (error instanceof Error) {
        console.error(error.message);
    }
}}

router.patch('/api/products/product/:name', controller.updateProductPriceBody)
