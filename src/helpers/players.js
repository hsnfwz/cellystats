const trendingPlayers = {
  CONNOR_MCDAVID: {
    id: 8478402,
    firstName: 'Connor',
    lastName: 'McDavid',
    headshot: 'https://assets.nhle.com/mugs/nhl/20232024/EDM/8478402.png',
    position: 'C',
    background: '/images/trending-players/connor_mcdavid.jpg',
  },
  AUSTON_MATTHEWS: {
    id: 8479318,
    firstName: 'Auston',
    lastName: 'Matthews',
    headshot: 'https://assets.nhle.com/mugs/nhl/20232024/TOR/8479318.png',
    position: 'C',
    background: '/images/trending-players/auston_matthews.jpg',
  },
  QUINN_HUGHES: {
    id: 8480800,
    firstName: 'Quinn',
    lastName: 'Hughes',
    headshot: 'https://assets.nhle.com/mugs/nhl/20232024/VAN/8480800.png',
    position: 'D',
    background: '/images/trending-players/quinn_hughes.jpg',
  },
  CALE_MAKAR: {
    id: 8480069,
    firstName: 'Cale',
    lastName: 'Makar',
    headshot: 'https://assets.nhle.com/mugs/nhl/20232024/COL/8480069.png',
    position: 'D',
    background: '/images/trending-players/cale_makar.jpg',
  },
  THATCHER_DEMKO: {
    id: 8477967,
    firstName: 'Thatcher',
    lastName: 'Demko',
    headshot: 'https://assets.nhle.com/mugs/nhl/20232024/VAN/8477967.png',
    position: 'G',
    background: '/images/trending-players/thatcher_demko.jpg',
  },
  CONNOR_HELLEBUYCK: {
    id: 8476945,
    firstName: 'Connor',
    lastName: 'Hellebuyck',
    headshot: 'https://assets.nhle.com/mugs/nhl/20232024/WPG/8476945.png',
    position: 'G',
    background: '/images/trending-players/connor_hellebuyck.jpg',
  }
}

function getPlayerStats(data) {
  const playerStats = {
    player: data,
    regularSeason: {
      goals: [],
      assists: [],
      points: [],
      pointsPerGame: [],
      goalsAgainstAverage: [],
      savePercentage: [],
      shutouts: [],
    },
    playoffs: {
      goals: [],
      assists: [],
      points: [],
      pointsPerGame: [],
      goalsAgainstAverage: [],
      savePercentage: [],
      shutouts: [],
    }
  }

  data.seasonTotals.forEach(seasonTotal => {
    if (seasonTotal.leagueAbbrev === 'NHL' && seasonTotal.gameTypeId === 2) {
      if (data.position === 'G') {
        playerStats.regularSeason.goalsAgainstAverage.push({ season: seasonTotal.season, goalsAgainstAverage: seasonTotal.goalsAgainstAvg.toFixed(2) });
        playerStats.regularSeason.savePercentage.push({ season: seasonTotal.season, savePercentage: seasonTotal.savePctg.toFixed(3) });
        playerStats.regularSeason.shutouts.push({ season: seasonTotal.season, shutouts: seasonTotal.shutouts });
      } else {
        playerStats.regularSeason.goals.push({ season: seasonTotal.season, goals: seasonTotal.goals });
        playerStats.regularSeason.assists.push({ season: seasonTotal.season, assists: seasonTotal.assists });
        playerStats.regularSeason.points.push({ season: seasonTotal.season, points: seasonTotal.points });
        playerStats.regularSeason.pointsPerGame.push({ season: seasonTotal.season, pointsPerGame: (seasonTotal.points/seasonTotal.gamesPlayed).toFixed(1) });
      }
    }

    if (seasonTotal.leagueAbbrev === 'NHL' && seasonTotal.gameTypeId === 3) {
      if (data.position === 'G') {
        playerStats.playoffs.goalsAgainstAverage.push({ season: seasonTotal.season, goalsAgainstAverage: seasonTotal.goalsAgainstAvg.toFixed(2) });
        playerStats.playoffs.savePercentage.push({ season: seasonTotal.season, savePercentage: seasonTotal.savePctg.toFixed(3) });
        playerStats.playoffs.shutouts.push({ season: seasonTotal.season, shutouts: seasonTotal.shutouts });
      } else {
        playerStats.playoffs.goals.push({ season: seasonTotal.season, goals: seasonTotal.goals });
        playerStats.playoffs.assists.push({ season: seasonTotal.season, assists: seasonTotal.assists });
        playerStats.playoffs.points.push({ season: seasonTotal.season, points: seasonTotal.points });
        playerStats.playoffs.pointsPerGame.push({ season: seasonTotal.season, pointsPerGame: (seasonTotal.points/seasonTotal.gamesPlayed).toFixed(1) });
      }
    }
  });

  return playerStats;
}

function getPlayerTableStats(data) {
  const playerStats = {
    player: data,
    regularSeason: [],
    playoffs: [],
    regularSeasonCareerTotals: {},
    playoffsCareerTotals: {},
  }

  data.seasonTotals.forEach(seasonTotal => {
    if (seasonTotal.leagueAbbrev === 'NHL' && seasonTotal.gameTypeId === 2) {
      if (data.position === 'G') {
        playerStats.regularSeason.push({
          season: seasonTotal.season,
          teamName: seasonTotal.teamName.default,
          gamesPlayed: seasonTotal.gamesPlayed,
          gamesStarted: seasonTotal.gamesStarted,
          wins: seasonTotal.wins,
          losses: seasonTotal.losses,
          ties: seasonTotal.ties,
          overtimeLosses: seasonTotal.otLosses,
          shotsAgainst: seasonTotal.shotsAgainst,
          goalsAgainstAverage: seasonTotal.goalsAgainstAvg.toFixed(2),
          savePercentage: seasonTotal.savePctg.toFixed(3),
          shutouts: seasonTotal.shutouts,
          goals: seasonTotal.goals,
          assists: seasonTotal.assists,
          penaltyInfractionMinutes: seasonTotal.pim,
          timeOnIce: seasonTotal.timeOnIce,
        });
      } else {
        playerStats.regularSeason.push({
          season: seasonTotal.season,
          teamName: seasonTotal.teamName.default,
          gamesPlayed: seasonTotal.gamesPlayed,
          goals: seasonTotal.goals,
          assists: seasonTotal.assists,
          points: seasonTotal.points,
          plusMinus: seasonTotal.plusMinus,
          penaltyInfractionMinutes: seasonTotal.pim,
          powerPlayGoals: seasonTotal.powerPlayGoals,
          powerPlayPoints: seasonTotal.powerPlayPoints,
          shorthandedGoals: seasonTotal.shorthandedGoals,
          shorthandedPoints: seasonTotal.shorthandedPoints,
          averageTimeOnIce: seasonTotal.avgToi,
          gameWinningGoals: seasonTotal.gameWinningGoals,
          overtimeGoals: seasonTotal.otGoals,
          shots: seasonTotal.shots,
          shootingPercentage: (seasonTotal.shootingPctg * 100).toFixed(1),
          faceoffWinningPercentage: (seasonTotal.faceoffWinningPctg * 100).toFixed(1),
        });
      }
    }

    if (seasonTotal.leagueAbbrev === 'NHL' && seasonTotal.gameTypeId === 3) {
      if (data.position === 'G') {
        playerStats.playoffs.push({
          season: seasonTotal.season,
          teamName: seasonTotal.teamName.default,
          gamesPlayed: seasonTotal.gamesPlayed,
          gamesStarted: seasonTotal.gamesStarted,
          wins: seasonTotal.wins,
          losses: seasonTotal.losses,
          ties: seasonTotal.ties,
          overtimeLosses: seasonTotal.otLosses,
          shotsAgainst: seasonTotal.shotsAgainst,
          goalsAgainstAverage: seasonTotal.goalsAgainstAvg.toFixed(2),
          savePercentage: seasonTotal.savePctg.toFixed(3),
          shutouts: seasonTotal.shutouts,
          goals: seasonTotal.goals,
          assists: seasonTotal.assists,
          penaltyInfractionMinutes: seasonTotal.pim,
          timeOnIce: seasonTotal.timeOnIce,
        });
      } else {
        playerStats.playoffs.push({
          season: seasonTotal.season,
          teamName: seasonTotal.teamName.default,
          gamesPlayed: seasonTotal.gamesPlayed,
          goals: seasonTotal.goals,
          assists: seasonTotal.assists,
          points: seasonTotal.points,
          plusMinus: seasonTotal.plusMinus,
          penaltyInfractionMinutes: seasonTotal.pim,
          powerPlayGoals: seasonTotal.powerPlayGoals,
          powerPlayPoints: seasonTotal.powerPlayPoints,
          shorthandedGoals: seasonTotal.shorthandedGoals,
          shorthandedPoints: seasonTotal.shorthandedPoints,
          averageTimeOnIce: seasonTotal.avgToi,
          gameWinningGoals: seasonTotal.gameWinningGoals,
          overtimeGoals: seasonTotal.otGoals,
          shots: seasonTotal.shots,
          shootingPercentage: (seasonTotal.shootingPctg * 100).toFixed(1),
          faceoffWinningPercentage: (seasonTotal.faceoffWinningPctg * 100).toFixed(1),
        });
      }
    }
  });

  if (data.position === 'G') {
    playerStats.regularSeasonCareerTotals = {
      gamesPlayed: data.careerTotals.regularSeason.gamesPlayed,
      gamesStarted: data.careerTotals.regularSeason.gamesStarted,
      wins: data.careerTotals.regularSeason.wins,
      losses: data.careerTotals.regularSeason.losses,
      ties: data.careerTotals.regularSeason.ties,
      overtimeLosses: data.careerTotals.regularSeason.otLosses,
      shotsAgainst: data.careerTotals.regularSeason.shotsAgainst,
      goalsAgainstAverage: data.careerTotals.regularSeason.goalsAgainstAvg.toFixed(2),
      savePercentage: data.careerTotals.regularSeason.savePctg.toFixed(3),
      shutouts: data.careerTotals.regularSeason.shutouts,
      goals: data.careerTotals.regularSeason.goals,
      assists: data.careerTotals.regularSeason.assists,
      penaltyInfractionMinutes: data.careerTotals.regularSeason.pim,
      timeOnIce: data.careerTotals.regularSeason.timeOnIce,
    }

    playerStats.playoffsCareerTotals = {
      gamesPlayed: data.careerTotals.playoffs?.gamesPlayed || 0,
      gamesStarted: data.careerTotals.playoffs?.gamesStarted || 0,
      wins: data.careerTotals.playoffs?.wins || 0,
      losses: data.careerTotals.playoffs?.losses || 0,
      ties: data.careerTotals.playoffs?.ties || 0,
      overtimeLosses: data.careerTotals.playoffs?.otLosses || 0,
      shotsAgainst: data.careerTotals.playoffs?.shotsAgainst || 0,
      goalsAgainstAverage: data.careerTotals.playoffs?.goalsAgainstAvg.toFixed(2) || 0,
      savePercentage: data.careerTotals.playoffs?.savePctg.toFixed(3) || 0,
      shutouts: data.careerTotals.playoffs?.shutouts || 0,
      goals: data.careerTotals.playoffs?.goals || 0,
      assists: data.careerTotals.playoffs?.assists || 0,
      penaltyInfractionMinutes: data.careerTotals.playoffs?.pim || 0,
      timeOnIce: data.careerTotals.playoffs?.timeOnIce || 0,
    }
  } else {
    playerStats.regularSeasonCareerTotals = {
      gamesPlayed: data.careerTotals.regularSeason.gamesPlayed,
      goals: data.careerTotals.regularSeason.goals,
      assists: data.careerTotals.regularSeason.assists,
      points: data.careerTotals.regularSeason.points,
      plusMinus: data.careerTotals.regularSeason.plusMinus,
      penaltyInfractionMinutes: data.careerTotals.regularSeason.pim,
      powerPlayGoals: data.careerTotals.regularSeason.powerPlayGoals,
      powerPlayPoints: data.careerTotals.regularSeason.powerPlayPoints,
      shorthandedGoals: data.careerTotals.regularSeason.shorthandedGoals,
      shorthandedPoints: data.careerTotals.regularSeason.shorthandedPoints,
      averageTimeOnIce: data.careerTotals.regularSeason.avgToi,
      gameWinningGoals: data.careerTotals.regularSeason.gameWinningGoals,
      overtimeGoals: data.careerTotals.regularSeason.otGoals,
      shots: data.careerTotals.regularSeason.shots,
      shootingPercentage: (data.careerTotals.regularSeason.shootingPctg * 100).toFixed(1),
      faceoffWinningPercentage: (data.careerTotals.regularSeason.faceoffWinningPctg * 100).toFixed(1),
    };

    playerStats.playoffsCareerTotals = {
      gamesPlayed: data.careerTotals.playoffs?.gamesPlayed || 0,
      goals: data.careerTotals.playoffs?.goals || 0,
      assists: data.careerTotals.playoffs?.assists || 0,
      points: data.careerTotals.playoffs?.points || 0,
      plusMinus: data.careerTotals.playoffs?.plusMinus || 0,
      penaltyInfractionMinutes: data.careerTotals.playoffs?.pim || 0,
      powerPlayGoals: data.careerTotals.playoffs?.powerPlayGoals || 0,
      powerPlayPoints: data.careerTotals.playoffs?.powerPlayPoints || 0,
      shorthandedGoals: data.careerTotals.playoffs?.shorthandedGoals || 0,
      shorthandedPoints: data.careerTotals.playoffs?.shorthandedPoints || 0,
      averageTimeOnIce: data.careerTotals.playoffs?.avgToi || 0,
      gameWinningGoals: data.careerTotals.playoffs?.gameWinningGoals || 0,
      overtimeGoals: data.careerTotals.playoffs?.otGoals || 0,
      shots: data.careerTotals.playoffs?.shots || 0,
      shootingPercentage: (data.careerTotals.playoffs?.shootingPctg || 0 * 100).toFixed(1) || 0,
      faceoffWinningPercentage: (data.careerTotals.playoffs?.faceoffWinningPctg || 0 * 100).toFixed(1) || 0,
    };
  }

  return playerStats;
}

function getComparePlayerStats(playerOneData, playerTwoData) {
  const combinedPlayerRegularSeasons = [];
  const combinedPlayerPlayoffsSeasons = [];

  const playerOneSeasons = {
    regularSeason: [],
    playoffs: []
  }

  const playerTwoSeasons = {
    regularSeason: [],
    playoffs: []
  }

  const combinedPlayerStats = {
    playerOne: playerOneData,
    playerTwo: playerTwoData,
    regularSeason: {
      goals: [],
      assists: [],
      points: [],
      pointsPerGame: [],
      goalsAgainstAverage: [],
      savePercentage: [],
      shutouts: [],
    },
    playoffs: {
      goals: [],
      assists: [],
      points: [],
      pointsPerGame: [],
      goalsAgainstAverage: [],
      savePercentage: [],
      shutouts: [],
    }
  }

  const x = {};
  const y = {};

  const a = {};
  const b = {};

  playerOneData.seasonTotals.forEach(seasonTotal => {
    if (seasonTotal.leagueAbbrev === 'NHL' && seasonTotal.gameTypeId === 2) {
      if (combinedPlayerRegularSeasons.indexOf(seasonTotal.season) === -1) {
        combinedPlayerRegularSeasons.push(seasonTotal.season);
      }

      playerOneSeasons.regularSeason.push(seasonTotal.season);

      if (playerOneData.position === 'G') {
        x[seasonTotal.season] = {
          goalsAgainstAverage: seasonTotal.goalsAgainstAvg.toFixed(2),
          savePercentage: seasonTotal.savePctg.toFixed(3),
          shutouts: seasonTotal.shutouts,
        }
      } else {
        x[seasonTotal.season] = {
          goals: seasonTotal.goals,
          assists: seasonTotal.assists,
          points: seasonTotal.points,
          pointsPerGame: (seasonTotal.points/seasonTotal.gamesPlayed).toFixed(1),
        }
      }
    }

    if (seasonTotal.leagueAbbrev === 'NHL' && seasonTotal.gameTypeId === 3) {
      if (combinedPlayerPlayoffsSeasons.indexOf(seasonTotal.season) === -1) {
        combinedPlayerPlayoffsSeasons.push(seasonTotal.season);
      }

      playerOneSeasons.playoffs.push(seasonTotal.season);

      if (playerOneData.position === 'G') {
        a[seasonTotal.season] = {
          goalsAgainstAverage: seasonTotal.goalsAgainstAvg.toFixed(2),
          savePercentage: seasonTotal.savePctg.toFixed(3),
          shutouts: seasonTotal.shutouts,
        }
      } else {
        a[seasonTotal.season] = {
          goals: seasonTotal.goals,
          assists: seasonTotal.assists,
          points: seasonTotal.points,
          pointsPerGame: (seasonTotal.points/seasonTotal.gamesPlayed).toFixed(1),
        }
      }
    }
  });

  playerTwoData.seasonTotals.forEach(seasonTotal => {
    if (seasonTotal.leagueAbbrev === 'NHL' && seasonTotal.gameTypeId === 2) {
      if (combinedPlayerRegularSeasons.indexOf(seasonTotal.season) === -1) {
        combinedPlayerRegularSeasons.push(seasonTotal.season);
      }

      playerTwoSeasons.regularSeason.push(seasonTotal.season);

      if (playerTwoData.position === 'G') {
        y[seasonTotal.season] = {
          goalsAgainstAverage: seasonTotal.goalsAgainstAvg.toFixed(2),
          savePercentage: seasonTotal.savePctg.toFixed(3),
          shutouts: seasonTotal.shutouts,
        }
      } else {
        y[seasonTotal.season] = {
          goals: seasonTotal.goals,
          assists: seasonTotal.assists,
          points: seasonTotal.points,
          pointsPerGame: (seasonTotal.points/seasonTotal.gamesPlayed).toFixed(1),
        }
      }
    }

    if (seasonTotal.leagueAbbrev === 'NHL' && seasonTotal.gameTypeId === 3) {
      if (combinedPlayerPlayoffsSeasons.indexOf(seasonTotal.season) === -1) {
        combinedPlayerPlayoffsSeasons.push(seasonTotal.season);
      }

      playerTwoSeasons.playoffs.push(seasonTotal.season);

      if (playerOneData.position === 'G') {
        b[seasonTotal.season] = {
          goalsAgainstAverage: seasonTotal.goalsAgainstAvg.toFixed(2),
          savePercentage: seasonTotal.savePctg.toFixed(3),
          shutouts: seasonTotal.shutouts,
        }
      } else {
        b[seasonTotal.season] = {
          goals: seasonTotal.goals,
          assists: seasonTotal.assists,
          points: seasonTotal.points,
          pointsPerGame: (seasonTotal.points/seasonTotal.gamesPlayed).toFixed(1),
        }
      }
    }
  });

  const sortedCombinedPlayerRegularSeasons = combinedPlayerRegularSeasons.sort();
  const sortedCombinedPlayerPlayoffsSeasons = combinedPlayerPlayoffsSeasons.sort();

  sortedCombinedPlayerRegularSeasons.forEach(season => {
    if (playerOneSeasons.regularSeason.indexOf(season) !== -1 && playerTwoSeasons.regularSeason.indexOf(season) !== -1) {
      combinedPlayerStats.regularSeason.goals.push({ season, playerOneGoals: x[season].goals, playerTwoGoals: y[season].goals });
      combinedPlayerStats.regularSeason.assists.push({ season, playerOneAssists: x[season].assists, playerTwoAssists: y[season].assists });
      combinedPlayerStats.regularSeason.points.push({ season, playerOnePoints: x[season].points, playerTwoPoints: y[season].points });
      combinedPlayerStats.regularSeason.pointsPerGame.push({ season, playerOnePointsPerGame: x[season].pointsPerGame, playerTwoPointsPerGame: y[season].pointsPerGame });

      combinedPlayerStats.regularSeason.goalsAgainstAverage.push({ season, playerOneGoalsAgainstAverage: x[season].goalsAgainstAverage, playerTwoGoalsAgainstAverage: y[season].goalsAgainstAverage });
      combinedPlayerStats.regularSeason.savePercentage.push({ season, playerOneSavePercentage: x[season].savePercentage, playerTwoSavePercentage: y[season].savePercentage });
      combinedPlayerStats.regularSeason.shutouts.push({ season, playerOneShutouts: x[season].shutouts, playerTwoShutouts: y[season].shutouts });
    } else if (playerOneSeasons.regularSeason.indexOf(season) !== -1 && playerTwoSeasons.regularSeason.indexOf(season) === -1) {
      combinedPlayerStats.regularSeason.goals.push({ season, playerOneGoals: x[season].goals, playerTwoGoals: 0 });
      combinedPlayerStats.regularSeason.assists.push({ season, playerOneAssists: x[season].assists, playerTwoAssists: 0 });
      combinedPlayerStats.regularSeason.points.push({ season, playerOnePoints: x[season].points, playerTwoPoints: 0 });
      combinedPlayerStats.regularSeason.pointsPerGame.push({ season, playerOnePointsPerGame: x[season].pointsPerGame, playerTwoPointsPerGame: 0 });

      combinedPlayerStats.regularSeason.goalsAgainstAverage.push({ season, playerOneGoalsAgainstAverage: x[season].goalsAgainstAverage, playerTwoGoalsAgainstAverage: 0 });
      combinedPlayerStats.regularSeason.savePercentage.push({ season, playerOneSavePercentage: x[season].savePercentage, playerTwoSavePercentage: 0 });
      combinedPlayerStats.regularSeason.shutouts.push({ season, playerOneShutouts: x[season].shutouts, playerTwoShutouts: 0 });
    } else if (playerOneSeasons.regularSeason.indexOf(season) === -1 && playerTwoSeasons.regularSeason.indexOf(season) !== -1) {
      combinedPlayerStats.regularSeason.goals.push({ season, playerOneGoals: 0, playerTwoGoals: y[season].goals });
      combinedPlayerStats.regularSeason.assists.push({ season, playerOneAssists: 0, playerTwoAssists: y[season].assists });
      combinedPlayerStats.regularSeason.points.push({ season, playerOnePoints: 0, playerTwoPoints: y[season].points });
      combinedPlayerStats.regularSeason.pointsPerGame.push({ season, playerOnePointsPerGame: 0, playerTwoPointsPerGame: y[season].pointsPerGame });

      combinedPlayerStats.regularSeason.goalsAgainstAverage.push({ season, playerOneGoalsAgainstAverage: 0, playerTwoGoalsAgainstAverage: y[season].goalsAgainstAverage });
      combinedPlayerStats.regularSeason.savePercentage.push({ season, playerOneSavePercentage: 0, playerTwoSavePercentage: y[season].savePercentage });
      combinedPlayerStats.regularSeason.shutouts.push({ season, playerOneShutouts: 0, playerTwoShutouts: y[season].shutouts });
    }
  });

  sortedCombinedPlayerPlayoffsSeasons.forEach(season => {
    if (playerOneSeasons.playoffs.indexOf(season) !== -1 && playerTwoSeasons.playoffs.indexOf(season) !== -1) {
      combinedPlayerStats.playoffs.goals.push({ season, playerOneGoals: a[season].goals, playerTwoGoals: b[season].goals });
      combinedPlayerStats.playoffs.assists.push({ season, playerOneAssists: a[season].assists, playerTwoAssists: b[season].assists });
      combinedPlayerStats.playoffs.points.push({ season, playerOnePoints: a[season].points, playerTwoPoints: b[season].points });
      combinedPlayerStats.playoffs.pointsPerGame.push({ season, playerOnePointsPerGame: a[season].pointsPerGame, playerTwoPointsPerGame: b[season].pointsPerGame });

      combinedPlayerStats.playoffs.goalsAgainstAverage.push({ season, playerOneGoalsAgainstAverage: a[season].goalsAgainstAverage, playerTwoGoalsAgainstAverage: b[season].goalsAgainstAverage });
      combinedPlayerStats.playoffs.savePercentage.push({ season, playerOneSavePercentage: a[season].savePercentage, playerTwoSavePercentage: b[season].savePercentage });
      combinedPlayerStats.playoffs.shutouts.push({ season, playerOneShutouts: a[season].shutouts, playerTwoShutouts: b[season].shutouts });
    } else if (playerOneSeasons.playoffs.indexOf(season) !== -1 && playerTwoSeasons.playoffs.indexOf(season) === -1) {
      combinedPlayerStats.playoffs.goals.push({ season, playerOneGoals: a[season].goals, playerTwoGoals: 0 });
      combinedPlayerStats.playoffs.assists.push({ season, playerOneAssists: a[season].assists, playerTwoAssists: 0 });
      combinedPlayerStats.playoffs.points.push({ season, playerOnePoints: a[season].points, playerTwoPoints: 0 });
      combinedPlayerStats.playoffs.pointsPerGame.push({ season, playerOnePointsPerGame: a[season].pointsPerGame, playerTwoPointsPerGame: 0 });

      combinedPlayerStats.playoffs.goalsAgainstAverage.push({ season, playerOneGoalsAgainstAverage: a[season].goalsAgainstAverage, playerTwoGoalsAgainstAverage: 0 });
      combinedPlayerStats.playoffs.savePercentage.push({ season, playerOneSavePercentage: a[season].savePercentage, playerTwoSavePercentage: 0 });
      combinedPlayerStats.playoffs.shutouts.push({ season, playerOneShutouts: a[season].shutouts, playerTwoShutouts: 0 });
    } else if (playerOneSeasons.playoffs.indexOf(season) === -1 && playerTwoSeasons.playoffs.indexOf(season) !== -1) {
      combinedPlayerStats.playoffs.goals.push({ season, playerOneGoals: 0, playerTwoGoals: b[season].goals });
      combinedPlayerStats.playoffs.assists.push({ season, playerOneAssists: 0, playerTwoAssists: b[season].assists });
      combinedPlayerStats.playoffs.points.push({ season, playerOnePoints: 0, playerTwoPoints: b[season].points });
      combinedPlayerStats.playoffs.pointsPerGame.push({ season, playerOnePointsPerGame: 0, playerTwoPointsPerGame: b[season].pointsPerGame });

      combinedPlayerStats.playoffs.goalsAgainstAverage.push({ season, playerOneGoalsAgainstAverage: 0, playerTwoGoalsAgainstAverage: b[season].goalsAgainstAverage });
      combinedPlayerStats.playoffs.savePercentage.push({ season, playerOneSavePercentage: 0, playerTwoSavePercentage: b[season].savePercentage });
      combinedPlayerStats.playoffs.shutouts.push({ season, playerOneShutouts: 0, playerTwoShutouts: b[season].shutouts });
    }
  });

  return combinedPlayerStats;
}

export {
  trendingPlayers,
  getPlayerStats,
  getPlayerTableStats,
  getComparePlayerStats,
}
