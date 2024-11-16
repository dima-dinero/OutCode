import classNames from 'classnames';
import styles from './card.module.scss';
import TimeIconSvg from '../../assets/icons/order-card/TimeIcon.svg?react';
import EyeIconSvg from '../../assets/icons/order-card/EyeIcon.svg?react';
import ShareIconSvg from '../../assets/icons/order-card/ShareIcon.svg?react';
import { Avatar } from '../avatar/avatar';
import { CircleButton } from '../circle-button/circle-button';
import { InstrumentTag } from '../instrument-tag/instrument-tag';
import { timeAgo } from '../../utils/timeAgo';
import { formatPrice } from '../../utils/formatPrice';

export interface Instrument {
    id?: number;
    title?: string;
}

export interface Order {
    title?: string;
    timestamp?: string;
    views?: number;
    replies?: number;
    description?: string;
    instruments?: Instrument[];
    price?: number;
    currency?: string;
    rate?: string;
}

export interface OrderCardProps {
    className?: string;
    first_name?: string;
    last_name?: string;
    order?: Order;
}

const defaultOrder: Order = {
    title: 'Title',
    timestamp: '2024-08-15 13:46:44.032412+00',
    views: 256,
    replies: 12,
    description: 'Placeholder description',
    instruments: [
        { id: 1, title: 'Instrument 1' },
        { id: 2, title: 'Instrument 2' },
    ],
    price: 1000,
    currency: '$',
    rate: 'per project',
};

export const OrderCard = ({
    className,
    first_name = 'Name',
    last_name = 'Surname',
    order = defaultOrder,
}: OrderCardProps) => {
    const formattedPrice = formatPrice(order.price || defaultOrder.price);

    return (
        <div className={classNames(className, styles.card)}>
            <div className={styles.card_left}>
                <a href="/" className={styles['card_avatar-link']}>
                    <Avatar firstName={first_name} lastName={last_name} size="medium" />
                </a>
                <div className={styles['card_info-wrapper']}>
                    <div className={styles.card_info}>
                        <div>
                            <a href="/">
                                <h2 className={styles.card_heading}>
                                    {order.title || defaultOrder.title}
                                </h2>
                            </a>
                            <div className={styles['card_icons-wrapper']}>
                                <div className={styles['card_icon-wrapper']}>
                                    <TimeIconSvg width={12} height={12} />
                                    <span>
                                        {timeAgo(order.timestamp || defaultOrder.timestamp || '')}
                                    </span>
                                </div>
                                <div className={styles['card_icon-wrapper']}>
                                    <EyeIconSvg width={16} height={16} />
                                    <span>{order.views || defaultOrder.views}</span>
                                </div>
                                <div className={styles['card_icon-wrapper']}>
                                    <ShareIconSvg width={12} height={12} />
                                    <span>{order.replies || defaultOrder.replies}</span>
                                </div>
                            </div>
                        </div>
                        <p className={styles.card_description}>
                            {order.description || defaultOrder.description}
                        </p>
                        <div className={styles['card_instruments-wrapper']}>
                            {(order.instruments || defaultOrder.instruments)?.map((instrument) => (
                                <InstrumentTag key={instrument.id} title={instrument.title || ''} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.card_right}>
                <div>
                    <p className={styles.card_heading}>
                        {formattedPrice + '' + (order.currency || defaultOrder.currency)}
                    </p>
                    <span className={styles['card_text-secondary']}>
                        {order.rate || defaultOrder.rate}
                    </span>
                </div>
                <div className={styles['card_buttons-wrapper']}>
                    <a href="/">
                        <CircleButton iconType="arrow-up" size="medium" />
                    </a>
                </div>
            </div>
        </div>
    );
};
