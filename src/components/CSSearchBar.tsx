"use client";

import Link from 'next/link';

import { useState } from 'react';

export default function CSSearchBar ({ players }) {

  const [searchPlayers, setSearchPlayers] = useState([]);
  
  const search = (e) => {
    if (e.target.value.length === 0) {
      setSearchPlayers([]);
      return;
    }

    const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(e.target.value.toLowerCase()));

    setSearchPlayers(filteredPlayers);
  }

  const debounce = (func, timeout = 500) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  const debounceSearch = debounce((e) => search(e));

  return (
    <div className="flex flex-col gap-16 items-center">
      <input type="text" placeholder="Search NHL Player" className="focus:border-4 focus:border-[#93a3ad] focus:outline-none focus:ring-0 text-2xl rounded-full px-6 py-4 border-4 border-black bg-white" onInput={(e) => debounceSearch(e)} />
      <div className="flex flex-wrap justify-center gap-8">
        {searchPlayers.map(player => (
          <Link className="flex flex-col gap-4 justify-center items-center group" href={`/players/${player.id}`}>
            <img src={player.headshot} width="200px" height="200px" className="object-cover rounded-full border-4 bg-white border-black group-hover:border-[#93a3ad]" />
            <span className="text-center">{player.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}