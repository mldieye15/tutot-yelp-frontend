import React from 'react';
import styles from './TopNav.module.css';

function TopNav() {
    return (
        <div className={styles['top-nav']}>
            <div className={styles.left}>
                <span>Tutorat</span>
                <span>Modalit&eacute;</span>
            </div>
            <div className={styles.right}>
                <span>Connexion</span>
                <button className="button">Inscription</button>
            </div>
        </div>
    )
}

export default TopNav
