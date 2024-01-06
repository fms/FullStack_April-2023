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

    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

// Update the page's product list
function renderProducts(element: HTMLDivElement, products: Product[]) {
    productsButton.style.display = "none";
    backButton.style.display = "block";
    element.innerHTML = "<h1>Products</h1>" + products.map(product => {
        return `<p>${product.name}, price: ${product.price}</p>                                              <button onclick="callForUpdateName('${product.name}', '${product.price}')">Update Name</button>      <button onclick="callForUpdatePrice('${product.name}')">Update Price</button> 
        <button onclick="callForReplaceProduct('${product.name}', '${product.price}')">Replace</button> 
        <button onclick="deleteProduct('${product.name}')">Delete</button>`
    }).join('<hr>');
}

// POST
async function addProduct() {
    try {
        const pName = (form.querySelector('[name="name"]') as HTMLInputElement).value;
        const pPrice = (form.querySelector('[name="price"]') as HTMLInputElement).valueAsNumber;
        const newProduct: Product = { name: pName, price: pPrice };
        const response = await fetch("/api/products/product", {
            method: "POST",
            headers: { "content-type": "application/json" },
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

// DELETE
async function deleteProduct(name: string) {
    try {
        console.log(name);
        const response = await fetch("/api/products/product", {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        renderProducts(rootElement, data.products); // {products: []}
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

// PATCH
function callForUpdatePrice(name: string) {
    console.log(`Current name: ${name}`);
    rootElement.innerHTML = `
    <form class="update_form">
        <label>Change ${name} price to:
            <input class="text_block" type="number" id="newPrice" name="newPrice" required>
        </label>
        <button onclick="updatePrice('${name}')" class="button" type="button" id="update_price">Update</button>
        <button onclick="goBack()" class="button" type="button" id="cancel">Cancel</button>
    </form>`;
    backButton.style.display = "none";
}

async function updatePrice(name: string) {
    try {
        const updateForm = document.querySelector(".update_form") as HTMLFormElement;
        const newPrice = (updateForm.querySelector('[name="newPrice"]') as HTMLInputElement).valueAsNumber;
        console.log(`name: ${name}, new price: ${newPrice}`);
        const response = await fetch(`/api/products/product/${name}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name: name, price: newPrice })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        renderProducts(rootElement, data.products); // {products: []}
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

function callForUpdateName(name: string, price: number) {
    console.log(`Current name: ${name}`);
    rootElement.innerHTML = `
    <form class="update_form">
        <label>Change ${name} to:
            <input class="text_block" type="text" id="newName" name="newName" required>
        </label>
        <button onclick="updateName('${name}', '${price}')" class="button" type="button" id="update_name">Update</button>
        <button onclick="goBack()" class="button" type="button" id="cancel">Cancel</button>
    </form>`;
    backButton.style.display = "none";
}

async function updateName(name: string, price: number) {
    try {
        const updateForm = document.querySelector(".update_form") as HTMLFormElement;
        const newName = (updateForm.querySelector('[name="newName"]') as HTMLInputElement).value;
        console.log(`new name: ${newName}, price: ${price}`);
        const response = await fetch(`/api/products/product/${name}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name: name, price: price, newName: newName })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        renderProducts(rootElement, data.products); // {products: []}
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

//PUT
function callForReplaceProduct(name: string, price: number) {
    console.log(`Current product: ${name}, ${price}`);
    rootElement.innerHTML = `
    <form class="update_form">
        <label>Change ${name} to:
            <input class="text_block" type="text" id="newName" name="newName" required>
        </label>
        <label>Change ${price} to:
            <input class="text_block" type="number" id="newPrice" name="newPrice" required>
        </label>
        <button onclick="replaceProduct('${name}')" class="button" type="button" id="replace">Update</button>
        <button onclick="goBack()" class="button" type="button" id="cancel">Cancel</button>
    </form>`;
    backButton.style.display = "none";
}

async function replaceProduct(name: string) {
    try {
        console.log(name);
        const updateForm = document.querySelector(".update_form") as HTMLFormElement;
        const newName = (updateForm.querySelector('[name="newName"]') as HTMLInputElement).value;
        const newPrice = (updateForm.querySelector('[name="newPrice"]') as HTMLInputElement).valueAsNumber;
        console.log(`new name: ${newName}, new price: ${newPrice}`);
        const response = await fetch(`/api/products/product/${name}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name: newName, price: newPrice })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        renderProducts(rootElement, data.products); // {products: []}
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
