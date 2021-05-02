import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faDiagnoses, faCompressArrowsAlt, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchSuggestion.module.css';

export function SearchSuggestion() {
    return (
        <div className={`is-flex is-flex-direction-row is-justify-content-center is-align-items-center ${styles.suggestions}`}>
            <div className={styles.suggestion}>
                    <FontAwesomeIcon className="icon is-small" icon={faClipboardList} /> Matiéres
            </div>
            <div className={styles.suggestion}>
                    <FontAwesomeIcon className="icon is-small" icon={faDiagnoses} /> Enseignants
            </div>
            <div className={styles.suggestion}>
                    <FontAwesomeIcon className="icon is-small" icon={faCompressArrowsAlt} /> Renforcement
            </div>
            <div className={styles.suggestion}>
                    <FontAwesomeIcon className="icon is-small" icon={faSchool} /> Partenaires
            </div>
        </div>
    )
}


