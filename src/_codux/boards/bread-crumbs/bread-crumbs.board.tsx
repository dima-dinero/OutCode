import { createBoard } from '@wixc3/react-board';
import { MemoryRouter } from 'react-router-dom';
import { BreadCrumbs } from '../../../components/bread-crumbs/bread-crumbs';

export default createBoard({
    name: 'BreadCrumbs',
    Board: () => (
        <MemoryRouter>
            <BreadCrumbs />
        </MemoryRouter>
    ),
    environmentProps: {
        windowWidth: 1024,
    },
});
