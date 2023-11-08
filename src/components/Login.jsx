import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Login = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <form>
                <input type="text"></input>
                    <br></br>
                <input type="password"></input>
                    <br></br>
                    <br></br>
                <button>Submit</button>
            </form>
        </div>
    );
}



export default Login