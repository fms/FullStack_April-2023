import path from "path";

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
  element.innerHTML = "";

  products.forEach((product) => {
    const productOutputDiv = document.createElement("div") as HTMLDivElement;
    const productDetails = document.createElement("p") as HTMLParagraphElement;
    const deleteButton = document.createElement("button") as HTMLButtonElement;
    const editButton = document.createElement("button") as HTMLButtonElement;

    productDetails.textContent = `${product.name}, ${product.price}`;
    deleteButton.textContent = "Delete";
    editButton.textContent = "Edit";

    editButton.addEventListener("click", (event) =>
      handleEditButton(event, productOutputDiv, product.name)
    );
    deleteButton.addEventListener("click", () => deleteProduct(product.name));

    productOutputDiv.style.border = "1px solid blue";
    productOutputDiv.appendChild(productDetails);
    productOutputDiv.appendChild(deleteButton);
    productOutputDiv.appendChild(editButton);
    element.appendChild(productOutputDiv);
  });
}

async function handleAddProduct(event: MouseEvent) {
  event.preventDefault();

  const productName = document.querySelector(
    ".productName"
  ) as HTMLInputElement;
  const productPrice = document.querySelector(
    ".productPrice"
  ) as HTMLInputElement;

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
async function deleteProduct(name: string) {
  try {
    const response = await fetch("/api/products/product", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name }),
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

function handleEditButton(event: MouseEvent, div: HTMLDivElement, productName: string) {
  let target = event.target as HTMLButtonElement;

  if (target) {
    const newNameInput = document.createElement("input") as HTMLInputElement;
    const newPriceInput = document.createElement("input") as HTMLInputElement;
    const patch = document.createElement("button") as HTMLButtonElement;
    const put = document.createElement("button") as HTMLButtonElement;

    patch.textContent = "Patch";
    put.textContent = "Put";

    patch.addEventListener("click", () => handlePatchButton(productName, newNameInput.value, Number(newPriceInput.value)));
    put.addEventListener("click", () => handlePutButton(productName, newNameInput.value, Number(newPriceInput.value)));

    div.appendChild(newNameInput);
    div.appendChild(newPriceInput);
    div.appendChild(patch);
    div.appendChild(put);
  }
}

async function handlePatchButton(name: string, newName: string, newPrice: number) {
  try {
    const response = await fetch(`/api/products/product/${name}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ newName: newName, price: newPrice }),
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
async function handlePutButton(name: string, newName: string, newPrice: number) {
  try {
    const response = await fetch(`/api/products/product/${name}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: newName, price: newPrice }),
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