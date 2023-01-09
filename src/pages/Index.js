import {Form, Link, useLoaderData} from 'react-router-dom'

function Index(){
    const cheeses = useLoaderData()

    return( 
        <div>
            <Form action="/create" method="post" className="form">
                <h2>Create a Cheese</h2>
                <input type='input' name='name' placeholder='Cheese Name' />
                <input type='input' name='image' placeholder='Cheese image URL'/>
                <input type='input' name='title' placeholder='Cheese Title'/>

                <input type='submit' value='Create Cheese' />
            </Form>

            <h1>Cheeses</h1>
            <div className='card-container'>
                {cheeses.map(cheese => (
                    <div className='card'>
                        <Link to={`/${cheese.id}`} className='cheese'>
                            <img className='cheese-img' src={cheese.image} alt={cheese.name}/>
                            <h2>{cheese.name}</h2>
                        </Link>

                        <h3>{cheese.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Index