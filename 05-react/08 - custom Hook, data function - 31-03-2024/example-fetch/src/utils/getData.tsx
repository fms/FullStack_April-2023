export default async function getData<T>(
  url: string,
  signal: AbortSignal
): Promise<T | undefined> {
  try {
    const res = await fetch(url, { signal });
    if (res.ok) {
      return await res.json();
    } else {
      throw `${res.status} - ${res.statusText}`;
    }
  } catch (cause) {
    console.log(cause);
    return undefined;
  }
}
