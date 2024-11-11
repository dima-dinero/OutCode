import { createBoard } from '@wixc3/react-board';
import { ExpertsPage } from '../../../pages/experts-page/experts-page';

export default createBoard({
    name: 'ExpertsPage',
    Board: () => <ExpertsPage />,
    environmentProps: {
        windowWidth: 1634,
    },
});
