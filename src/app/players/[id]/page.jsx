import CSBarChart from "@/components/CSBarChart";

async function getData(id) {
  const res = await fetch(`https://api-web.nhle.com/v1/player/${id}/landing`);
  const data = await res.json();

  const nhlSeasons = [];
  const nhlPlayoffsSeasons = [];

  data.seasonTotals.forEach(seasonTotal => {
    if (seasonTotal.leagueAbbrev === 'NHL' && seasonTotal.gameTypeId === 2) nhlSeasons.push(seasonTotal);
    if (seasonTotal.leagueAbbrev === 'NHL' && seasonTotal.gameTypeId === 3) nhlPlayoffsSeasons.push(seasonTotal);
  });

  let seasonGoalsAgainstAvg = [];
  let seasonSavePctg = [];
  let seasonShutouts = [];
  let playoffsSeasonGoalsAgainstAvg = [];
  let playoffsSeasonSavePctg = [];
  let playoffsSeasonShutouts = [];

  let seasonGoals = [];
  let seasonAssists = [];
  let seasonPoints = [];
  let seasonPointsPerGame = [];
  let playoffsSeasonGoals = [];
  let playoffsSeasonAssists = [];
  let playoffsSeasonPoints = [];
  let playoffsSeasonPointsPerGame = [];


  if (data.position === 'G') {
    seasonGoalsAgainstAvg = nhlSeasons.map(nhlSeason => { return { season: nhlSeason.season, goalsAgainstAvg: nhlSeason.goalsAgainstAvg.toFixed(2) }});
    seasonSavePctg = nhlSeasons.map(nhlSeason => { return { season: nhlSeason.season, savePctg: nhlSeason.savePctg.toFixed(3) }});
    seasonShutouts = nhlSeasons.map(nhlSeason => { return { season: nhlSeason.season, shutouts: nhlSeason.shutouts }});
    playoffsSeasonGoalsAgainstAvg = nhlPlayoffsSeasons.map(nhlPlayoffsSeason => { return { season: nhlPlayoffsSeason.season, goalsAgainstAvg: nhlPlayoffsSeason.goalsAgainstAvg.toFixed(2) }});
    playoffsSeasonSavePctg = nhlPlayoffsSeasons.map(nhlPlayoffsSeason => { return { season: nhlPlayoffsSeason.season, savePctg: nhlPlayoffsSeason.savePctg.toFixed(3) }});
    playoffsSeasonShutouts = nhlPlayoffsSeasons.map(nhlPlayoffsSeason => { return { season: nhlPlayoffsSeason.season, shutouts: nhlPlayoffsSeason.shutouts }});
  } else {
    seasonGoals = nhlSeasons.map(nhlSeason => { return { season: nhlSeason.season, goals: nhlSeason.goals }});
    seasonAssists = nhlSeasons.map(nhlSeason => { return { season: nhlSeason.season, assists: nhlSeason.assists }});
    seasonPoints = nhlSeasons.map(nhlSeason => { return { season: nhlSeason.season, points: nhlSeason.points }});
    seasonPointsPerGame = nhlSeasons.map(nhlSeason => { return { season: nhlSeason.season, pointsPerGame: (nhlSeason.points/nhlSeason.gamesPlayed).toFixed(1) }});
    playoffsSeasonGoals = nhlPlayoffsSeasons.map(nhlPlayoffsSeason => { return { season: nhlPlayoffsSeason.season, goals: nhlPlayoffsSeason.goals }});
    playoffsSeasonAssists = nhlPlayoffsSeasons.map(nhlPlayoffsSeason => { return { season: nhlPlayoffsSeason.season, assists: nhlPlayoffsSeason.assists }});
    playoffsSeasonPoints = nhlPlayoffsSeasons.map(nhlPlayoffsSeason => { return { season: nhlPlayoffsSeason.season, points: nhlPlayoffsSeason.points }});
    playoffsSeasonPointsPerGame = nhlPlayoffsSeasons.map(nhlPlayoffsSeason => { return { season: nhlPlayoffsSeason.season, pointsPerGame: (nhlPlayoffsSeason.points/nhlPlayoffsSeason.gamesPlayed).toFixed(1) }});
  }

  return {
    player: data,
    seasonGoalsAgainstAvg,
    seasonSavePctg,
    seasonShutouts,
    playoffsSeasonGoalsAgainstAvg,
    playoffsSeasonSavePctg,
    playoffsSeasonShutouts,
    seasonGoals,
    seasonAssists,
    seasonPoints,
    seasonPointsPerGame,
    playoffsSeasonGoals,
    playoffsSeasonAssists,
    playoffsSeasonPoints,
    playoffsSeasonPointsPerGame
  };
}
 
export default async function Page({ params }) {
  const data = await getData(params.id);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col gap-4 justify-center items-center">
        <img src={data.player.headshot} width="200px" height="200px" className="object-cover rounded-full border-4 border-black" />
        <span className="text-center">{data.player.firstName.default} {data.player.lastName.default}</span>
      </div>

      <h1 className="text-center text-2xl font-bold">NHL Season Totals</h1>

      {data.player.position === 'G' && (
        <>
          <CSBarChart data={data.seasonGoalsAgainstAvg} index="season" categories={['goalsAgainstAvg']} xAxisLabel="Season" yAxisLabel="Goals Against Average" />
          <CSBarChart data={data.seasonSavePctg} index="season" categories={['savePctg']} xAxisLabel="Season" yAxisLabel="Save Percentage" />
          <CSBarChart data={data.seasonShutouts} index="season" categories={['shutouts']} xAxisLabel="Season" yAxisLabel="Shutouts" />
        </>
      )}

      {data.player.position !== 'G' && (
        <>
          <CSBarChart data={data.seasonGoals} index="season" categories={['goals']} xAxisLabel="Season" yAxisLabel="Goals" />
          <CSBarChart data={data.seasonAssists} index="season" categories={['assists']} xAxisLabel="Season" yAxisLabel="Assists" />
          <CSBarChart data={data.seasonPoints} index="season" categories={['points']} xAxisLabel="Season" yAxisLabel="Points" />
          <CSBarChart data={data.seasonPointsPerGame} index="season" categories={['pointsPerGame']} xAxisLabel="Season" yAxisLabel="Points Per Game" />
        </>
      )}

      <h1 className="text-center text-2xl font-bold">NHL Playoffs Totals</h1>

      {data.player.position === 'G' && (
        <>
          <CSBarChart data={data.playoffsSeasonGoalsAgainstAvg} index="season" categories={['goalsAgainstAvg']} xAxisLabel="Season" yAxisLabel="Goals Against Average" />
          <CSBarChart data={data.playoffsSeasonSavePctg} index="season" categories={['savePctg']} xAxisLabel="Season" yAxisLabel="Save Percentage" />
          <CSBarChart data={data.playoffsSeasonShutouts} index="season" categories={['shutouts']} xAxisLabel="Season" yAxisLabel="Shutouts" />
        </>
      )}

      {data.player.position !== 'G' && (
        <>
          <CSBarChart data={data.playoffsSeasonGoals} index="season" categories={['goals']} xAxisLabel="Season" yAxisLabel="Goals" />
          <CSBarChart data={data.playoffsSeasonAssists} index="season" categories={['assists']} xAxisLabel="Season" yAxisLabel="Assists" />
          <CSBarChart data={data.playoffsSeasonPoints} index="season" categories={['points']} xAxisLabel="Season" yAxisLabel="Points" />
          <CSBarChart data={data.playoffsSeasonPointsPerGame} index="season" categories={['pointsPerGame']} xAxisLabel="Season" yAxisLabel="Points Per Game" />
        </>
      )}
    </div>
  );
}