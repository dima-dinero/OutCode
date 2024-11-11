import classNames from 'classnames';
import styles from './instrument-tag.module.scss';

export interface InstrumentTagProps {
    className?: string;
    id?: number;
    title?: string;
}

export const InstrumentTag = ({ className, id, title = "Instrument" }: InstrumentTagProps) => {
    return <div className={classNames(className, styles['instrument-tag'])}>{title}</div>;
};
