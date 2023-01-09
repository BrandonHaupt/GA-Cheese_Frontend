import { Link } from "react-router-dom"


export default function Header() {
    return(
        <nav className="nav">
            <Link to='/'><div>Cheese</div></Link>
            <Link to='/test'><div>Test</div></Link>
        </nav>
    )
}