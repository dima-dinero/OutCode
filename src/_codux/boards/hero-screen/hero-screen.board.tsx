import { createBoard } from '@wixc3/react-board';
import { HeroScreen } from '../../../components/hero-screen/hero-screen';
import styles from './hero-screen.board.module.scss';

export default createBoard({
    name: 'HeroScreen',
    Board: () => <HeroScreen className={styles.hero_section} />,
    environmentProps: {
        windowWidth: 1256,
    },
});
