import React from 'react';
import brandImage from '../../assets/embleme.png';
// import styles from './TopNav.module.css';

export function TopNav() {

    document.addEventListener('DOMContentLoaded', () => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
      
          // Add a click event on each of them
          $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
      
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);
      
              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
      
            });
          });
        }
      
      });
      {/* Menu avant utilisation de bulma
        combiniason bulma et mon style: className={`select is-medium ${styles['red-start']}`}
        <section className={styles['top-nav']}>
            <div className={styles.left}>
                <span>Tutorat</span>
                <span>Modalit&eacute;</span>
            </div>
            <div className={styles.right}>
                <span>Connexion</span>
                <button className="button">Inscription</button>
            </div>
        </section>
    */}
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <figure className="navbar-item">
                    <img src={brandImage} alt="Tutorat" width="28" height="28" />
                    Tutorat
                </figure>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                <a className="navbar-item" href="/aide">
                    Aide
                </a>
                
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        Modalités
                    </a>

                    <div className="navbar-dropdown">
                        <a className="navbar-item" href="/modalites/apprenants">
                            Apprenant
                        </a>
                        <a className="navbar-item" href="/modalites/enseignants">
                            Enseignants
                        </a>
                        <a className="navbar-item" href="/modalites/tuteur">
                            Tuteur
                        </a>
                        <hr className="navbar-divider" />
                        <a className="navbar-item" href="/modalites/partenaires">
                            Partenaires
                        </a>
                    </div>
                </div>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-light" href="/auth/connexion">
                            Connexion
                        </a>
                        <a className="button is-primary" href="/auth/inscription">
                            <strong>Inscription</strong>
                        </a>
                        
                    </div>
                </div>
            </div>
            </div>

            
        </nav>

    )
}

//export default TopNav
