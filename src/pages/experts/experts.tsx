import classNames from 'classnames';
import styles from './experts.module.scss';
import { Navbar } from '../../components/navbar/navbar';
import { FiltersSidebar } from '../../components/filters-sidebar/filters-sidebar';
import { ExpertCard } from '../../components/expert-card/expert-card';

export interface ExpertsProps {
    className?: string;
}

export const Experts = ({ className }: ExpertsProps) => {
    return (
        <>
            <Navbar />
            <div className={styles.page_layout}>
                <FiltersSidebar />
                <div className={styles['page_content-wrapper']}>
                    <div className={styles.page_content}>
                        <ExpertCard
                            profile={{
                                description:
                                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
