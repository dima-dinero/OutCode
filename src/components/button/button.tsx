import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
    className?: string;
    variant?: string;
    text: string;
}

export const Button = ({ className, variant, text = 'Button' }: ButtonProps) => {
    return (
        <button
            className={classNames(
                styles[`button`],
                { [styles['is-secondary']]: variant === 'secondary' },
                className,
            )}
        >
            {text}
        </button>
    );
};
