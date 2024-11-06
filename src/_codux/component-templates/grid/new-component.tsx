import classNames from 'classnames';
import styles from './new-component.module.scss';

export interface NewComponentProps {
    className?: string;
}

export const NewComponent = ({ className }: NewComponentProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <img
                    src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_04 (1).jpg"
                    alt=""
                    className={styles.img}
                />
            </div>
            <div>
                <img
                    src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_05 (1).jpg"
                    alt=""
                    className={styles.img}
                />
            </div>
            <div>
                <img
                    src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_06 (1).jpg"
                    alt=""
                    className={styles.img}
                />
            </div>
            <div>
                <img
                    src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_03 (1).jpg"
                    alt=""
                    className={styles.img}
                />
            </div>
        </div>
    );
};
