import classNames from 'classnames';
import styles from './button.module.scss';
import ResetIconSvg from '../../assets/icons/button/resetIcon.svg?react';

export interface ButtonProps {
    className?: string;
    variant?: string;
    text?: string;
    hasIcon?: boolean;
}

export const Button = ({ className, variant, text = 'Button', hasIcon = false }: ButtonProps) => {
    return (
        <button
            className={classNames(
                styles[`button`],
                { [styles['is-secondary']]: variant === 'secondary' },
                { [styles['is-transparent']]: variant === 'transparent' },
                className,
            )}
        >
            {hasIcon && <ResetIconSvg width={16} height={16} />}
            {text}
        </button>
    );
};
