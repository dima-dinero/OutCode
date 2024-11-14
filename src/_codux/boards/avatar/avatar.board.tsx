import { createBoard } from '@wixc3/react-board';
import { Avatar } from '../../../components/avatar/avatar';

export default createBoard({
    name: 'Avatar',
    Board: () => <Avatar />,
});
