// NHL API Script aggregates all NHL players into one JSON file

const fs = require('fs');

// Helper Functions

async function fetchSeasons() {
  const res = await fetch('https://api-web.nhle.com/v1/season');
  const seasons = await res.json();
  return seasons;
}

async function fetchTeams() {
  const res = await fetch('https://api.nhle.com/stats/rest/en/team');
  const data = await res.json();
  const teams = data.data.map(d => d.triCode);
  return teams;
}

async function fetchRoster(team, season) {
  const res = await fetch(`https://api-web.nhle.com/v1/roster/${team}/${season}`);

  console.log(`${res.status}: ${team}/${season}`);

  if (res.status == 404) return undefined;

  const data = await res.json();
  return data;
}

// TODO - Create function to fetch data and update JSON with newly added players

// The Object
const players = {};

// Execute Script

(async function() {
  const values = await Promise.all([fetchTeams(), fetchSeasons()]);

  const teams = values[0];
  const seasons = values[1];

  console.log('TEAMS:', teams.length, teams);
  console.log('SEASONS:', seasons.length, seasons);

  let i = 0;
  while (i < teams.length) {

    let j = 0;
    while (j < seasons.length) {
      const team = teams[i];
      const season = seasons[j];

      const roster = await fetchRoster(team, season);

      if (roster) {
        const { forwards, defensemen, goalies } = roster;

        forwards.forEach(forward => players[`${forward.id}`] = {
          id: forward.id,
          name: `${forward.firstName.default} ${forward.lastName.default}`,
          headshot: forward.headshot,
          position: forward.positionCode,
        });
      
        defensemen.forEach(defense => players[`${defense.id}`] = {
          id: defense.id,
          name: `${defense.firstName.default} ${defense.lastName.default}`,
          headshot: defense.headshot,
          position: defense.positionCode,
        });
      
        goalies.forEach(goalie => players[`${goalie.id}`] = {
          id: goalie.id,
          name: `${goalie.firstName.default} ${goalie.lastName.default}`,
          headshot: goalie.headshot,
          position: goalie.positionCode,
        });
      }

      j++;
    }

    i++;
  }

  const json = JSON.stringify(players);

  fs.writeFile('players.json', json, 'utf8', () => {});
})();
