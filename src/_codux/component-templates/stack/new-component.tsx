import classNames from 'classnames';
import styles from './new-component.module.scss';

export interface NewComponentProps {
    className?: string;
}

export const NewComponent = ({ className }: NewComponentProps) => {
    return (
        <div className={classNames(className, styles.root)}>
            <div>
                <img
                    src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_01 (1).jpg"
                    alt=""
                    className={styles.img}
                />
            </div>
            <div className={styles.section}>
                <img
                    src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_06 (1).jpg"
                    alt=""
                    className={styles.img}
                />
                <img
                    src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_03 (1).jpg"
                    alt=""
                    className={styles.img}
                />
            </div>
        </div>
    );
};
