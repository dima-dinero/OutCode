import { createBoard } from '@wixc3/react-board';
import { Dropdown } from '../../../components/dropdown/dropdown';

export default createBoard({
    name: 'Dropdown',
    Board: () => <Dropdown />,
    environmentProps: {
        windowWidth: 1018,
    },
    isSnippet: false,
});
