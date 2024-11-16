import classNames from 'classnames';
import styles from './experts.module.scss';
import { FiltersSidebar } from '../../components/filters-sidebar/filters-sidebar';
import { BreadCrumbs } from '../../components/bread-crumbs/bread-crumbs';
import { ExpertCard } from '../../components/cards/expert-card';

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
                                        'Необходим человек который готов взять проект на себя (бэкенд и фронтенд), производить доработки и исправлять появляющееся проблемы и что самое важноe делать это все оперативно. Опыт работы с телеграм ботами и мини-приложениями будет преимуществом. Рассчитываем на долгосрочное сотрудничество и работу над новыми приложениями для телеграма в том числе.',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
