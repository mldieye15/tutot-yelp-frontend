import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './SearchBar.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export function SearchBar() {
    return (
        <div className={styles['middle-search-bar']} >
           <div className="field has-addons ">
                <p className="control">
                    <a className="button is-static is-medium">Matiéres<span className={styles['red-start']}>*</span> </a>
                </p>
                <p className="control">
                    <input className="input is-medium" type="text" placeholder="Mathématiques, Français, ..." />
                </p>
                <p className="control has-icons-left">
                    <span className="select is-medium">
                    <select>
                        <option value="">Niveaux</option>
                        <option value="terminale">Terminale</option>
                        <option value="premiere">Premiére</option>
                        <option value="seconde">Seconde</option>
                        <option value="troisieme">Troisiéme</option>
                        <option value="quatrieme">Quatriéme</option>
                    </select>
                    </span>
                    <span className="icon is-small is-left">
                    <i className="fas fa-globe"></i>
                    </span>
                </p>
                <p className="control">
                    <button className="button is-medium is-primary">
                        <FontAwesomeIcon className="icon is-medium" icon={faSearch} />
                    </button>  
                </p>
            </div> 
        </div>
    )
}
