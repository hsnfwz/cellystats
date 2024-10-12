import { getPlayers } from '@/helpers/server';

import CSComparePage from '@/components/CSComparePage';

export default async function Page() {
  const players = await getPlayers();

  return (
    <CSComparePage players={players} />
  );
}
