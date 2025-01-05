import { Loader2, RefreshCcw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function AnimeList() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnimes();
  }, []);

  const fetchAnimes = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3080/dashboard/animes', { credentials: 'include' });
      const data = await response.json();
      setAnimes(data);
    } catch (error) {
      console.error('Error fetching animes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='flex flex-wrap items-center justify-center gap-5 w-fit mx-auto'>
        {loading ? (
          <div className='flex items-center justify-center h-40'>
            <Loader2 className='size-12 animate-spin' />
          </div>
        ) : (
          <>
            {!animes.length ? (
              <p>No animes found</p>
            ) : (
              animes.map((anime) => (
                <div key={anime._id} className="card bg-base-100 w-96 shadow-sm">
                  <figure className="px-10 pt-10">
                    <img
                      src={"https://www.animeworldcommunity.com/cdn/shop/files/animeworld2331_1.jpg?v=1735517761"}
                      alt={anime.name}
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{anime.name}</h2>
                    <p>{anime.description}</p>
                    <div className="card-actions">
                      <button className="btn btn-primary">Ver más</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
}