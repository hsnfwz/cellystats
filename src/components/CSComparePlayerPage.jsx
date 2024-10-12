'use client';

import CSBarChart from "@/components/CSBarChart";
import CSLineChart from '@/components/CSLineChart';
import CSTable from "@/components/CSTable";
 
export default function CSComparePlayerPage({ data }) {

  return (
    <div className="flex flex-col items-center gap-8 p-4 w-full max-w-screen-lg m-auto">
      <div className="relative flex justify-between items-center p-4 w-full">
        <div className="flex flex-col gap-4 items-start">
          <img src={data.comparePlayerStats.playerOne.headshot} width="100px" height="100px" className="object-cover rounded-full border-2 bg-white border-black" />
          <div className="flex flex-col">
            <span className="text-left">{data.comparePlayerStats.playerOne.firstName.default}</span>
            <span className="text-left font-bold text-2xl">{data.comparePlayerStats.playerOne.lastName.default}</span>
          </div>
          <div className="w-6 h-6 bg-blue-500 rounded"></div>
        </div>
        <p className="font-bold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">vs</p>
        <div className="flex flex-col gap-4 items-end">
          <img src={data.comparePlayerStats.playerTwo.headshot} width="100px" height="100px" className="object-cover rounded-full border-2 bg-white border-black" />
          <div className="flex flex-col">
            <span className="text-right">{data.comparePlayerStats.playerTwo.firstName.default}</span>
            <span className="text-right font-bold text-2xl">{data.comparePlayerStats.playerTwo.lastName.default}</span>
          </div>
          <div className="w-6 h-6 bg-emerald-500 rounded"></div>
        </div>
      </div>

      <h1 className="text-center text-2xl font-bold">NHL Season Totals</h1>
      <CSTable data={data.playerOneTableStats} type="regularSeason" color="blue" />
      <CSTable data={data.playerTwoTableStats} type="regularSeason" color="emerald" />

      {(data.comparePlayerStats.playerOne.position === 'G' || data.comparePlayerStats.playerTwo.position === 'G') && (
        <>
          <h2 className="text-center text-2xl font-bold">Goals Against Average</h2>
          <CSBarChart data={data.comparePlayerStats.regularSeason.goalsAgainstAverage} index="season" categories={['playerOneGoalsAgainstAverage', 'playerTwoGoalsAgainstAverage']} xAxisLabel="Season" yAxisLabel="Goals Against Average" />
          <CSLineChart data={data.comparePlayerStats.regularSeason.goalsAgainstAverage} index="season" categories={['playerOneGoalsAgainstAverage', 'playerTwoGoalsAgainstAverage']} xAxisLabel="Season" yAxisLabel="Goals Against Average" />
          <h2 className="text-center text-2xl font-bold">Save Percentage</h2>
          <CSBarChart data={data.comparePlayerStats.regularSeason.savePercentage} index="season" categories={['playerOneSavePercentage', 'playerTwoSavePercentage']} xAxisLabel="Season" yAxisLabel="Save Percentage" />
          <CSLineChart data={data.comparePlayerStats.regularSeason.savePercentage} index="season" categories={['playerOneSavePercentage', 'playerTwoSavePercentage']} xAxisLabel="Season" yAxisLabel="Save Percentage" />
          <h2 className="text-center text-2xl font-bold">Shutouts</h2>
          <CSBarChart data={data.comparePlayerStats.regularSeason.shutouts} index="season" categories={['playerOneShutouts', 'playerTwoShutouts']} xAxisLabel="Season" yAxisLabel="Shutouts"/>
          <CSLineChart data={data.comparePlayerStats.regularSeason.shutouts} index="season" categories={['playerOneShutouts', 'playerTwoShutouts']} xAxisLabel="Season" yAxisLabel="Shutouts"/>
        </>
      )}

      {(data.comparePlayerStats.playerOne.position !== 'G' || data.comparePlayerStats.playerTwo.position !== 'G') && (
        <>
          <h2 className="text-center text-2xl font-bold">Goals</h2>
          <CSBarChart data={data.comparePlayerStats.regularSeason.goals} index="season" categories={['playerOneGoals', 'playerTwoGoals']} xAxisLabel="Season" yAxisLabel="Goals" />
          <CSLineChart data={data.comparePlayerStats.regularSeason.goals} index="season" categories={['playerOneGoals', 'playerTwoGoals']} xAxisLabel="Season" yAxisLabel="Goals" />
          <h2 className="text-center text-2xl font-bold">Assists</h2>
          <CSBarChart data={data.comparePlayerStats.regularSeason.assists} index="season" categories={['playerOneAssists', 'playerTwoAssists']} xAxisLabel="Season" yAxisLabel="Assists" />
          <CSLineChart data={data.comparePlayerStats.regularSeason.assists} index="season" categories={['playerOneAssists', 'playerTwoAssists']} xAxisLabel="Season" yAxisLabel="Assists" />
          <h2 className="text-center text-2xl font-bold">Points</h2>
          <CSBarChart data={data.comparePlayerStats.regularSeason.points} index="season" categories={['playerOnePoints', 'playerTwoPoints']} xAxisLabel="Season" yAxisLabel="Points" />
          <CSLineChart data={data.comparePlayerStats.regularSeason.points} index="season" categories={['playerOnePoints', 'playerTwoPoints']} xAxisLabel="Season" yAxisLabel="Points" />
          <h2 className="text-center text-2xl font-bold">Points Per Game</h2>
          <CSBarChart data={data.comparePlayerStats.regularSeason.pointsPerGame} index="season" categories={['playerOnePointsPerGame', 'playerTwoPointsPerGame']} xAxisLabel="Season" yAxisLabel="Points Per Game" />
          <CSLineChart data={data.comparePlayerStats.regularSeason.pointsPerGame} index="season" categories={['playerOnePointsPerGame', 'playerTwoPointsPerGame']} xAxisLabel="Season" yAxisLabel="Points Per Game" />
        </>
      )}

      <h1 className="text-center text-2xl font-bold">NHL Playoffs Totals</h1>
      <CSTable data={data.playerOneTableStats} type="playoffs" color="blue" />
      <CSTable data={data.playerTwoTableStats} type="playoffs" color="emerald" />

      {(data.comparePlayerStats.playerOne.position === 'G' || data.comparePlayerStats.playerTwo.position === 'G') && (
        <>
          <h2 className="text-center text-2xl font-bold">Goals Against Average</h2>
          <CSBarChart data={data.comparePlayerStats.playoffs.goalsAgainstAverage} index="season" categories={['playerOneGoalsAgainstAverage', 'playerTwoGoalsAgainstAverage']} xAxisLabel="Season" yAxisLabel="Goals Against Average" />
          <CSLineChart data={data.comparePlayerStats.playoffs.goalsAgainstAverage} index="season" categories={['playerOneGoalsAgainstAverage', 'playerTwoGoalsAgainstAverage']} xAxisLabel="Season" yAxisLabel="Goals Against Average" />
          <h2 className="text-center text-2xl font-bold">Save Percentage</h2>
          <CSBarChart data={data.comparePlayerStats.playoffs.savePercentage} index="season" categories={['playerOneSavePercentage', 'playerTwoSavePercentage']} xAxisLabel="Season" yAxisLabel="Save Percentage" />
          <CSLineChart data={data.comparePlayerStats.playoffs.savePercentage} index="season" categories={['playerOneSavePercentage', 'playerTwoSavePercentage']} xAxisLabel="Season" yAxisLabel="Save Percentage" />
          <h2 className="text-center text-2xl font-bold">Shutouts</h2>
          <CSBarChart data={data.comparePlayerStats.playoffs.shutouts} index="season" categories={['playerOneShutouts', 'playerTwoShutouts']} xAxisLabel="Season" yAxisLabel="Shutouts"/>
          <CSLineChart data={data.comparePlayerStats.playoffs.shutouts} index="season" categories={['playerOneShutouts', 'playerTwoShutouts']} xAxisLabel="Season" yAxisLabel="Shutouts"/>
        </>
      )}

      {(data.comparePlayerStats.playerOne.position !== 'G' || data.comparePlayerStats.playerTwo.position !== 'G') && (
        <>
          <h2 className="text-center text-2xl font-bold">Goals</h2>
          <CSBarChart data={data.comparePlayerStats.playoffs.goals} index="season" categories={['playerOneGoals', 'playerTwoGoals']} xAxisLabel="Season" yAxisLabel="Goals" />
          <CSLineChart data={data.comparePlayerStats.playoffs.goals} index="season" categories={['playerOneGoals', 'playerTwoGoals']} xAxisLabel="Season" yAxisLabel="Goals" />
          <h2 className="text-center text-2xl font-bold">Assists</h2>
          <CSBarChart data={data.comparePlayerStats.playoffs.assists} index="season" categories={['playerOneAssists', 'playerTwoAssists']} xAxisLabel="Season" yAxisLabel="Assists" />
          <CSLineChart data={data.comparePlayerStats.playoffs.assists} index="season" categories={['playerOneAssists', 'playerTwoAssists']} xAxisLabel="Season" yAxisLabel="Assists" />
          <h2 className="text-center text-2xl font-bold">Points</h2>
          <CSBarChart data={data.comparePlayerStats.playoffs.points} index="season" categories={['playerOnePoints', 'playerTwoPoints']} xAxisLabel="Season" yAxisLabel="Points" />
          <CSLineChart data={data.comparePlayerStats.playoffs.points} index="season" categories={['playerOnePoints', 'playerTwoPoints']} xAxisLabel="Season" yAxisLabel="Points" />
          <h2 className="text-center text-2xl font-bold">Points Per Game</h2>
          <CSBarChart data={data.comparePlayerStats.playoffs.pointsPerGame} index="season" categories={['playerOnePointsPerGame', 'playerTwoPointsPerGame']} xAxisLabel="Season" yAxisLabel="Points Per Game" />
          <CSLineChart data={data.comparePlayerStats.playoffs.pointsPerGame} index="season" categories={['playerOnePointsPerGame', 'playerTwoPointsPerGame']} xAxisLabel="Season" yAxisLabel="Points Per Game" />
        </>
      )}
    </div>
  );
}
