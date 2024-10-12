'use client';

import CSBarChart from "@/components/CSBarChart";
import CSLineChart from "@/components/CSLineChart";
import CSTable from '@/components/CSTable';

export default function CSPlayerPage({ data }) {

  return (
    <div className="flex flex-col items-center gap-8 p-4 w-full max-w-screen-lg m-auto">
      <div className="flex flex-col gap-4 p-4">
        <img src={data.playerStats.player.headshot} width="100px" height="100px" className="self-center object-cover object-center rounded-full border-2 bg-white border-black" />
        <div className="flex flex-col self-center">
          <span className="text-center">{data.playerStats.player.firstName.default}</span>
          <span className="text-center font-bold text-2xl">{data.playerStats.player.lastName.default}</span>
        </div>
      </div>

      <h1 className="text-center text-2xl font-bold">NHL Season Totals</h1>

      <CSTable data={data.playerTableStats} type="regularSeason" />

      {data.playerStats.player.position === 'G' && (
        <>
          <h2 className="text-center text-2xl font-bold">Goals Against Average</h2>
          <CSBarChart data={data.playerStats.regularSeason.goalsAgainstAverage} index="season" categories={['goalsAgainstAverage']} xAxisLabel="Season" yAxisLabel="Goals Against Average" />
          <CSLineChart data={data.playerStats.regularSeason.goalsAgainstAverage} index="season" categories={['goalsAgainstAverage']} xAxisLabel="Season" yAxisLabel="Goals Against Average" />
          <h2 className="text-center text-2xl font-bold">Save Percentage</h2>
          <CSBarChart data={data.playerStats.regularSeason.savePercentage} index="season" categories={['savePercentage']} xAxisLabel="Season" yAxisLabel="Save Percentage" />
          <CSLineChart data={data.playerStats.regularSeason.savePercentage} index="season" categories={['savePercentage']} xAxisLabel="Season" yAxisLabel="Save Percentage" />
          <h2 className="text-center text-2xl font-bold">Shutouts</h2>
          <CSBarChart data={data.playerStats.regularSeason.shutouts} index="season" categories={['shutouts']} xAxisLabel="Season" yAxisLabel="Shutouts" />
          <CSLineChart data={data.playerStats.regularSeason.shutouts} index="season" categories={['shutouts']} xAxisLabel="Season" yAxisLabel="Shutouts" />
        </>
      )}

      {data.playerStats.player.position !== 'G' && (
        <>
          <h2 className="text-center text-2xl font-bold">Goals</h2>
          <CSBarChart data={data.playerStats.regularSeason.goals} index="season" categories={['goals']} xAxisLabel="Season" yAxisLabel="Goals" />
          <CSLineChart data={data.playerStats.regularSeason.goals} index="season" categories={['goals']} xAxisLabel="Season" yAxisLabel="Goals" />
          <h2 className="text-center text-2xl font-bold">Assists</h2>
          <CSBarChart data={data.playerStats.regularSeason.assists} index="season" categories={['assists']} xAxisLabel="Season" yAxisLabel="Assists" />
          <CSLineChart data={data.playerStats.regularSeason.assists} index="season" categories={['assists']} xAxisLabel="Season" yAxisLabel="Assists" />
          <h2 className="text-center text-2xl font-bold">Points</h2>
          <CSBarChart data={data.playerStats.regularSeason.points} index="season" categories={['points']} xAxisLabel="Season" yAxisLabel="Points" />
          <CSLineChart data={data.playerStats.regularSeason.points} index="season" categories={['points']} xAxisLabel="Season" yAxisLabel="Points" />
          <h2 className="text-center text-2xl font-bold">Points Per Game</h2>
          <CSBarChart data={data.playerStats.regularSeason.pointsPerGame} index="season" categories={['pointsPerGame']} xAxisLabel="Season" yAxisLabel="Points Per Game" />
          <CSLineChart data={data.playerStats.regularSeason.pointsPerGame} index="season" categories={['pointsPerGame']} xAxisLabel="Season" yAxisLabel="Points Per Game" />
        </>
      )}

      <h1 className="text-center text-2xl font-bold">NHL Playoffs Totals</h1>

      <CSTable data={data.playerTableStats} type="playoffs" />

      {data.playerStats.player.position === 'G' && (
        <>
          <h2 className="text-center text-2xl font-bold">Goals Against Average</h2>
          <CSBarChart data={data.playerStats.playoffs.goalsAgainstAverage} index="season" categories={['goalsAgainstAverage']} xAxisLabel="Season" yAxisLabel="Goals Against Average" />
          <CSLineChart data={data.playerStats.playoffs.goalsAgainstAverage} index="season" categories={['goalsAgainstAverage']} xAxisLabel="Season" yAxisLabel="Goals Against Average" />
          <h2 className="text-center text-2xl font-bold">Save Percentage</h2>
          <CSBarChart data={data.playerStats.playoffs.savePercentage} index="season" categories={['savePercentage']} xAxisLabel="Season" yAxisLabel="Save Percentage" />
          <CSLineChart data={data.playerStats.playoffs.savePercentage} index="season" categories={['savePercentage']} xAxisLabel="Season" yAxisLabel="Save Percentage" />
          <h2 className="text-center text-2xl font-bold">Shutouts</h2>
          <CSBarChart data={data.playerStats.playoffs.shutouts} index="season" categories={['shutouts']} xAxisLabel="Season" yAxisLabel="Shutouts" />
          <CSLineChart data={data.playerStats.playoffs.shutouts} index="season" categories={['shutouts']} xAxisLabel="Season" yAxisLabel="Shutouts" />
        </>
      )}

      {data.playerStats.player.position !== 'G' && (
        <>
          <h2 className="text-center text-2xl font-bold">Goals</h2>
          <CSBarChart data={data.playerStats.playoffs.goals} index="season" categories={['goals']} xAxisLabel="Season" yAxisLabel="Goals" />
          <CSLineChart data={data.playerStats.playoffs.goals} index="season" categories={['goals']} xAxisLabel="Season" yAxisLabel="Goals" />
          <h2 className="text-center text-2xl font-bold">Assists</h2>
          <CSBarChart data={data.playerStats.playoffs.assists} index="season" categories={['assists']} xAxisLabel="Season" yAxisLabel="Assists" />
          <CSLineChart data={data.playerStats.playoffs.assists} index="season" categories={['assists']} xAxisLabel="Season" yAxisLabel="Assists" />
          <h2 className="text-center text-2xl font-bold">Points</h2>
          <CSBarChart data={data.playerStats.playoffs.points} index="season" categories={['points']} xAxisLabel="Season" yAxisLabel="Points" />
          <CSLineChart data={data.playerStats.playoffs.points} index="season" categories={['points']} xAxisLabel="Season" yAxisLabel="Points" />
          <h2 className="text-center text-2xl font-bold">Points Per Game</h2>
          <CSBarChart data={data.playerStats.playoffs.pointsPerGame} index="season" categories={['pointsPerGame']} xAxisLabel="Season" yAxisLabel="Points Per Game" />
          <CSLineChart data={data.playerStats.playoffs.pointsPerGame} index="season" categories={['pointsPerGame']} xAxisLabel="Season" yAxisLabel="Points Per Game" />
        </>
      )}
    </div>
  );
}