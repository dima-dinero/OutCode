import { createBoard } from '@wixc3/react-board';
import { BreadCrumbs } from '../../../components/bread-crumbs/bread-crumbs';

export default createBoard({
    name: 'BreadCrumbs',
    Board: () => <BreadCrumbs />,
    environmentProps: {
        windowWidth: 1024,
    },
});
