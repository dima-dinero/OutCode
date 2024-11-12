import { createBoard } from '@wixc3/react-board';
import { MemoryRouter } from 'react-router-dom';
import { Experts } from '../../../pages/experts/experts';

export default createBoard({
    name: 'Experts',
    Board: () => (
        <MemoryRouter>
            <Experts />
        </MemoryRouter>
    ),
    environmentProps: {
        windowWidth: 1516,
    },
});
