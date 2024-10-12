'use client';

export default function CSTable({ data, type, color }) {
  return (
    <table className={`relative block overflow-x-auto w-full border ${color ? `border-${color}-500` : 'border-neutral-300'} rounded`}>
      {data.player.position === 'G' && (
        <>
          <thead>
            <tr className={`border-b ${color ? `border-b-${color}-500` : 'border-b-neutral-300'}`}>
              <th className="px-4 py-2 text-left w-full">Season</th>
              <th className="px-4 py-2 text-left w-full">Team</th>
              <th className="px-4 py-2 text-center w-full">GP</th>
              <th className="px-4 py-2 text-center w-full">GS</th>
              <th className="px-4 py-2 text-center w-full">W</th>
              <th className="px-4 py-2 text-center w-full">L</th>
              <th className="px-4 py-2 text-center w-full">T</th>
              <th className="px-4 py-2 text-center w-full">OT</th>
              <th className="px-4 py-2 text-center w-full">SA</th>
              <th className="px-4 py-2 text-center w-full">GAA</th>
              <th className="px-4 py-2 text-center w-full">SV%</th>
              <th className="px-4 py-2 text-center w-full">SO</th>
              <th className="px-4 py-2 text-center w-full">G</th>
              <th className="px-4 py-2 text-center w-full">A</th>
              <th className="px-4 py-2 text-center w-full">PIM</th>
              <th className="px-4 py-2 text-center w-full">TOI</th>
            </tr>
          </thead>
          <tbody>
            {data[type].map((item, index) => (
              <tr key={index} className={`odd:bg-neutral-100 border-b border-b-neutral-300`}>
                <td className="px-4 py-2 text-left w-full">{item.season}</td>
                <td className="px-4 py-2 text-left w-full">{item.teamName}</td>
                <td className="px-4 py-2 text-center w-full">{item.gamesPlayed}</td>
                <td className="px-4 py-2 text-center w-full">{item.gamesStarted}</td>
                <td className="px-4 py-2 text-center w-full">{item.wins}</td>
                <td className="px-4 py-2 text-center w-full">{item.losses}</td>
                <td className="px-4 py-2 text-center w-full">{item.ties}</td>
                <td className="px-4 py-2 text-center w-full">{item.overtimeLosses}</td>
                <td className="px-4 py-2 text-center w-full">{item.shotsAgainst}</td>
                <td className="px-4 py-2 text-center w-full">{item.goalsAgainstAverage}</td>
                <td className="px-4 py-2 text-center w-full">{item.savePercentage}</td>
                <td className="px-4 py-2 text-center w-full">{item.shutouts}</td>
                <td className="px-4 py-2 text-center w-full">{item.goals}</td>
                <td className="px-4 py-2 text-center w-full">{item.assists}</td>
                <td className="px-4 py-2 text-center w-full">{item.penaltyInfractionMinutes}</td>
                <td className="px-4 py-2 text-center w-full">{item.timeOnIce}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className={`${color ? `bg-${color}-500`: 'bg-neutral-200'}`}>
              <th className="px-4 py-2 text-left w-full">Career</th>
              <td className="px-4 py-2 w-full"></td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].gamesPlayed}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].gamesStarted}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].wins}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].losses}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].ties}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].overtimeLosses}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].shotsAgainst}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].goalsAgainstAverage}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].savePercentage}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].shutouts}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].goals}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].assists}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].penaltyInfractionMinutes}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].timeOnIce}</td>
            </tr>
          </tfoot>
        </>
      )}

      {data.player.position !== 'G' && (
        <>
          <thead>
            <tr className={`border-b ${color ? `border-b-${color}-500` : 'border-b-neutral-300'}`}>
              <th className="px-4 py-2 text-left w-full">Season</th>
              <th className="px-4 py-2 text-left w-full">Team</th>
              <th className="px-4 py-2 text-center w-full">GP</th>
              <th className="px-4 py-2 text-center w-full">G</th>
              <th className="px-4 py-2 text-center w-full">A</th>
              <th className="px-4 py-2 text-center w-full">P</th>
              <th className="px-4 py-2 text-center w-full">+/-</th>
              <th className="px-4 py-2 text-center w-full">PIM</th>
              <th className="px-4 py-2 text-center w-full">PPG</th>
              <th className="px-4 py-2 text-center w-full">PPP</th>
              <th className="px-4 py-2 text-center w-full">SHG</th>
              <th className="px-4 py-2 text-center w-full">SHP</th>
              <th className="px-4 py-2 text-center w-full">TOI/G</th>
              <th className="px-4 py-2 text-center w-full">GWG</th>
              <th className="px-4 py-2 text-center w-full">OTG</th>
              <th className="px-4 py-2 text-center w-full">S</th>
              <th className="px-4 py-2 text-center w-full">S%</th>
              <th className="px-4 py-2 text-center w-full">FO%</th>
            </tr>
          </thead>
          <tbody>
            {data[type].map((item, index) => (
              <tr key={index} className={`odd:bg-neutral-100 border-b border-b-neutral-300`}>
                <td className="px-4 py-2 text-left w-full">{item.season}</td>
                <td className="px-4 py-2 text-left w-full">{item.teamName}</td>
                <td className="px-4 py-2 text-center w-full">{item.gamesPlayed}</td>
                <td className="px-4 py-2 text-center w-full">{item.goals}</td>
                <td className="px-4 py-2 text-center w-full">{item.assists}</td>
                <td className="px-4 py-2 text-center w-full">{item.points}</td>
                <td className="px-4 py-2 text-center w-full">{item.plusMinus}</td>
                <td className="px-4 py-2 text-center w-full">{item.penaltyInfractionMinutes}</td>
                <td className="px-4 py-2 text-center w-full">{item.powerPlayGoals}</td>
                <td className="px-4 py-2 text-center w-full">{item.powerPlayPoints}</td>
                <td className="px-4 py-2 text-center w-full">{item.shorthandedGoals}</td>
                <td className="px-4 py-2 text-center w-full">{item.shorthandedPoints}</td>
                <td className="px-4 py-2 text-center w-full">{item.averageTimeOnIce}</td>
                <td className="px-4 py-2 text-center w-full">{item.gameWinningGoals}</td>
                <td className="px-4 py-2 text-center w-full">{item.overtimeGoals}</td>
                <td className="px-4 py-2 text-center w-full">{item.shots}</td>
                <td className="px-4 py-2 text-center w-full">{item.shootingPercentage}</td>
                <td className="px-4 py-2 text-center w-full">{item.faceoffWinningPercentage}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className={`${color ? `bg-${color}-500`: 'bg-neutral-200'}`}>
              <th className="px-4 py-2 text-left w-full">Career</th>
              <td className="px-4 py-2 w-full"></td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].gamesPlayed}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].goals}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].assists}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].points}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].plusMinus}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].penaltyInfractionMinutes}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].powerPlayGoals}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].powerPlayPoints}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].shorthandedGoals}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].shorthandedPoints}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].averageTimeOnIce}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].gameWinningGoals}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].overtimeGoals}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].shots}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].shootingPercentage}</td>
              <td className="px-4 py-2 text-center font-bold w-full">{data[`${type}CareerTotals`].faceoffWinningPercentage}</td>
            </tr>
          </tfoot>
        </>
      )}
    </table>
  );
}
