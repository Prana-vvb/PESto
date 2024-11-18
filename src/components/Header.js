import Link from 'next/link';

const Header = () => {
    // Change links for prod
    return (
        <header>
            <div className="logo">
                <img src="/PESto.png" alt="Logo" />
            </div>
            <nav>
                <Link href="/" className="nav-btn">Get Started</Link>
                <Link href="http://localhost:3001" className="nav-btn">GPA Calculator</Link>
                <Link href="#about-us" className="nav-btn">About Us</Link>
            </nav>
        </header>
    );
};

export default Header;
