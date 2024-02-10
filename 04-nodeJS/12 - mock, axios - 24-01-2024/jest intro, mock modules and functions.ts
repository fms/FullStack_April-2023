jest.mock('./database-module'); // this happens automatically with automocking
import { getPeopleFromCity } from './database-module';

// this is how we normally use the getPeopleFromCity function to get the city people data
const peopleList = await getPeopleFromCity('telAviv');

getPeopleFromCity as jest.MockedFunction<typeof getPeopleFromCity>;

getPeopleFromCity.mockImplementation((city: string) => {
    switch (city) {
        case 'telAviv':
            return ['Ben Cohen', 'David Levi'];
        case 'holon':
            return ['Lior Avital', 'Rotem Bar', 'Lior Ran'];
        default:
            return [];
    }
});

// API response mock:

import axios from 'axios';
// in api-module:
// HTTP methods: GET, POST, PUT, DELETE
async function getPeopleFromCityFromApi(city: string) {
    const dataFromServer = await axios.get('https://israel-police.co.il/cities/' + city);
    return dataFromServer;
}

getPeopleFromCityFromApi = jest.fn().mockImplementation(async (city: string) => {
    if (city == 'telAviv') {
        return ['Yehoda Levi', 'Saar Israeli'];
    } else if (city == 'holon') {
        return ['Yehoda Shimon', 'Ofer Ben Ami'];
    } else {
        ['Avraham Warzman', 'Ofer Menachem'];
    }
});

let sharedCitiesData = {};

beforeAll(() => {
    sharedCitiesData = {
        ramatGan: { population: 80000, size: 580000 },
        telAviv: { population: 75000, size: 650000 }
    }
    return initializeCityDatabase();
});

beforeEach(() => {
    sharedCitiesData = {
        ramatGan: { population: 80000, size: 580000 },
        telAviv: { population: 75000, size: 650000 }
    }
});

afterAll(() => {
    return clearCityDatabase();
});

test('city database has Vienna', () => {
    delete sharedCitiesData['telAviv'];
    expect(sharedCitiesData).toEqual({
        ramatGan: { population: 80000, size: 580000 },
    });
});

test('city database has San Juan', () => {
    const telAvivData = sharedCitiesData['telAviv'];
    expect(telAvivData.population).toBe(75000);
});

/**
 * 1) 
 * You have to write a new function that calculates amount of people by first name prefix
 * The function gets peopleList as an array of full names, and a prefix of a name, and returns a number of how many people starts with the provided name
* This function is a simulation of a core-business function (not related to the tests) 
*/

function getAmountOfPeopleByPrefix(peopleList: string[], namePrefix: string): number {
    let peopleListByPrefix = peopleList.filter(person => person.startsWith(namePrefix));
    return peopleListByPrefix.length;
}

/** 2) after the function is ready - we want to test it */
// using the following test, we'll test if your function really works
// write a mock function for getPeopleFromCity before the test, and test that your getAmountOfPeopleByPrefix function really works

// create mock for the getPeopleFromCity function

test('test getAmountOfPeopleByPrefix function', () => {
    const peopleList = getPeopleFromCity('holon');
    expect(getAmountOfPeopleByPrefix(peopleList, 'Lior')).toBe(2);
    // The mock function was called at least once
    expect(getPeopleFromCity.mock.calls.length).toBeGreaterThan(0);
    // The mock function was called at least once with the specified args
    expect(getPeopleFromCity.mock.calls).toContainEqual(['holon']);
});

const myMockFn = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call');

console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
// > 'first call', 'second call', 'default', 'default'




