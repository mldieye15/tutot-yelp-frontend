import { TopNav } from "./TopNav/TopNav";
import logo from '../assets/logo.png';
import styles from './LandingPage.module.css'

function LandingPage() {
    return (
      <div >
        <TopNav />
        <section class="container is-fluid is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
            <figure className="image is-128x128">
                <img src={logo} alt="Tutorat" className={styles.logo}/>
            </figure>
        </section>
        
      </div>
    );
  }
  
export default LandingPage;