export default function Joke({ params }: { params: { id: number } }) {
  return <div>My Post: {params.id}</div>
}