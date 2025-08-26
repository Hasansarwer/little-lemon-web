export default function Nav() {
    return(
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="/booking">Reservations</a></li>
                <li className="order"><a className="oa" href="/">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    )
};