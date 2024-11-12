import { createBoard } from '@wixc3/react-board';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from '../../../components/navbar/navbar';

export default createBoard({
    name: 'Navbar',
    Board: () => (
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>
    ),
    environmentProps: {
        windowWidth: 1181,
    },
    isSnippet: false,
});
