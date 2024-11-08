import classNames from 'classnames';
import styles from './circle-button.module.scss';
import SunIcon from '../../assets/icons/SunIcon.svg?react';
import MoonIcon from '../../assets/icons/MoonIcon.svg?react';
import BellIcon from '../../assets/icons/BellIcon.svg?react';
import ArrowIcon from '../../assets/icons/ArrowIcon.svg?react';
import LoginIcon from '../../assets/icons/LoginIcon.svg?react';

export interface CircleButtonProps {
    className?: string;
    text?: string;
    iconType?: 'sun' | 'moon' | 'bell' | 'arrow' | 'login';
    hasAlert?: boolean;
    isVisible?: boolean;
    onClick?: () => void;
}

export const CircleButton = ({
    className,
    text,
    iconType,
    hasAlert,
    isVisible = true,
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
            default:
                return null;
        }
    };

    return (
        <button
            onClick={onClick}
            className={classNames(styles['circle-button'], className)}
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
