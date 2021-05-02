import { TopNav } from "./TopNav/TopNav";
import logo from '../assets/logo.png';
import styles from './LandingPage.module.css'
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchSuggestion } from "./SearchSuggestion/SearchSuggestion";

function LandingPage() {
    return (
      <div className="container is-fluid is-flex is-flex-direction-column is-justify-content-space-around ">
        <TopNav />
        <section className="is-fluid is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
            <figure className="image is-128x128">
                <img src={logo} alt="Tutorat"/>
            </figure>
        </section>
        <section className={`is-flex is-flex-direction-row is-justify-content-center is-align-items-center `}>
            <SearchBar />
        </section>
        <section className={`is-flex is-flex-direction-row is-justify-content-center is-align-items-center `}>
            <SearchSuggestion />
        </section>
      </div>
    );
  }
  
export default LandingPage;