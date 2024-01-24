// Specific mock function from module begin:

// First way for mocking specific function from module:
import * as moduleApi from './api-module';
// Somewhere in your test case or test suite
moduleApi.getPeopleFromCityFromApi = jest.fn().mockImplementation((city: string) => ['Avraham Warzman', 'Ofer Menachem'])
// or: 
moduleApi.getPeopleFromCityFromApi = jest.fn().mockReturnValue(['Avraham Warzman', 'Ofer Menachem']);
// or i can also (if i imported / created the funciton in the file):
getPeopleFromCityFromApi = jest.fn().mockImplementation((city: string) => ['Avraham Warzman', 'Ofer Menachem']);

// Second way - using spyOn method of jest:
import * as moduleApi from '@module/api';

// Somewhere in your test case or test suite
jest.spyOn(moduleApi, 'getPeopleFromCityFromApi').mockReturnValue(['Avraham Warzman', 'Ofer Menachem']);

// Specific mock function finish

// Mock API response with mocking axios methods:

// first file (index.js):
import axios from 'axiou';

async function getFirstAlbumTitle() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    return response.data[0].title;
}

module.exports = getFirstAlbumTitle;

// second file:

import getFirstAlbumTitle from './index';
import axios from 'axios';

jest.mock('axios');

it('returns the title of the first album', async () => {
    axios.get.mockResolvedValue({
        data: [
            {
                userId: 1,
                id: 1,
                title: 'My First Album'
            },
            {
                userId: 1,
                id: 2,
                title: 'Album: The Sequel'
            }
        ]
    });

    const title = await getFirstAlbumTitle();
    expect(title).toEqual('My First Album');
});

it('returns the title of the first album - different mock with different url', async () => {
    axios.get.mockImplementation(async (url: string) => {
        if (url == 'https://my-server.com/albums') {
            return {
                data: [
                    {
                        userId: 1,
                        id: 1,
                        title: 'My First Album'
                    },
                    {
                        userId: 1,
                        id: 2,
                        title: 'Album: The Sequel'
                    }
                ]
            };
        } else {
            return {
                data: [
                    {
                        userId: 4,
                        id: 1,
                        title: 'My First Album - the real one!'
                    },
                    {
                        userId: 7,
                        id: 2,
                        title: 'Album: The Sequel - the real one!'
                    }
                ]
            };
        }
    }

    const title = await getFirstAlbumTitle();
    expect(title).toEqual('My First Album');
});
