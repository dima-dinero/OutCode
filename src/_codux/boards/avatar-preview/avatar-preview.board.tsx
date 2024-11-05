import { createBoard } from '@wixc3/react-board';
import { AvatarPreview } from '../../../components/avatar-preview/avatar-preview';

export default createBoard({
    name: 'AvatarPreview',
    Board: () => <AvatarPreview />,
});
