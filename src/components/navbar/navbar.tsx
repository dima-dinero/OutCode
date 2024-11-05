import classNames from 'classnames';
import styles from './navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { CircleButton } from '../circle-button/circle-button';
import { Dropdown } from '../dropdown/dropdown';
import { ThemeContext } from '../../context/ThemeContext';

export interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <header className={styles.navbar_component}>
            <nav className={classNames(styles.navbar, styles.navbar_wrapper)}>
                <a href="/" className={styles['navbar_logo-wrapper']}>
                    <p className={styles.navbar_logo}>Out&#123;Code</p>
                </a>
                <ul className={styles['navbar_links-wrapper']}>
                    <li className={styles.navbar_link}>Main</li>
                    <li className={styles.navbar_link}>About</li>
                    <li className={styles.navbar_link}>Experts</li>
                    <li className={styles.navbar_link}>Orders</li>
                </ul>
                <div className={styles['navbar_buttons-wrapper']}>
                    <CircleButton
                        text={i18n.language === 'en' ? 'Ru' : 'En'}
                        onClick={toggleLanguage}
                    />
                    <CircleButton
                        iconType={theme === 'light' ? 'moon' : 'sun'}
                        onClick={toggleTheme}
                    />
                    <CircleButton iconType="bell" hasAlert />
                    <CircleButton iconType="login" isVisible={false} />
                    <Dropdown />
                </div>
            </nav>
        </header>
    );
};
