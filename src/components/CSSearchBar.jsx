"use client";

import Link from 'next/link';

import { useState } from 'react';

export default function CSSearchBar ({ players, selectedPlayer, handleSelectPlayer, placeholder }) {
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsDisplay, setSearchResultsDisplay] = useState([]);
  const [searchResultsDisplayNumber, setSearchResultsDisplayNumber] = useState(0);
  
  const search = (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();

    if (searchTerm.length === 0) {
      setSearchResults([]);
      setSearchResultsDisplayNumber(0);
      setSearchResultsDisplay([]);
      return;
    }

    const filteredPlayers = players.filter(player => {
      const fullName = player.firstName + ' ' + player.lastName;
      return fullName.toLowerCase().includes(searchTerm);
    });

    setSearchResults(filteredPlayers);
    setSearchResultsDisplayNumber(10);
    setSearchResultsDisplay(filteredPlayers.slice(0, 10));
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
    <div className="flex flex-col gap-8 w-full">
      <input type="text" placeholder={placeholder || 'Search NHL Players'} className="focus:border-2 focus:border-[#93a3ad] focus:outline-none focus:ring-0 rounded-full px-4 py-2 border-2 border-black bg-white w-full" onInput={(e) => debounceSearch(e)} />
      
      {searchResultsDisplay.length > 0 && (
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">Results</h2>
          <div className="flex flex-col w-full">
            {searchResultsDisplay.map((player, index) => (
              <>
                {!handleSelectPlayer && (
                  <>
                    <Link
                      key={index}
                      className="flex justify-between p-4 hover:bg-neutral-200"
                      href={`/players/${player.id}`}
                    >
                      <img src={player.headshot} width="100px" height="100px" className="self-center object-cover object-center rounded-full border-2 bg-white border-black" />
                      <div className="flex flex-col self-center">
                        <span className="text-right">{player.firstName}</span>
                        <span className="text-right font-bold text-2xl">{player.lastName}</span>
                      </div>
                    </Link>
                    {index !== searchResultsDisplay.length - 1 && (
                      <div className="h-[1px] w-full bg-neutral-200"></div>
                    )}
                  </>
                )}
                {handleSelectPlayer && (
                  <>
                    <button
                      className="flex justify-between p-4 hover:bg-neutral-200 disabled:pointer-events-none disabled:bg-blue-500 disabled:text-white"
                      onClick={() => handleSelectPlayer(player)}
                      disabled={selectedPlayer?.id === player.id}
                    >
                      <img src={player.headshot} width="100px" height="100px" className="self-center object-cover object-center rounded-full border-2 bg-white border-black" />
                      <div className="flex flex-col self-center">
                        <span className="text-right">{player.firstName}</span>
                        <span className="text-right font-bold text-2xl">{player.lastName}</span>
                      </div>
                    </button>
                    {index !== searchResultsDisplay.length - 1 && (
                      <div className="h-[1px] w-full bg-neutral-200"></div>
                    )}
                  </>
                )}
              </>
            ))}
          </div>
          {searchResults.length !== searchResultsDisplay.length && (
            <button
              className="px-4 py-2 text-white bg-blue-500 hover:bg-black rounded"
              onClick={() => {
                setSearchResultsDisplayNumber(searchResultsDisplayNumber + 10);
                setSearchResultsDisplay([...searchResultsDisplay, ...searchResults.slice(searchResultsDisplayNumber, searchResultsDisplayNumber + 10)])
              }}
            >
              Show More
            </button>
          )}
        </div>
      )}
    </div>
  );
}