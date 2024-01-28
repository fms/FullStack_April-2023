export function cloneObject(obj: Object, returnSame: boolean = false) {
    if (returnSame) {
        return obj;
    }

    return { ...obj };
}
