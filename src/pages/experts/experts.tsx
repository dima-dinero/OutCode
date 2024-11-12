import classNames from 'classnames';
import styles from './experts.module.scss';
import { FiltersSidebar } from '../../components/filters-sidebar/filters-sidebar';
import { ExpertCard } from '../../components/expert-card/expert-card';
import { BreadCrumbs } from '../../components/bread-crumbs/bread-crumbs';

export interface ExpertsProps {
    className?: string;
}

export const Experts = ({ className }: ExpertsProps) => {
    return (
        <>
            <div className={styles.page_layout}>
                <FiltersSidebar />
                <div className={styles['page_content-wrapper']}>
                    <div className={styles.page_content}>
                        <BreadCrumbs title="Experts" />
                        <div className={styles['page_content-list']}>
                            <ExpertCard
                                profile={{
                                    description:
                                        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                                    first_name: 'Дмитрий',
                                    last_name: 'Зозуля',
                                    specialisation: 'Искуственный интеллект',
                                    hasCases: true,
                                    instruments: [
                                        { id: 1, title: 'Webflow' },
                                        { id: 2, title: 'ChatGpt' },
                                        { id: 3, title: 'Tilda' },
                                    ],
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
