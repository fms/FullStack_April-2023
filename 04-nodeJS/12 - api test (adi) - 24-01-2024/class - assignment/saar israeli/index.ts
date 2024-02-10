const peopleList:string[] = ["saar israeli","yuval levi","bar abulher","ilia medavdev","aviel haim","ofer ben ami","adi dimnet","avi vertzman"];


function getAmountOfPeopleByPrefix(peopleList: string[],namePrefix: string) :number {
    const numberPeople = peopleList.filter(people => people.startsWith(namePrefix))
    return numberPeople.length;
}

/**
 * 1) 
 * You have to write a new function called calculate amount of people by first name
 * The function gets peopleList as an array of full names, and a prefix of a name, and returns a number of how many people starts with the provided name
* This function is a simulation of a core-business function (not related to the tests) 
*/

/** 2) after the function is ready - we want to test it */
// using the following test, we'll test if your function really works
// write a mock function for getPeopleFromCity before the test, and test that your getAmountOfPeopleByPrefix function really works

function getPeopleFromCity(city:string) :string[] {
    return [];
}
// create mock for the getPeopleFromCity function here
test('tests the getAmountOfPeopleByPrefix function', () => {
    const city = 'City';
    const mockGetPeopleFromCity = jest.fn().mockImplementation(() => getPeopleFromCity(city));

    const result = getAmountOfPeopleByPrefix(peopleList,'s');
    expect(result).toBe(1)
  });