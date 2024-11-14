import classNames from 'classnames';
import styles from './experts.module.scss';
import { FiltersSidebar } from '../../components/filters-sidebar/filters-sidebar';
import { BreadCrumbs } from '../../components/bread-crumbs/bread-crumbs';
import { OrderCard } from '../../components/order-card/order-card';

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
                            <OrderCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
