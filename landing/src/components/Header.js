import Image from 'next/image';
import Link from 'next/link';

const Header = ({ userImage, userName }) => {
    // Change links for prod
    return (
        <header>
            <div className="logo">
                <img src="/PESto.png" alt="Logo" />
            </div>
            <nav>
                {userImage ? (
                    <Image src={userImage} alt={userName} width={40} height={40} className='avatar' />
                ) : (
                    <Image src="/User.png" alt="User" width={40} height={40} className='avatar' />
                )}
                <Link href="http://localhost:3001" className="nav-btn">GPA Calculator</Link>
                <Link href="http://localhost:3004/resources" className="nav-btn">PES Resources</Link>
                <Link href="http://localhost:3004/contact" className="nav-btn">Contact Us</Link>
                <Link href="http://localhost:3004/about" className="nav-btn">About Us</Link>
            </nav>
        </header>
    );
};

export default Header;
