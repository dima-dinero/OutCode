import classNames from 'classnames';
import styles from './filters-sidebar.module.scss';
import { Button } from '../button/button';

export interface FiltersSidebarProps {
    className?: string;
}

export const FiltersSidebar = ({ className }: FiltersSidebarProps) => {
    return (
        <aside className={classNames(className, styles.sidebar)}>
            <div />
            <Button text="Reset Filters" hasIcon />
        </aside>
    );
};
