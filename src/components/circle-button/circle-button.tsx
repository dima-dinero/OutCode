import classNames from 'classnames';
import styles from './circle-button.module.scss';
import SunIcon from '../../assets/icons/circle-button/SunIcon.svg?react';
import MoonIcon from '../../assets/icons/circle-button/MoonIcon.svg?react';
import BellIcon from '../../assets/icons/circle-button/BellIcon.svg?react';
import ArrowIcon from '../../assets/icons/circle-button/ArrowIcon.svg?react';
import LoginIcon from '../../assets/icons/circle-button/LoginIcon.svg?react';
import ArrowUpIcon from '../../assets/icons/circle-button/ArrowUpIcon.svg?react';
import StarIcon from '../../assets/icons/circle-button/StarIcon.svg?react';

export interface CircleButtonProps {
    className?: string;
    text?: string;
    iconType?: 'sun' | 'moon' | 'bell' | 'arrow' | 'login' | 'arrow-up' | 'star';
    hasAlert?: boolean;
    isVisible?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}

export const CircleButton = ({
    className,
    text,
    iconType,
    hasAlert,
    isVisible = true,
    size,
    onClick,
}: CircleButtonProps) => {
    const renderIcon = () => {
        switch (iconType) {
            case 'sun':
                return <SunIcon width={16} height={16} />;
            case 'moon':
                return <MoonIcon width={16} height={16} />;
            case 'bell':
                return <BellIcon width={16} height={16} />;
            case 'arrow':
                return <ArrowIcon width={16} height={16} />;
            case 'login':
                return <LoginIcon width={16} height={16} />;
            case 'arrow-up':
                return <ArrowUpIcon width={16} height={16} />;
            case 'star':
                return <StarIcon width={16} height={16} />;
            default:
                return null;
        }
    };

    return (
        <button
            onClick={onClick}
            className={classNames(
                styles['circle-button'],
                {
                    [styles['']]: size === 'small',
                    [styles['is-medium']]: size === 'medium',
                    [styles['is-large']]: size === 'large',
                },
                className,
            )}
            style={{ display: isVisible ? 'auto' : 'none' }}
        >
            {hasAlert && (
                <div className={styles['circle-button_alert']}>
                    <span>1</span>
                </div>
            )}
            {text}
            {renderIcon()}
        </button>
    );
};
