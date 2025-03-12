'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import CSSearchBar from '@/components/CSSearchBar';

import { getPlayers, trendingPlayers } from '@/helpers/players';

export default function CSComparePlayerPage() {
  const [playerOne, setPlayerOne] = useState();
  const [playerTwo, setPlayerTwo] = useState();

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getData() {
      const _players = await getPlayers();
      setPlayers(_players);
    }

    getData();
  }, []);

  return (
    <div className="flex flex-col gap-8 w-full max-w-screen-lg m-auto">
      <div className="flex flex-col gap-8">
        <h2 className="font-bold text-2xl">Compare Players</h2>
        <div className="relative flex justify-between items-center">
          <div className="flex flex-col gap-8">
            {playerOne && (
              <div className="flex flex-col gap-4 items-start">
                <img src={playerOne.headshot} width="150px" height="150px" className="object-cover rounded-full border bg-white border-black" />
                <div className="flex flex-col">
                  <span className="text-left">{playerOne.firstName}</span>
                  <span className="text-left font-bold text-2xl">{playerOne.lastName}</span>
                </div>
              </div>
            )}
            {!playerOne && (
              <div className="flex flex-col gap-4 items-start">
                <div className="w-[150px] h-[150px] bg-neutral-200 rounded-full"></div>
                <div className="flex flex-col">
                  <span className="text-left">Player</span>
                  <span className="text-left font-bold text-2xl">One</span>
                </div>
              </div>
            )}
          </div>
          <p className="font-bold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">vs</p>
          <div className="flex flex-col gap-8">
            {playerTwo && (
              <div className="flex flex-col gap-4 items-end">
                <img src={playerTwo.headshot} width="150px" height="150px" className="object-cover rounded-full border bg-white border-black" />
                <div className="flex flex-col">
                  <span className="text-right">{playerTwo.firstName}</span>
                  <span className="text-right font-bold text-2xl">{playerTwo.lastName}</span>
                </div>
              </div>
            )}
            {!playerTwo && (
              <div className="flex flex-col gap-4 items-end">
                <div className="w-[150px] h-[150px] bg-neutral-200 rounded-full"></div>
                <div className="flex flex-col">
                  <span className="text-right">Player</span>
                  <span className="text-right font-bold text-2xl">Two</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <CSSearchBar
          players={players}
          selectedPlayer={playerOne}
          handleSelectPlayer={(player) => setPlayerOne(player)}
          placeholder="Search Player 1"
        />
        <CSSearchBar
          players={players}
          selectedPlayer={playerTwo}
          handleSelectPlayer={(player) => setPlayerTwo(player)}
          placeholder="Search Player 2"
        />
      </div>
      <Link
        className={`px-4 py-2 text-center rounded bg-emerald-500 text-white ${playerOne?.id && playerTwo?.id && (playerOne?.id !== playerTwo?.id)? 'hover:bg-black' : 'pointer-events-none opacity-50'}`}
        href={`/compare/${playerOne?.id}/${playerTwo?.id}`}
      >
        Compare
      </Link>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">Trending Comparisons</h2>
        <div className="flex flex-col divide-y divide-neutral-200">
          <Link className="relative flex justify-between items-center hover:bg-neutral-200 p-4" href={`/compare/${trendingPlayers.CONNOR_MCDAVID.id}/${trendingPlayers.AUSTON_MATTHEWS.id}`}>
            <div className="flex flex-col gap-4 items-start w-[200px]">
              <img src={trendingPlayers.CONNOR_MCDAVID.headshot} width="100px" height="100px" className="object-cover rounded-full border bg-white border-black" />
              <div className="flex flex-col">
                <span className="text-left">{trendingPlayers.CONNOR_MCDAVID.firstName}</span>
                <span className="text-left font-bold text-2xl">{trendingPlayers.CONNOR_MCDAVID.lastName}</span>
              </div>
            </div>
            <p className="font-bold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">vs</p>
            <div className="flex flex-col gap-4 items-end w-[200px]">
              <img src={trendingPlayers.AUSTON_MATTHEWS.headshot} width="100px" height="100px" className="object-cover rounded-full border bg-white border-black" />
              <div className="flex flex-col">
                <span className="text-right">{trendingPlayers.AUSTON_MATTHEWS.firstName}</span>
                <span className="text-right font-bold text-2xl">{trendingPlayers.AUSTON_MATTHEWS.lastName}</span>
              </div>
            </div>
          </Link>
          <Link className="relative flex justify-between items-center hover:bg-neutral-200 p-4" href={`/compare/${trendingPlayers.QUINN_HUGHES.id}/${trendingPlayers.CALE_MAKAR.id}`}>
            <div className="flex flex-col gap-4 items-start w-[200px]">
              <img src={trendingPlayers.QUINN_HUGHES.headshot} width="100px" height="100px" className="object-cover rounded-full border bg-white border-black" />
              <div className="flex flex-col">
                <span className="text-left">{trendingPlayers.QUINN_HUGHES.firstName}</span>
                <span className="text-left font-bold text-2xl">{trendingPlayers.QUINN_HUGHES.lastName}</span>
              </div>
            </div>
            <p className="font-bold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">vs</p>
            <div className="flex flex-col gap-4 items-end w-[200px]">
              <img src={trendingPlayers.CALE_MAKAR.headshot} width="100px" height="100px" className="object-cover rounded-full border bg-white border-black" />
              <div className="flex flex-col">
                <span className="text-right">{trendingPlayers.CALE_MAKAR.firstName}</span>
                <span className="text-right font-bold text-2xl">{trendingPlayers.CALE_MAKAR.lastName}</span>
              </div>
            </div>
          </Link>
          <Link className="relative flex justify-between items-center hover:bg-neutral-200 p-4" href={`/compare/${trendingPlayers.THATCHER_DEMKO.id}/${trendingPlayers.CONNOR_HELLEBUYCK.id}`}>
            <div className="flex flex-col gap-4 items-start w-[200px]">
              <img src={trendingPlayers.THATCHER_DEMKO.headshot} width="100px" height="100px" className="object-cover rounded-full border bg-white border-black" />
              <div className="flex flex-col">
                <span className="text-left">{trendingPlayers.THATCHER_DEMKO.firstName}</span>
                <span className="text-left font-bold text-2xl">{trendingPlayers.THATCHER_DEMKO.lastName}</span>
              </div>
            </div>
            <p className="font-bold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">vs</p>
            <div className="flex flex-col gap-4 items-end w-[200px]">
              <img src={trendingPlayers.CONNOR_HELLEBUYCK.headshot} width="100px" height="100px" className="object-cover rounded-full border bg-white border-black" />
              <div className="flex flex-col">
                <span className="text-right">{trendingPlayers.CONNOR_HELLEBUYCK.firstName}</span>
                <span className="text-right font-bold text-2xl">{trendingPlayers.CONNOR_HELLEBUYCK.lastName}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}