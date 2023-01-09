import { useLoaderData, Form } from "react-router-dom";

function Show() {
  const cheeses = useLoaderData();

  return (
    <div className="cheeses">
      <h1>{cheeses.name}</h1>
      <h2>{cheeses.title}</h2>
      <img src={cheeses.image} alt={cheeses.name} />

      <h2>Update {cheeses.name}</h2>
      <Form action={`/update/${cheeses._id}`} method="post">
        <input type="input" name="name" placeholder="cheeses name" />
        <input type="input" name="image" placeholder="cheeses picture" />
        <input type="input" name="title" placeholder="cheeses title" />
        <input type="submit" value={`update ${cheeses.name}`} />
      </Form>
    </div>
  );
}

export default Show;