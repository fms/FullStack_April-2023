const productContainer = document.querySelector("#product-container") as HTMLDivElement;
const productForm = document.querySelector("#product-form") as HTMLFormElement;
interface Product {
    name: string;
    price: number;
}

interface FormElements extends HTMLFormControlsCollection {
    productName: HTMLInputElement,
    productPrice: HTMLInputElement,
}


getProduct();

async function getProduct() {
    try {
        const response = await fetch("/api/products/products");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        renderProducts(productContainer, data.products);

    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

function renderProducts(element: HTMLDivElement, products: Product[]) {
    element.innerHTML = "";
    products.map(product => {
        const productName: HTMLSpanElement = createSpanElement("productSpanName", product.name);
        const productPrice: HTMLSpanElement = createSpanElement("productSpanPrice", product.price);
        const deleteButton: HTMLButtonElement = createButtonElement("spanDeleteButton", "Delete Product", () => deleteProduct(product.name));
        const productDiv = document.createElement("div") as HTMLDivElement;
        const editProductButton: HTMLButtonElement = createButtonElement("spaneEditProduct", "EditProduct", () => editProduct(productDiv, product.name,product.price));
        productDiv.classList.add("productDiv");
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(editProductButton);
        productDiv.appendChild(deleteButton);
        element.appendChild(productDiv);
    })
}

// function printDom(name: string, price: number, element: HTMLDivElement) {

// }

async function submitProduct(event: MouseEvent) {
    event.preventDefault()
    try {
        const productFormElements = productForm.elements as FormElements;
        const productName = productFormElements.productName.value;
        const productPrice = Number(productFormElements.productPrice.value);

        const newProduct: Product = {
            name: productName,
            price: Number(productPrice),
        };
        const response = await fetch("/api/products/product", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newProduct),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.products);
        console.log(data);
        renderProducts(productContainer, data.products);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

function createButtonElement(className: string, textContent: string, handler: (event: MouseEvent) => void): HTMLButtonElement {
    const button = document.createElement("button") as HTMLButtonElement;
    button.className = className;
    button.textContent = textContent;
    button.addEventListener("click", handler);
    return button;
}

function createSpanElement(className: string, textContent: string | number): HTMLSpanElement {
    const span = document.createElement("span") as HTMLSpanElement;
    span.classList.add(className);
    span.textContent = `${textContent}`;
    return span;
}

function createInputElement(className:string,textContent:string|number): HTMLInputElement {
    const input = document.createElement("input") as HTMLInputElement;
    input.classList.add(className);
    input.value = `${textContent}`;
    return input;
}

async function deleteProduct(name: string) {
    try {
        const response = await fetch("/api/products/product", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        renderProducts(productContainer, data.products);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

async function updateProductPrice(div:HTMLDivElement,name: string) {
    try {
        const newPriceInput = div.children[1] as HTMLInputElement;
        const newPriceValue = newPriceInput.value;
        const response = await fetch("/api/products/product", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name: name , price: newPriceValue})
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        renderProducts(productContainer, data.products);


    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}
async function overRideProduct(div:HTMLDivElement,name: string) {
    try {
        const newNameInput = div.children[0] as HTMLInputElement;
        const newNameValue = newNameInput.value;
        const newPriceInput = div.children[1] as HTMLInputElement;
        const newPriceValue = newPriceInput.value;
        const response = await fetch(`/api/products/product/${name}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name : newNameValue, price: newPriceValue })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        renderProducts(productContainer, data.products);


    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

function editProduct(div: HTMLDivElement, name: string, price:number) {
    try {
        const newNameInput = createInputElement("productNewInputName",name);
        const newPriceInput = createInputElement("productNewInputPrice",price);
        const changePriceButton: HTMLButtonElement = createButtonElement("spanChangePrice", "Change Price", () => updateProductPrice(div,name));
        const changeProdButton: HTMLButtonElement = createButtonElement("spanChangeProd", "Change Product", () => overRideProduct(div,name));
        div.replaceChildren()
        div.appendChild(newNameInput);
        div.appendChild(newPriceInput);
        div.appendChild(changePriceButton);
        div.appendChild(changeProdButton);

    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}