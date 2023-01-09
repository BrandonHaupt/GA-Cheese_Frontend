import { useLoaderData, Form } from "react-router-dom";

function Show() {
  const cheeses = useLoaderData();

  return (
    <div className="cheese">
      <h1>{cheeses.name}</h1>
      <h2>{cheeses.title}</h2>
      <img className="cheese-img" src={cheeses.image} alt={cheeses.name} />

      <h2>Update {cheeses.name}</h2>
      <Form action={`/update/${cheeses._id}`} method="post" className="form">
        <input type="input" name="name" placeholder="cheeses name" />
        <input type="input" name="image" placeholder="cheeses picture" />
        <input type="input" name="title" placeholder="cheeses title" />
        <input type="submit" value={`Update ${cheeses.name}`} />
      </Form>

      <h2>Delete Cheese</h2>
      <Form action={`/delete/${cheeses._id}`} method="post" className="form">
        <input type="submit" value={`Delete ${cheeses.name}`} />
      </Form>
    </div>
  );
}

export default Show;