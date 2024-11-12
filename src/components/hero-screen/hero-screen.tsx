import classNames from 'classnames';
import styles from './hero-screen.module.scss';
import { Button } from '../button/button';
import { Link } from 'react-router-dom';

export interface HeroScreenProps {
    className?: string;
}

export const HeroScreen = ({ className }: HeroScreenProps) => {
    return (
        <section className={styles.hero_section}>
            <div className={styles['hero_content-wrapper']}>
                <h1 className={styles.hero_heading}>All nocode experts on one platform</h1>
                <div className={styles['hero_paragraph-wrapper']}>
                    <p>
                        You no longer have to spend hundreds of hours searching for specialists or
                        orders in Telegram channels or on websites with inconvenient interfaces.
                        Now, all of this is available on one platform.
                    </p>
                </div>
                <div className={styles.buttons_wrapper}>
                    <Link to="/experts">
                        <Button text="Find an expert" />
                    </Link>
                    <Button variant="secondary" text="Find orders" />
                </div>
            </div>
        </section>
    );
};
