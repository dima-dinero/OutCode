import { createBoard } from '@wixc3/react-board';
import { CircleButton } from '../../../components/circle-button/circle-button';
import styles from './circle-button.board.module.scss';

export default createBoard({
    name: 'CircleButton',
    Board: () => <CircleButton iconType="arrow" size="small" className={styles.circleButton} />,
    environmentProps: {
        windowWidth: 1018,
    },
    isSnippet: false,
});
