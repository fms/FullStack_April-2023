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
        const changeNameButton: HTMLButtonElement = createButtonElement("spanChangeName", "Change Name", updateProductName)
        const changePriceButton: HTMLButtonElement = createButtonElement("spanChangePrice", "Change Price", updateProductPrice)
        const overRideButton: HTMLButtonElement = createButtonElement("spanChangeProd", "Change Product", overRideProduct)
        const deleteButton: HTMLButtonElement = createButtonElement("spanDeleteButton", "Delete Product", () => deleteProduct(product.name))
        const productDiv = document.createElement("div") as HTMLDivElement;
        productDiv.classList.add("productDiv");
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(changeNameButton);
        productDiv.appendChild(changePriceButton);
        productDiv.appendChild(overRideButton);
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

async function deleteProduct(name: string) {
    try {
        const response = await fetch(`/api/products/product`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({name})
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

function updateProductName() {
    try{

    }catch(error){

    }
}

function updateProductPrice() {
    try{

    }catch(error){
        
    }
}
function overRideProduct() {
    try{

    }catch(error){
        
    }
}