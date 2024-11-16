import { createBoard } from '@wixc3/react-board';
import { OrderCard } from '../../../components/cards/order-card';

export default createBoard({
    name: 'OrderCard',
    Board: () => <OrderCard order={{}} />,
    environmentProps: {
        windowWidth: 1110,
    },
});
