import CSComparePlayerPage from '@/components/CSComparePlayerPage';

import { getComparePlayerStats, getPlayerStats, getPlayerTableStats } from "@/helpers/players";

async function getData(ids) {
  const playerOneId = ids[0];
  const playerTwoId = ids[1];

  const resPlayerOne = await fetch(`https://api-web.nhle.com/v1/player/${playerOneId}/landing`);
  const dataPlayerOne = await resPlayerOne.json();

  const resPlayerTwo = await fetch(`https://api-web.nhle.com/v1/player/${playerTwoId}/landing`);
  const dataPlayerTwo = await resPlayerTwo.json();

  const comparePlayerStats = getComparePlayerStats(dataPlayerOne, dataPlayerTwo);
  const playerOneTableStats = getPlayerTableStats(dataPlayerOne);
  const playerTwoTableStats = getPlayerTableStats(dataPlayerTwo);

  return {
    comparePlayerStats,
    playerOneTableStats,
    playerTwoTableStats,
  }
}
 
export default async function Page({ params }) {
  const data = await getData(params.ids);

  return (
    <CSComparePlayerPage data={data} />
  );
}