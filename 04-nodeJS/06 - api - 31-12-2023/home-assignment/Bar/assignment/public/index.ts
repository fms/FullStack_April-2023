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
        return `<p>${product.name}, price: ${product.price}</p>`;
      })
      .join("<hr>");
}

async function handleAddProduct(event:MouseEvent) {
    event.preventDefault();
    
    const productName = document.querySelector(".productName") as HTMLInputElement;
    const productPrice = document.querySelector(".productPrice") as HTMLInputElement;
  try {
    const newProduct: Product = {
      name: productName.value,
      price: Number(productPrice.value),
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
    // console.log(data);
    renderProducts(rootElement, data.products);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
