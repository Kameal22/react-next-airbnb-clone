import Link from 'next/link'

const Navbar: React.FC = () => {
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/register">
                <a>Register</a>
            </Link>
        </div>
    )
}

export default Navbar