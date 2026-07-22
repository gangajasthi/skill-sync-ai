import Navbar from "../components/Navbar";
import hero from "../assets/hero.png";

import "../styles/Home.css";

function Home() {

    return(

        <>

        <Navbar/>

        <section className="hero">

            <div className="hero-left">

                <h1>

                    Your AI Career Mentor

                </h1>

                <p>

                    Analyze Resume

                    <br/>

                    Detect Skill Gaps

                    <br/>

                    Learn Faster

                    <br/>

                    Crack Interviews

                </p>

                <button>

                    Get Started

                </button>

            </div>

            <div className="hero-right">

                <img src={hero} alt="" />

            </div>

        </section>

        </>

    )

}

export default Home;