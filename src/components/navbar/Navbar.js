import Container from "../container/Container";
import "./navbar.css";
import logo from "./reactjs-icon.svg";

export default function Navbar(){
    return(
        <header>
            <nav>
                <Container>
                    <div className="logo-container">
                        <img src={logo} alt="react-logo" />
                        <h1>ReactFacts</h1>
                    </div>
                    <h4>React Course - Project 1</h4>
                </Container>
            </nav>
        </header>
    );
}