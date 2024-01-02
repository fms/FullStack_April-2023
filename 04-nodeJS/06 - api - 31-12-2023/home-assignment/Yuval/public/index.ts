// The expected payload
export interface Product {
    name: string;
    price: number;
}

const rootElement = document.querySelector('#root') as HTMLDivElement;
const form = document.querySelector('.form') as HTMLFormElement;
const addButton = document.querySelector('#submit') as HTMLButtonElement;
const productsButton = document.querySelector('#show_products') as HTMLButtonElement;
const backButton = document.querySelector('#back') as HTMLButtonElement;

addButton.addEventListener('click', addProduct);
productsButton.addEventListener('click', getProducts);
backButton.addEventListener('click', goBack);

// Gets products from server
async function getProducts() {
try {
        const response = await fetch("/api/products/products");
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

// Update the page's product list
function renderProducts(element: HTMLDivElement, products: Product[]) {
    productsButton.style.display = "none";
    backButton.style.display = "block";
    element.innerHTML = "<h1>Products</h1>" +                                                                   products.map(product => {
        return `<p>${product.name}, price: ${product.price}</p> <button>Update Name</button> <button>Update Price</button> <button>Replace</button> <button>Delete</button>`
    }).join('<hr>');
}

async function addProduct() {
    console.log('addProduct function is called');
    try {
        const pName = (form.querySelector('[name="name"]') as HTMLInputElement).value;
        const pPrice = (form.querySelector('[name="price"]') as HTMLInputElement).valueAsNumber;
        const newProduct: Product = {name: pName, price: pPrice};
        const response = await fetch("/api/products/product", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(newProduct)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        if (error instanceof Error) {
        console.error(error.message);
        }
    }
}

function goBack() {
    rootElement.innerHTML = `
    <form class="form">
        <label>Name:
            <input class="text_block" type="text" id="name" name="name" required>
        </label>
        <label>Price:
            <input class="text_block" type="number" id="price" name="price" required>
        </label>
        <button class="button" type="button" id="submit">Add</button>
    </form>`;
    productsButton.style.display = "block";
    backButton.style.display = "none";
}