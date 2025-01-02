import { Link } from 'react-router-dom';

export default function Navbar() {
    return <nav className="z-20 mb-5">
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-300 w-full">
                    <div className="mx-2 flex-1 px-2">
                        <Link to="/" className="font-bold text-lg">
                            Discord Bot Dashboard
                        </Link>
                    </div>

                    <div className="flex-none sm:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                class="inline-block h-6 w-6 stroke-current">
                         1       <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    
                    <div className="hidden flex-none sm:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            <li className='ml-2'><a>Navbar Item 1</a></li>
                            <li className='ml-2'><a>Navbar Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    </nav>
}