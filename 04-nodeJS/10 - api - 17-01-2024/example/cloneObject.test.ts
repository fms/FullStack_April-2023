import { cloneObject } from "./cloneObject";

describe('cloneObject(true)', () => {
    test('cloneObject should return an identical object', () => {
        const testObject = { name: "Shmuel", age: 51, genius: true };

        expect(cloneObject(testObject)).toStrictEqual(testObject);
    });

    test('cloneObject should return a different object', () => {
        const testObject = { name: "Shmuel", age: 51, genius: true };
        expect(cloneObject(testObject)).not.toBe(testObject);
    });
});

describe('cloneObject(false)', () => {
    test('cloneObject should return an identical object', () => {
        const testObject = { name: "Shmuel", age: 51, genius: true };

        expect(cloneObject(testObject, true)).toStrictEqual(testObject);
    });

    test('cloneObject should return a different object', () => {
        const testObject = { name: "Shmuel", age: 51, genius: true };
        expect(cloneObject(testObject, true)).toBe(testObject);
    });
});