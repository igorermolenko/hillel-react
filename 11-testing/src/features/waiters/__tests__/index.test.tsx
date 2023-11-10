import React from 'react'
import {render, screen, act, waitForElementToBeRemoved} from '../../../utils/test-utils'
import {WaitersComponent} from '../index'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {URL} from "../api/WaiterApi";
import userEvent from "@testing-library/user-event";


const HEADER_COUNT = 1;
const FILTER = 'Axel';
const MOCKED_WAITERS = [
    {
        "id": 1,
        "firstName": "Dino",
        "phone": "415-18-53"
    },
    {
        "id": 2,
        "firstName": "Jakayla",
        "phone": "196-26-69"
    },
    {
        "id": 3,
        "firstName": "Axel",
        "phone": "877-99-83"
    },
    {
        "id": 4,
        "firstName": "Willis",
        "phone": "376-55-65"
    },
    {
        "id": 5,
        "firstName": "Merl",
        "phone": "286-76-83"
    }
]


export const handlers = [
    rest.get(URL, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(MOCKED_WAITERS),
        )
    }),
]

const server = setupServer(...handlers)

describe('<Waiters/>', () => {
    // Enable API mocking before tests.
    beforeAll(() => server.listen())

    // Disable API mocking after the tests are done.
    afterAll(() => server.close())

    // Reset any runtime request handlers we may add during the tests.
    afterEach(() => server.resetHandlers())

    it('should render table with rows', async () => {
        render(<WaitersComponent/>);

        await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

        const rows = screen.getAllByRole('row');

        expect(rows).toHaveLength(MOCKED_WAITERS.length + HEADER_COUNT);
    });

    it('should filter waiters by name', async () => {
        render(<WaitersComponent/>);

        await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

        let filterText = screen.getByRole('textbox');

        await act(async () => {
            await userEvent.type(filterText, FILTER);
        });

        const rows = screen.getAllByRole('row');

        expect(rows).toHaveLength(MOCKED_WAITERS.filter(waiter =>
            waiter.firstName.toLowerCase().includes(FILTER.toLowerCase())).length + HEADER_COUNT);
    });
})