import { promises as fs } from 'fs';

async function getPlayers() {
  const file = await fs.readFile(process.cwd() + '/src/app/players.json', 'utf8');
  const data = JSON.parse(file);
  return data;
}

export {
  getPlayers,
}