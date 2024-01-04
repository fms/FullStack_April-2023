export interface Product {
    name: string;
    price: number;
}

const rootElement = document.querySelector('#root') as HTMLDivElement;
const nameInput = document.querySelector('#productname') as HTMLInputElement;
const priceInput = document.querySelector('#productprice') as HTMLInputElement;
const newNameInput = document.querySelector('#changeName') as HTMLInputElement;
const newPriceInput = document.querySelector('#changePrice') as HTMLInputElement;

const buttons = {
    update: document.querySelector('#UpdateButton') as HTMLButtonElement,
    delete: document.querySelector('#DeleteButton') as HTMLButtonElement,
    patch: document.querySelector('#PatchButton') as HTMLButtonElement,
    put: document.querySelector('#PutButton') as HTMLButtonElement,
    add: document.getElementById('addProductButton') as HTMLButtonElement,
    changeDetails: document.querySelector('#changedetails') as HTMLButtonElement,
};

buttons.add.addEventListener('click', addProduct);
buttons.delete.addEventListener('click', deleteProduct);
buttons.update.addEventListener('click', () => updatePriceProduct(nameInput.value));
buttons.put.addEventListener('click', () => replaceProduct(nameInput.value));
buttons.changeDetails.addEventListener('click', () => {
    buttons.changeDetails.style.display = 'none';
    showElements(buttons.update, buttons.delete, buttons.put);
});

setInterval(() => getProducts(), 1000);

// GET
async function getProducts() {
    try {
        const response = await fetch("/api/products/products");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        renderProducts(rootElement, data.products);
    } catch (error) {
        if (error instanceof Error) console.error(error.message);
    }
}

function renderProducts(element: HTMLDivElement, products: Product[]) {
    element.innerHTML = `<h1 style="color: red;">Products</h1></style>` +
        products.map(product => `<p>${product.name}, price: ${product.price}</p>`).join('<hr>');
}

async function deleteProduct() {
    try {
        showElements(newNameInput);
        hideElements(nameInput, priceInput, newPriceInput, buttons.changeDetails);
        const response = await fetch(`/api/products/product/`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name: newNameInput.value, price: parseFloat(newPriceInput.value) })
        });
        if (newNameInput.value === '') {
            alert('Please make sure you filled in details!');
            return;
        }
        const data = await response.json();
        if (!data || !data.products) console.error('Missing products in the response:', data);
        else alert('Successfully deleted!');
        renderProducts(rootElement, data.products);
    } catch (error) {
        if (error instanceof Error) console.error(error.message);
    }
}

async function updatePriceProduct(originalName: string) {
    try {
        showElements(newPriceInput, newNameInput);
        hideElements(nameInput, priceInput);
        const response = await fetch(`/api/products/product/${originalName}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name: newNameInput.value, price: parseFloat(newPriceInput.value) })
        });
        if (newPriceInput.value === '') {
            alert('Please make sure you filled in details!');
            return;
        }
        const data = await response.json();
        if (!data || !data.products) console.error('Missing products in the response:', data);
        else alert('Successfully updated!');
        renderProducts(rootElement, data.products);
    } catch (error) {
        if (error instanceof Error) console.error(error.message);
    }
}

async function replaceProduct(originalName: string) {
    showElements(nameInput, newNameInput, newPriceInput);
    try {
        const response = await fetch(`/api/products/product/${originalName}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name: newNameInput.value, price: parseFloat(newPriceInput.value) })
        });
        if (newNameInput.value === '' || newPriceInput.value === '') {
            alert('Please make sure you filled in details!');
            return;
        }
        const data = await response.json();
        if (!data || !data.products) console.error('Missing products in the response:', data);
        else alert('Successfully updated!');
        renderProducts(rootElement, data.products);
    } catch (error) {
        if (error instanceof Error) console.error(error.message);
    }
}

async function addProduct() {
    const nameInputValue = nameInput.value;
    const priceInputValue = priceInput.value;
    showElements(nameInput, priceInput);
    try {
        const product: Product = { name: nameInputValue, price: parseFloat(priceInputValue) };
        const response = await fetch(`/api/products/product`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product)
        });
        if (nameInputValue === '' || priceInputValue === '') {
            alert('Please make sure you filled in details!');
            return;
        }
        const data = await response.json();
        if (!data || !data.products) console.error('Missing products in the response:', data);
        else renderProducts(rootElement, data.products);
    } catch (error) {
        if (error instanceof Error) console.error(error.message);
    }
}

function showElements(...elements: (HTMLDivElement | HTMLButtonElement)[]) {
    elements.forEach(element => { element.style.display = 'block'; });
}

const hideElements = (...elements: (HTMLDivElement | HTMLButtonElement)[]) => {
    elements.forEach(element => { element.style.display = 'none'; });
};