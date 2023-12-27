//  Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
  const jokes = await fetch('http://localhost:3000/api/jokes').then((res) => res.json());
 
  return jokes.map((joke: { id: number }) => ({
    id: `${joke.id}`,
  }));
}

async function getJoke(params: { id: string }) {
  const response = await fetch(`http://localhost:3000/api/jokes/${params.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();

  return data.joke;
}
 
export default async function Joke({ params }: { params: { id: string }}) {
  const joke = await getJoke(params);

  return (
    <div className="p-5 sm:p-8">
        <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
          <img src={joke?.image_url} />
        </div>
    </div>
  )
}