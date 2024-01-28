// The expected payload
export interface Product {
    name: string;
    price: number;
}

const rootElement = document.querySelector('#root') as HTMLDivElement;
getProducts();

// Gets products from server
async function getProducts() {
try {
        const response = await fetch("/api/products");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, ${response.statusText}`);
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

async function handleAddBanana() {
    let response;
    try {
        const banana: Product = {name: 'banana', price: 10};
        response = await fetch("/api/products/add", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(banana)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, ${response.statusText}`);
        }
        
        const data = await response.json();
        // console.log(data);
        renderProducts(rootElement, data.products);
    
} catch (error) {
    if (error instanceof Error) {
        const errorBody = await response!.json();
        console.error(error.message);
        console.error(errorBody.error);
    }
}}