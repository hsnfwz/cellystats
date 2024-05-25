import { promises as fs } from 'fs';

import Link from 'next/link';

import CSSearchBar from '@/components/CSSearchBar';

export default async function Page() {
  const playersFile = await fs.readFile(process.cwd() + '/src/app/players.json', 'utf8');
  const playersData = JSON.parse(playersFile);

  const trendingPlayersFile = await fs.readFile(process.cwd() + '/src/app/trending-players.json', 'utf8');
  const trendingPlayersData = JSON.parse(trendingPlayersFile);

  const players = (Object.values(playersData)).sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) { return -1; }
    if (nameA > nameB) { return 1; }

    return 0;
  });

  const trendingPlayers = (Object.values(trendingPlayersData)).sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) { return -1; }
    if (nameA > nameB) { return 1; }

    return 0;
  });

  return (
    <div className="flex flex-col gap-16 items-center">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-9xl font-bold"><span className="text-[#020708]">Celly</span><span className="text-[#93a3ad]">Stats</span></h1>
      <div className="flex flex-wrap justify-center gap-8">
        {trendingPlayers.map(player => (
          <Link className="flex flex-col gap-4 justify-center items-center group" href={`/players/${player.id}`}>
            <img src={player.headshot} width="200px" height="200px" className="object-cover rounded-full border-4 bg-white border-black group-hover:border-[#93a3ad]" />
            <span className="text-center">{player.name}</span>
          </Link>
        ))}
      </div>
      <CSSearchBar players={players} />
    </div>
  );
}