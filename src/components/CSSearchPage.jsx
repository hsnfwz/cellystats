'use client';

import Link from 'next/link';

import CSSearchBar from '@/components/CSSearchBar';

import { trendingPlayers } from '@/helpers/players';

export default function CSSearchPage({ players }) {

  return (
    <div className="flex flex-col gap-8 w-full max-w-screen-lg m-auto">
      <div className="flex flex-col gap-8">
        <h2 className="font-bold text-2xl">Search Players</h2>
        <CSSearchBar players={players} />
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="font-bold text-2xl">Trending Players</h2>
        <div className="flex flex-col divide-y divide-neutral-200">
          {(Object.values(trendingPlayers)).map((player, index) => (
              <Link
                key={index}
                className="flex justify-between p-4 hover:bg-neutral-200"
                href={`/players/${player.id}`}
              >
                <img src={player.headshot} width="100px" height="100px" className="self-center object-cover object-center rounded-full border bg-white border-black" />
                <div className="flex flex-col self-center">
                  <span className="text-right">{player.firstName}</span>
                  <span className="text-right font-bold text-2xl">{player.lastName}</span>
                </div>
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
}