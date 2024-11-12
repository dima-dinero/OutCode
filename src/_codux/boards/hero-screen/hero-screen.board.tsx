import { createBoard } from '@wixc3/react-board';
import { HeroScreen } from '../../../components/hero-screen/hero-screen';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'HeroScreen',
    Board: () => (
        <MemoryRouter>
            <HeroScreen />
        </MemoryRouter>
    ),
    environmentProps: {
        windowWidth: 1256,
    },
});
