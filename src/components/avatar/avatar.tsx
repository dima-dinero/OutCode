import { useMemo } from 'react';
import classNames from 'classnames';
import styles from './avatar.module.scss';
import DefaultAvatar from '../../assets/images/defaultAvatar.webp';
import { generateAvatar } from '../../utils/generateAvatar';

export interface AvatarProps {
    className?: string;
    hasAvatar?: boolean;
    firstName?: string;
    lastName?: string;
    size?: 'small' | 'medium' | 'large';
}

export const Avatar = ({
    className,
    hasAvatar,
    firstName = 'Dmitry',
    lastName = 'Zozulya',
    size
}: AvatarProps) => {
    const { initials, gradient } = useMemo(
        () => generateAvatar(firstName, lastName),
        [firstName, lastName],
    );

    return (
        <div
            className={classNames(
                styles['avatar-preview'],
                {
                    [styles['']]: size === "small",
                    [styles['is-medium']]: size === "medium",
                    [styles['is-large']]: size === "large",
                },
                className,
            )}
            style={{ background: hasAvatar ? 'transparent' : gradient }}
        >
            {hasAvatar ? (
                <img src={DefaultAvatar} className={styles['avatar-preview_image']} alt="User Avatar" />
            ) : (
                <span className={styles['avatar-preview_initials']}>{initials}</span>
            )}
        </div>
    );
};
