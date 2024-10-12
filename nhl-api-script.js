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
// TODO - Sort data by firstName before writing to JSON

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

        forwards.forEach(forward => {
          players[`${forward.id}`] = {
            id: forward.id,
            firstName: forward.firstName.default,
            lastName: forward.lastName.default,
            headshot: forward.headshot,
            position: forward.positionCode,
          }
        });
      
        defensemen.forEach(defense => {
          players[`${defense.id}`] = {
            id: defense.id,
            firstName: defense.firstName.default,
            lastName: defense.lastName.default,
            headshot: defense.headshot,
            position: defense.positionCode,
          }
        });
      
        goalies.forEach(goalie => {
          players[`${goalie.id}`] = {
            id: goalie.id,
            firstName: goalie.firstName.default,
            lastName: goalie.lastName.default,
            headshot: goalie.headshot,
            position: goalie.positionCode,
          }
        });
      }

      j++;
    }

    i++;
  }

  const json = JSON.stringify(Object.values(players));

  fs.writeFile('players-new-2.json', json, 'utf8', () => {});
})();