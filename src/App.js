import './App.css';
import Card from './components/Card';

// These imports are required as the images wont be recognised if just the url is given
import supervisorsvg from "./images/icon-supervisor.svg";
import teambuildersvg from "./images/icon-team-builder.svg";
import karmasvg from "./images/icon-karma.svg";
import calculatorsvg from "./images/icon-calculator.svg";

function App() {
    return (
        <div className="App">
            <header>
                <h2>Reliable, efficient delivery</h2>
                <h2>Powered by Technology</h2>
                <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
            </header>

            <section className="cards">
                <Card
                    classCustom="carditem"
                    title="Supervisor"
                    body="Monitors activities to identify project roadblocks"
                    image={supervisorsvg}
                    imageText="Icon for Supervisor"
                    borderColor="var(--color-primary-cyan)"
                />

                <Card
                    classCustom="carditem"
                    title="Team Builder"
                    body="Scans our talent network to create the optimal team for your project"
                    image={teambuildersvg}
                    imageText="Icon for Team Builder"
                    borderColor="var(--color-primary-red)"
                />

                <Card
                    classCustom="carditem"
                    title="Karma"
                    body="Regulary evaluates our talent to ensure quality"
                    image={karmasvg}
                    imageText="Icon for Karma"
                    borderColor="var(--color-primary-orange)"
                />

                <Card
                    classCustom="carditem"
                    title="Calculator"
                    body="Uses data from past projects to provide better delivery estimates"
                    image={calculatorsvg}
                    imageText="Icon for Calculator"
                    borderColor="var(--color-primary-blue)"
                />
            </section>
        </div>
    );
}

export default App;
