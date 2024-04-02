export default async function getData<T>(url: string, signal: AbortSignal): Promise<T | undefined> {
  try {
    const response = await fetch(url, { signal });
    if (response.ok) {
      return await response.json();
    } else {
      throw `${response.status} - ${response.statusText}`;
    }
  } catch (cause) {
    console.log(cause);
    return undefined;
  }
}
