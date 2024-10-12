'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';

import { trendingPlayers } from '@/helpers/players';

export default function CSMainPage() {
  const [hoverPlayer, setHoverPlayer] = useState();

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col gap-8 p-4 bg-white">
        <div className="min-h-[calc(100vh-42px)] flex flex-col gap-8 justify-center">
          <h1 className="text-center text-8xl font-bold"><span className="text-black">Celly</span><span className="text-[#93a3ad]">Stats</span></h1>
          <h2 className="text-center text-2xl">Search, view, and compare NHL player statistics</h2>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">Trending Players</h2>
          <div className="flex flex-col">
            {(Object.values(trendingPlayers)).map((player, index) => (
              <>
                <Link
                  key={index}
                  className="flex justify-between p-4 hover:bg-neutral-200"
                  href={`/players/${player.id}`}
                  onMouseEnter={() => setHoverPlayer(player)}
                  onMouseLeave={() => setHoverPlayer(undefined)}
                  onFocus={() => setHoverPlayer(player)}
                >
                  <img src={player.headshot} width="100px" height="100px" className="self-center object-cover object-center rounded-full border-2 bg-white border-black" />
                  <div className="flex flex-col self-center">
                    <span className="text-right">{player.firstName}</span>
                    <span className="text-right font-bold text-2xl">{player.lastName}</span>
                  </div>
                </Link>
                {index !== Object.values(trendingPlayers).length - 1 && (
                  <div className="h-[1px] w-full bg-neutral-200"></div>
                )}
              </>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">Trending Comparisons</h2>
          <div className="flex flex-col">
            <Link className="relative flex justify-between items-center hover:bg-neutral-200 p-4" href={`/compare/${trendingPlayers.CONNOR_MCDAVID.id}/${trendingPlayers.AUSTON_MATTHEWS.id}`}>
              <div className="flex flex-col gap-4 items-start">
                <img src={trendingPlayers.CONNOR_MCDAVID.headshot} width="100px" height="100px" className="object-cover rounded-full border-2 bg-white border-black" />
                <div className="flex flex-col">
                  <span className="text-left">{trendingPlayers.CONNOR_MCDAVID.firstName}</span>
                  <span className="text-left font-bold text-2xl">{trendingPlayers.CONNOR_MCDAVID.lastName}</span>
                </div>
              </div>
              <p className="font-bold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">vs</p>
              <div className="flex flex-col gap-4 items-end">
                <img src={trendingPlayers.AUSTON_MATTHEWS.headshot} width="100px" height="100px" className="object-cover rounded-full border-2 bg-white border-black" />
                <div className="flex flex-col">
                  <span className="text-right">{trendingPlayers.AUSTON_MATTHEWS.firstName}</span>
                  <span className="text-right font-bold text-2xl">{trendingPlayers.AUSTON_MATTHEWS.lastName}</span>
                </div>
              </div>
            </Link>
            <div className="h-[1px] w-full bg-neutral-200"></div>
            <Link className="relative flex justify-between items-center hover:bg-neutral-200 p-4" href={`/compare/${trendingPlayers.QUINN_HUGHES.id}/${trendingPlayers.CALE_MAKAR.id}`}>
              <div className="flex flex-col gap-4 items-start">
                <img src={trendingPlayers.QUINN_HUGHES.headshot} width="100px" height="100px" className="object-cover rounded-full border-2 bg-white border-black" />
                <div className="flex flex-col">
                  <span className="text-left">{trendingPlayers.QUINN_HUGHES.firstName}</span>
                  <span className="text-left font-bold text-2xl">{trendingPlayers.QUINN_HUGHES.lastName}</span>
                </div>
              </div>
              <p className="font-bold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">vs</p>
              <div className="flex flex-col gap-4 items-end">
                <img src={trendingPlayers.CALE_MAKAR.headshot} width="100px" height="100px" className="object-cover rounded-full border-2 bg-white border-black" />
                <div className="flex flex-col">
                  <span className="text-right">{trendingPlayers.CALE_MAKAR.firstName}</span>
                  <span className="text-right font-bold text-2xl">{trendingPlayers.CALE_MAKAR.lastName}</span>
                </div>
              </div>
            </Link>
            <div className="h-[1px] w-full bg-neutral-200"></div>
            <Link className="relative flex justify-between items-center hover:bg-neutral-200 p-4" href={`/compare/${trendingPlayers.THATCHER_DEMKO.id}/${trendingPlayers.CONNOR_HELLEBUYCK.id}`}>
              <div className="flex flex-col gap-4 items-start">
                <img src={trendingPlayers.THATCHER_DEMKO.headshot} width="100px" height="100px" className="object-cover rounded-full border-2 bg-white border-black" />
                <div className="flex flex-col">
                  <span className="text-left">{trendingPlayers.THATCHER_DEMKO.firstName}</span>
                  <span className="text-left font-bold text-2xl">{trendingPlayers.THATCHER_DEMKO.lastName}</span>
                </div>
              </div>
              <p className="font-bold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">vs</p>
              <div className="flex flex-col gap-4 items-end">
                <img src={trendingPlayers.CONNOR_HELLEBUYCK.headshot} width="100px" height="100px" className="object-cover rounded-full border-2 bg-white border-black" />
                <div className="flex flex-col">
                  <span className="text-right">{trendingPlayers.CONNOR_HELLEBUYCK.firstName}</span>
                  <span className="text-right font-bold text-2xl">{trendingPlayers.CONNOR_HELLEBUYCK.lastName}</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative top-0 right-0 w-full min-h-[calc(100vh-42px)] hidden lg:block">
        <div className="sticky top-[42px] right-0 flex items-center justify-center">
          <img src={hoverPlayer?.background || '/images/rogers_arena.jpg'} width="100px" height="100px" className="w-full h-[calc(100vh-42px)] object-cover" />
        </div>
      </div>
    </div>
  );
}