import { createBoard } from '@wixc3/react-board';
import { CircleButton } from '../../../components/circle-button/circle-button';

export default createBoard({
    name: 'CircleButton',
    Board: () => <CircleButton iconType="moon" />,
    environmentProps: {
        windowWidth: 1024,
    },
});
