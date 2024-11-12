import classNames from 'classnames';
import styles from './bread-crumbs.module.scss';
import { CircleButton } from '../circle-button/circle-button';
import { Link } from 'react-router-dom';

export interface BreadCrumbsProps {
    className?: string;
    title?: string;
    path?: string;
}

export const BreadCrumbs = ({ className, title = 'Page Title', path = '/' }: BreadCrumbsProps) => {
    return (
        <div className={classNames(styles.root, className, styles['bread-crumbs_wrapper'])}>
            <Link to={path}>
                <CircleButton iconType="arrow" />
            </Link>
            <h1 className={styles['bread-crumbs_heading']}>{title}</h1>
        </div>
    );
};
