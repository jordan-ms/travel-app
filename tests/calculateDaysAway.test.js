import { calculateDaysAway } from "../src/client";

test('adds the correct string to the days away div', () => {
    const testElem = document.createElement('div');
    testElem.setAttribute('id', 'days-away');
    const departureDate = '04-10-2020';
    const returnDate = '04-20-2020';
    calculateDaysAway(departureDate, returnDate, testElem);

    expect(testElem.innerText).toContain('Trip duration: 10 days.');
})
