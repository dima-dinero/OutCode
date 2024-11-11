import { createBoard } from '@wixc3/react-board';
import { Experts } from '../../../pages/experts/experts';

export default createBoard({
    name: 'Experts',
    Board: () => <Experts />,
    environmentProps: {
        windowWidth: 1516,
    },
});
