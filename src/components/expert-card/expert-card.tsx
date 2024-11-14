import classNames from 'classnames';
import styles from './expert-card.module.scss';
import { Avatar } from '../avatar/avatar';
import { InstrumentTag } from '../instrument-tag/instrument-tag';
import { Button } from '../button/button';

export interface Instrument {
    id?: number;
    title?: string;
}

export interface Case {
    id?: number;
    title?: string;
    previewURL?: string;
}

export interface Profile {
    first_name?: string;
    last_name?: string;
    specialisation?: string;
    instruments?: Instrument[];
    price?: number;
    currency?: string;
    rate?: string;
    description?: string;
    hasCases?: boolean;
    cases?: Case[];
}

export interface ExpertCardProps {
    className?: string;
    profile?: Profile;
}

const defaultProfile: Profile = {
    first_name: 'Name',
    last_name: 'Surname',
    specialisation: 'Specialisation',
    instruments: [
        { id: 1, title: 'Webflow' },
        { id: 2, title: 'Figma' },
    ],
    price: 500,
    currency: '$',
    rate: 'per hour',
    description: 'Placeholder description',
    hasCases: true,
    cases: [
        {
            id: 1,
            title: 'Case Study 1',
            previewURL:
                'https://habrastorage.org/getpro/freelansim/allfiles/163/1637/1637901/e591518da3.jpg',
        },
        {
            id: 2,
            title: 'Case Study 2',
            previewURL:
                'https://habrastorage.org/getpro/freelansim/allfiles/148/1489/1489073/7c0db2e255.png',
        },
        {
            id: 3,
            title: 'Case Study 3',
            previewURL:
                'https://habrastorage.org/getpro/freelansim/allfiles/163/1638/1638073/df7992f4ed.png',
        },
        {
            id: 4,
            title: 'Case Study 4',
            previewURL: '',
        },
    ],
};

export const ExpertCard = ({ className, profile = defaultProfile }: ExpertCardProps) => {
    const defaultPreviewURL =
        'https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg';

    return (
        <div className={classNames(className, styles['expert-card'])}>
            <div className={classNames(styles['expert-card_column'], styles['is-left'])}>
                <a href="/" className={styles['expert-card_avatar-link']}>
                    <Avatar
                        firstName={profile.first_name || defaultProfile.first_name}
                        lastName={profile.last_name || defaultProfile.last_name}
                        variant="larger"
                    />
                </a>
                <div>
                    <a href="/">
                        <h2 className={styles['expert-card_name']}>
                            {(profile.first_name || defaultProfile.first_name) +
                                ' ' +
                                (profile.last_name || defaultProfile.last_name)}
                        </h2>
                    </a>
                    <span className={styles['expert-card_specialisation']}>
                        {profile.specialisation || defaultProfile.specialisation}
                    </span>
                    <div className={styles['expert-card_instruments']}>
                        {(profile.instruments || defaultProfile.instruments)?.map((instrument) => (
                            <InstrumentTag key={instrument.id} title={instrument.title || ''} />
                        ))}
                    </div>
                </div>
            </div>
            <div className={classNames(styles['expert-card_column'], styles['is-right'])}>
                <div className={styles['expert-card_description-wrapper']}>
                    <p className={styles['expert-card_price']}>
                        {'Starting at ' +
                            (profile.price || defaultProfile.price) +
                            (profile.currency || defaultProfile.currency) +
                            ' / ' +
                            (profile.rate || defaultProfile.rate)}
                    </p>
                    <p className={styles['expert-card_description']}>
                        {profile.description || defaultProfile.description}
                    </p>
                </div>
                {(profile.hasCases ?? defaultProfile.hasCases) && (
                    <div className={styles['expert-card_cases-wrapper']}>
                        {(profile.cases || defaultProfile.cases)?.slice(0, 3).map((caseItem) => (
                            <a
                                key={caseItem.id}
                                href="/"
                                className={styles['expert-card_case-preview']}
                            >
                                <img
                                    src={caseItem.previewURL || defaultPreviewURL}
                                    alt={caseItem.title || 'Case'}
                                    className={styles['expert-card_case-image']}
                                />
                                <div className={styles['expert-card_case-hover']}>
                                    <h3 className={styles['expert-card_case-title']}>
                                        {caseItem.title || 'Untitled Case'}
                                    </h3>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
                <div className={styles['expert-card_buttons-wrapper']}>
                    <a href="/" className={styles['expert-card_button-link']}>
                        <Button text="Learn More" />
                    </a>
                    <Button text="Add to favorite" variant="secondary" />
                </div>
            </div>
        </div>
    );
};
