import classNames from 'classnames';
import styles from './experts-page.module.scss';
import { Navbar } from '../../components/navbar/navbar';
import { FiltersSidebar } from '../../components/filters-sidebar/filters-sidebar';

export interface ExpertsPageProps {
    className?: string;
}

export const ExpertsPage = ({ className }: ExpertsPageProps) => {
    return (
        <>
            <Navbar />
            <div className={styles.page_layout}>
                <FiltersSidebar />
                <div className={styles['page_content-wrapper']}>
                    <div className={styles.page_content}></div>
                </div>
            </div>
        </>
    );
};
