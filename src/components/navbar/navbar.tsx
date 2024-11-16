import classNames from 'classnames';
import styles from './navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { CircleButton } from '../circle-button/circle-button';
import { Dropdown } from '../dropdown/dropdown';
import { ThemeContext } from '../../context/ThemeContext';
import { NavLink } from 'react-router-dom';

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
                <NavLink to="/" className={styles['navbar_logo-wrapper']}>
                    <p className={styles.navbar_logo}>Out&#123;Code</p>
                </NavLink>
                <ul className={styles['navbar_links-wrapper']}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                classNames(styles.navbar_link, { [styles['is-active']]: isActive })
                            }
                        >
                            Main
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/experts"
                            className={({ isActive }) =>
                                classNames(styles.navbar_link, { [styles['is-active']]: isActive })
                            }
                        >
                            Experts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/orders"
                            className={({ isActive }) =>
                                classNames(styles.navbar_link, { [styles['is-active']]: isActive })
                            }
                        >
                            Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                classNames(styles.navbar_link, { [styles['is-active']]: isActive })
                            }
                        >
                            About
                        </NavLink>
                    </li>
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
                    <CircleButton iconType="login" />
                    <Dropdown />
                </div>
            </nav>
        </header>
    );
};
