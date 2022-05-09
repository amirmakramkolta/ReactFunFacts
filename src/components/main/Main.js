import Container from "../container/Container";
import "./main.css";

export default function Main(){
    return(
        <main>
            <Container>
                <h2 className="facts">Fun facts about React</h2>
                <ul className="facts-item">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </Container>
        </main>
    );
}