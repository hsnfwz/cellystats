import CSSearchPage from '@/components/CSSearchPage';

import { getPlayers } from '@/helpers/server';

export default async function Page() {
  const players = await getPlayers();

  return (
    <CSSearchPage players={players} />
  );
}
