import classNames from 'classnames';
import styles from './order-card.module.scss';
import { Avatar } from '../avatar/avatar';
import { CircleButton } from '../circle-button/circle-button';
import { InstrumentTag } from '../instrument-tag/instrument-tag';

export interface OrderCardProps {
    className?: string;
}

export const OrderCard = ({ className }: OrderCardProps) => {
    return (
        <div className={classNames(className, styles['order-card'])}>
            <div className={styles.div1}>
                <div className={styles.div3}>
                    <Avatar variant="larger" />
                    <div className={styles.div2}>
                        <div>
                            <h2 className={styles.header1}>Dmitry Zozulya</h2>
                            <span className={styles.span1}>Web design / Web Development / Ai</span>
                        </div>
                        <div className={styles.div9}>
                            <p>
                                Another factor in creating OutCode was the departure of many foreign
                                platforms from Russia. As a result, the process of interacting with
                                clients from other countries became significantly more complicated.
                                This also contributed to the idea of creating an international
                                project that would help simplify this interaction...
                            </p>
                            <div className={styles.div5}>
                                <InstrumentTag />
                                <InstrumentTag />
                                <InstrumentTag />
                                <InstrumentTag />
                                <InstrumentTag />
                            </div>
                        </div>
                        <div className={styles.div7}>
                            <div className={styles.div8} />
                            <div className={styles.div8} />
                            <div className={styles.div8} />
                            <div className={styles.div8} />
                        </div>
                    </div>
                </div>
                <div className={styles.div4}>
                    <div className={styles.div11}>
                        <h2 className={styles.header1}>1.000$</h2>
                        <span className={styles.span1}>per hour</span>
                    </div>
                    <div className={styles.div10}>
                        <CircleButton iconType="moon" size="medium" />
                        <CircleButton iconType="arrow" size="medium" />
                    </div>
                </div>
            </div>
        </div>
    );
};
