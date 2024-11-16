import { createBoard } from '@wixc3/react-board';
import { ExpertCard } from '../../../components/cards/expert-card';

export default createBoard({
    name: 'ExpertCard',
    Board: () => <ExpertCard />,
    environmentProps: {
        windowWidth: 1088.55625,
        windowHeight: 640,
    },
});
