import classNames from 'classnames';
import styles from './card.module.scss';
import { Avatar } from '../avatar/avatar';
import { CircleButton } from '../circle-button/circle-button';
import { InstrumentTag } from '../instrument-tag/instrument-tag';
import TimeIconSvg from '../../assets/icons/order-card/TimeIcon.svg?react';
import EyeIconSvg from '../../assets/icons/order-card/EyeIcon.svg?react';
import ShareIconSvg from '../../assets/icons/order-card/ShareIcon.svg?react';

export interface OrderCardProps {
    className?: string;
}

export const OrderCard = ({ className }: OrderCardProps) => {
    return (
        <div className={classNames(className, styles.card)}>
            <div className={styles.card_left}>
                <a href="/" className={styles['card_avatar-link']}>
                    <Avatar size="medium" />
                </a>
                <div className={styles['card_info-wrapper']}>
                    <div className={styles.card_info}>
                        <div>
                            <h2 className={styles.card_heading}>Create a website with Webflow</h2>
                            <div className={styles['card_icons-wrapper']}>
                                <div className={styles['card_icon-wrapper']}>
                                    <TimeIconSvg width={12} height={12} />
                                    <span>2 hours ago</span>
                                </div>
                                <div className={styles['card_icon-wrapper']}>
                                    <EyeIconSvg width={16} height={16} />
                                    <span>256</span>
                                </div>
                                <div className={styles['card_icon-wrapper']}>
                                    <ShareIconSvg width={12} height={12} />
                                    <span>10</span>
                                </div>
                            </div>
                        </div>
                        <p className={styles.card_description}>
                            Another factor in creating OutCode was the departure of many foreign
                            platforms from Russia. As a result, the process of interacting with
                            clients from other countries became significantly more complicated. This
                            also contributed to the idea of creating an international project that
                            would help simplify this interaction...
                        </p>
                        <div className={styles['card_instruments-wrapper']}>
                            <InstrumentTag />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.card_right}>
                <div>
                    <p className={styles.card_heading}>1000$</p>
                    <span className={styles['card_text-secondary']}>per hour</span>
                </div>
                <div className={styles['card_buttons-wrapper']}>
                    <CircleButton iconType="arrow-up" size="medium" />
                </div>
            </div>
        </div>
    );
};
