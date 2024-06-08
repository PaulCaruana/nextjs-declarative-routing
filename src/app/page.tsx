import UserList from "@/app/components/UserList";

export default async function Home() {
  /*
  const pokemon = await getFullPokemon();
*/

  return (
    <main className="mt-5">
      <UserList />
      {/*
      <SelectableGrid pokemon={pokemon} />
*/}
    </main>
  );
}
