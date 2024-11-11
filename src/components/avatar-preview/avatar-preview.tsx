import { useMemo } from 'react';
import classNames from 'classnames';
import styles from './avatar-preview.module.scss';
import Avatar from '../../assets/images/avatar.webp';
import { generateAvatar } from '../../utils/generateAvatar';

export interface AvatarPreviewProps {
    className?: string;
    hasAvatar?: boolean;
    firstName?: string;
    lastName?: string;
    variant?: string;
}

export const AvatarPreview = ({
    className,
    hasAvatar,
    firstName = 'Dmitry',
    lastName = 'Zozulya',
    variant
}: AvatarPreviewProps) => {
    const { initials, gradient } = useMemo(
        () => generateAvatar(firstName, lastName),
        [firstName, lastName],
    );

    return (
        <div
            className={classNames(
                styles['avatar-preview'],
                {
                    [styles['is-larger']]: variant === 'larger',
                },
                className,
            )}
            style={{ background: hasAvatar ? 'transparent' : gradient }}
        >
            {hasAvatar ? (
                <img src={Avatar} className={styles['avatar-preview_image']} alt="User Avatar" />
            ) : (
                <span className={styles['avatar-preview_initials']}>{initials}</span>
            )}
        </div>
    );
};
