import { TeamPersonCard } from "../ui/TeamPersonCard"

export const OurTeam = () => {
  const team = [
    {
      id: '1',
      name: 'Jan Kowalski',
      position: 'CEO',
      image: '/people_with_notebooks.png',
    },
    {
      id: '2',
      name: 'Jan Kowalski',
      position: 'CEO',
      image: '/people_with_notebooks.png',
    },
    {
      id: '3',
      name: 'Jan Kowalski',
      position: 'CEO',
      image: '/people_with_notebooks.png',
    },
    {
      id: '4',
      name: 'Jan Kowalski',
      position: 'CEO',
      image: '/people_with_notebooks.png',
    },
  ]
  return (
    <section className="container">
      <h2 className="header-2 text-3xl mb-14">Poznaj Naszą Drużynę</h2>
      <article className="
        grid gap-4 grid-flow-row-dense
        grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-4
        grid-rows-2 md:grid-rows-1
        max-w-screen-2xl
        mx-auto
      ">
        {team.map((person) => (
            <TeamPersonCard key={person.id} {...person} />
        ))}
      </article>
    </section>
  )
}
