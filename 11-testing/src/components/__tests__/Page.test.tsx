import {render, screen} from "@testing-library/react";
import {Page} from "../Page";
import '@testing-library/jest-dom';

const TITLE_TEXT = 'Page Title';
const CHILDREN_TEXT = 'Children text';
const ERROR_TEXT = 'Error message';

function renderPage({error, loading}: any) {
    render(
        <Page title={TITLE_TEXT} error={error} loading={loading}>
            {CHILDREN_TEXT}
        </Page>
    )
}

describe('<Page/>', () => {
    it('should render title', () => {
        renderPage({})
        const title = screen.getByText(TITLE_TEXT);
        expect(title).toBeInTheDocument();
    });

    it('should render children', () => {
        renderPage({})
        const children = screen.getByText(CHILDREN_TEXT);
        expect(children).toBeInTheDocument();
    });

    it('should render loading', () => {
        renderPage({loading: true})
        const loading = screen.getByText('Loading...');
        const children = screen.queryByText(CHILDREN_TEXT);
        expect(loading).toBeInTheDocument();
        expect(children).not.toBeInTheDocument();
    });

    it('should render error', () => {
        renderPage({error: ERROR_TEXT})
        const error = screen.getByText(ERROR_TEXT);
        const children = screen.queryByText(CHILDREN_TEXT);
        expect(error).toBeInTheDocument();
        expect(children).not.toBeInTheDocument();
    });
});