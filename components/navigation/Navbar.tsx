import Link from 'next/link'

const Navbar: React.FC = () => {
    return (
        <div>
            <Link href="/testPage">
                <a>Test page</a>
            </Link>
        </div>
    )
}

export default Navbar