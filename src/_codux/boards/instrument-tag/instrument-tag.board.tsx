import { createBoard } from '@wixc3/react-board';
import { InstrumentTag } from '../../../components/instrument-tag/instrument-tag';

export default createBoard({
    name: 'InstrumentTag',
    Board: () => <InstrumentTag />,
});
