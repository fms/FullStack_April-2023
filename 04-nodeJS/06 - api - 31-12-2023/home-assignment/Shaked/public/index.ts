// The expected payload
export interface Product {
    name: string;
    price: number;
}
const rootElement = document.querySelector('#root') as HTMLDivElement;
setInterval(() => { getProducts() }, 1000);

// Gets products from server
async function getProducts() {
    try {
        const response = await fetch("/api/products/products");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        renderProducts(rootElement, data.products);

    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

// Update the page's product list
function renderProducts(element: HTMLDivElement, products: Product[]) {
    element.innerHTML = "<h1>Products</h1>" +
        products.map(product => {
            return `<p>${product.name}, price: ${product.price}</p>`
        }).join('<hr>');
}

async function addProduct() {
    const nameinput = (document.querySelector('#productname') as HTMLInputElement).value;
    const priceinput = (document.querySelector('#productprice') as HTMLInputElement).value;

    try {
        const product: Product = { name: nameinput, price: parseFloat(priceinput) };

        const response = await fetch(`/api/products/product`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product)
        });

        if (nameinput === '' || priceinput === '') {
            alert('Please make sure you filled in details!');
            return;
        }

        const data = await response.json();

        if (!data || !data.products) {
            console.error('Missing products in the response:', data);
            return;
        }

        renderProducts(rootElement, data.products);

    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

const addProductButton = document.getElementById('addProductButton') as HTMLButtonElement;
addProductButton.addEventListener('click', addProduct);