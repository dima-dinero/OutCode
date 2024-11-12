import { createBoard } from '@wixc3/react-board';
import { CircleButton } from '../../../components/circle-button/circle-button';

export default createBoard({
    name: 'CircleButton',
    Board: () => <CircleButton iconType="sun" />,
    environmentProps: {
        windowWidth: 1018,
    },
    isSnippet: false,
});
