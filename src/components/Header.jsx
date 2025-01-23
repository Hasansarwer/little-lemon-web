import Nav from './Nav'
import logo from '/Logo.svg'

export default function Header() {
    return(
        <header>
            <img src={logo} alt="Little lemon logo" />
            <Nav />
        </header>
    )
};