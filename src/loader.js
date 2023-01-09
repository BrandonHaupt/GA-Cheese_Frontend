const URL = "https://cheese-backend-fv1m.onrender.com"

export const cheeseLoader = async () => {
    const response = await fetch(URL + '/cheese')
    const cheese = await response.json()
    return cheese
}

export const cheesesLoader = async ({params}) => {
    console.log(params)
    const response = await fetch(URL + '/cheese/' + params.id)
    const cheeses = await response.json()
    return cheeses
}