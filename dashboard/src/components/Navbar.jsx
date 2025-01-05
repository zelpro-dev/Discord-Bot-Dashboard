import { CircleUser, Loader2, LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const res = await fetch('http://localhost:3080/dashboard/@me', {
          credentials: 'include',
        });

        if (!res.ok) {
          throw new Error('Not authenticated');
        }

        const user = await res.json();

        setUser(user);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    })();
  }, []);

  async function handleLogout() {
    try {
      const res = await fetch('http://localhost:3080/auth/signout', {
        credentials: 'include',
      });

      if (!res.ok) {
        throw new Error('Failed to logout');
      }

      window.location.href = '/';
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="navbar bg-base-300 p-4">
        <div className="flex-1">
          <a className="font-semibold text-xl ml-2">AnimeWorld</a>
        </div>
        <div className="flex-none mr-5">
          <ul className="menu menu-horizontal px-1">
            <li><a><Link to="/">Inicio</Link></a></li>
            <li><a><Link to="/explorar">Explorar</Link></a></li>
            <li><a><Link to="/recomendar">Recomendar</Link></a></li>
          </ul>
        </div>
        <div className="flex-none gap-2 mr-3">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}