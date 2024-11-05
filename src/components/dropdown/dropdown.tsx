import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import styles from './dropdown.module.scss';
import UserIconSvg from '../../assets/icons/UserIcon.svg?react';
import CaseIconSvg from '../../assets/icons/CaseIcon.svg?react';
import FeedbackIconSvg from '../../assets/icons/FeedbackIcon.svg?react';
import SettingsIconSvg from '../../assets/icons/SettingsIcon.svg?react';
import LogoutIconSvg from '../../assets/icons/LogoutIcon.svg?react';
import ExpertIconSvg from '../../assets/icons/ExpertIcon.svg?react';
import { AvatarPreview } from '../avatar-preview/avatar-preview';

export interface DropdownProps {
    className?: string;
}

export const Dropdown = ({ className }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={dropdownRef} className={styles.dropdown}>
            <button className={styles.dropdown_toggle} onClick={handleToggle}>
                <AvatarPreview />
            </button>
            <div
                className={classNames(styles.dropdown_bottom, { [styles.open]: isOpen }, className)}
            >
                <ul className={styles.dropdown_links}>
                    <li className={styles.dropdown_link}>
                        <UserIconSvg width={18} height={18} />
                        My Profile
                    </li>
                    <li className={styles.dropdown_link}>
                        <CaseIconSvg width={18} height={18} />
                        Login as a Customer
                    </li>
                    <li className={styles.dropdown_link}>
                        <ExpertIconSvg width={18} height={18} />
                        Login as an Expert
                    </li>
                    <li className={styles.dropdown_link}>
                        <FeedbackIconSvg width={18} height={18} />
                        Feedback
                    </li>
                    <li className={styles.dropdown_link}>
                        <SettingsIconSvg width={18} height={18} />
                        Settings
                    </li>
                    <li className={styles.dropdown_link}>
                        <LogoutIconSvg width={18} height={18} />
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    );
};
