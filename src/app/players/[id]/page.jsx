import CSPlayerPage from '@/components/CSPlayerPage';

import { getPlayerStats, getPlayerTableStats } from "@/helpers/players";

async function getData(id) {
  const res = await fetch(`https://api-web.nhle.com/v1/player/${id}/landing`);
  const data = await res.json();

  const playerStats = getPlayerStats(data);
  const playerTableStats = getPlayerTableStats(data);

  return {
    playerStats,
    playerTableStats,
  }
}
 
export default async function Page({ params }) {
  const data = await getData(params.id);

  return (
    <CSPlayerPage data={data} />
  );
}