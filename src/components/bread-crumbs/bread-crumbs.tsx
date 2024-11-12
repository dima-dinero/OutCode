import classNames from 'classnames';
import styles from './bread-crumbs.module.scss';
import { CircleButton } from '../circle-button/circle-button';

export interface BreadCrumbsProps {
    className?: string;
    title?: string;
}

export const BreadCrumbs = ({ className, title = 'Page Title' }: BreadCrumbsProps) => {
    return (
        <div className={classNames(styles.root, className, styles['bread-crumbs_wrapper'])}>
            <a href="/">
                <CircleButton iconType="arrow" />
            </a>
            <h1 className={styles['bread-crumbs_heading']}>{title}</h1>
        </div>
    );
};
