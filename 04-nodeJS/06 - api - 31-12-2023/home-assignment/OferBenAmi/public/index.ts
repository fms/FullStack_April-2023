// The expected payload
export interface Product {
    name: string;
    price: number;
}

const rootElement = document.querySelector("#root") as HTMLDivElement;
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
    }
}

// Update the page's product list
function renderProducts(element: HTMLDivElement, products: Product[]) {
    element.innerHTML =
        "<h1>Products</h1>" +
        products
            .map((product) => {
                return `
                <form onsubmit="updateProductClient(event)">
                    <p>${product.name}, price: ${product.price}</p>
                    <input id="${product.name}" type="text" placeholder="Update Name">
                    <input id="${product.price}" type="text" placeholder="Update Price">
                    <input id="${product.name}Update" value="Update" type="submit" onclick="updateProductClient()">
                </form>
                `;
            })
            .join("<hr>");
}
async function updateProductClient(event: Event) {
    try {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        console.log(form.elements[1])
    } catch (error) {}
}
async function handleAddProducts(event: Event) {
    try {
        const productName = document.querySelector<HTMLInputElement>("#name");
        const productPrice = document.querySelector<HTMLInputElement>("#price");
        if (!productName || !productPrice) {
            throw new Error(`Could not get price or name!`);
        }
        const product: Product = {
            name: productName.value,
            price: Number(productPrice.value),
        };
        const response = await fetch("/api/products/product", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product),
        });
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
    }
}
