import ProductModule from "../Module/ProductModule/ProductModule";

export default async function getData<T>(
  url: string,
  signal: AbortSignal
): Promise<ProductModule[]> {
  try {
    const res = await fetch(url, { signal });
    if (res.ok) {
      const data = await res.json();
      
        return data.products as ProductModule[];
    } else {
      throw new Error(`${res.status} - ${res.statusText}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}