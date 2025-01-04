function Fruit({ name, price, emoji }) {

    // <li key={f.name} > {f.name} price is: ${f.price} emoji is: {f.emoji}</li>
    return <>

        {price > 5 ? <li>{name} price is: {price} emoji is {emoji}</li> : ""}

    </>
}

export default Fruit;