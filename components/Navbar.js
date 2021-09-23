import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className="menu-bar">
                    <li>
                        <Link href="/Home">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/About">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Product">
                            <a>Product</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
