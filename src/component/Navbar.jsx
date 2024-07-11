import Link from "next/link";
import './navbar.css'
const Navbar = () => {
    return (
        <nav className="nav-style">
            <Link href='/'>NEXT_CRUD</Link>
            <button><Link  href='/addTopic'>Add Topic</Link></button>
        </nav>
    );
};

export default Navbar;