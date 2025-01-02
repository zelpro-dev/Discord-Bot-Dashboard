import { guilds } from '../data';
import { Link } from 'react-router-dom';

export default function GuildList() {
    return (
        <div className='flex flex-wrap items-center justify-center gap-5 w-fit mx-auto'>
            {guilds.map((guild) => (
                <div 
                    key={guild.id} 
                    className="flex flex-col p-4 border border-gray-200/25 hover:border-gray-200/50 transition-colors rounded-md mb-2 justify-center items-center relative overflow-hidden w-full max-w-80 sm:w-52 hover:shadow-2xl">
                        <img 
                            src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} 
                            alt={guild.name} 
                            className='absolute inset-0 w-full h-1/2 -z-20 object-cover blur-sm opacity-30'
                            aria-hidden />  
                        <img 
                            src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} 
                            alt={guild.name} 
                            className='size-14 rounded-full mb-2' />  
                    <h3 className='mb-4 font-semibold text-center line-clamp-1'>{guild.name}</h3> 

                    <Link to={`/guild/${guild.id}`} className='btn btn-secondary btn-sm'>
                        Configurar
                    </Link>
                </div>
            ))}
        </div>
    );
}
