import { Link } from 'react-router-dom' 

const NavbarContainer = () => {
    return (
        <header className="p-2 border-b flex justify-between items-center">
            <div className="flex-1 items-center">
                <img
                    src="/logo filmlist-check.png"
                    alt="logo de la app"
                    className="mx-8 h-20 w-20 object-cover rounded-full"
                />
            </div>
            <nav className="flex justify-center gap-5 px-6">
                <Link className="bg-gray-600 px-4 py-2 text-white rounded-lg" to="/">
                    Home
                </Link>
                <Link className="bg-gray-600 px-4 py-2 text-white rounded-lg" to="/my-list">
                    Mi Lista
                </Link>
            </nav>
            <div className="flex-1" />
        </header>
    )
}

export default NavbarContainer
