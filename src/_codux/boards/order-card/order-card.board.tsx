import { createBoard } from '@wixc3/react-board';
import { OrderCard } from '../../../components/cards/order-card';

export default createBoard({
    name: 'OrderCard',
    Board: () => <OrderCard />,
    environmentProps: {
        windowWidth: 1110,
    },
});
