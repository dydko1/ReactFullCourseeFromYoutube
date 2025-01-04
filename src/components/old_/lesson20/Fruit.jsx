function Fruit({ name, price, emoji, soldout }) {

    // <li key={f.name} > {f.name} price is: ${f.price} emoji is: {f.emoji}</li>
    return (
        <li>{name} price is: {price} emoji is {emoji} {soldout ? "Soldout" : ""}</li>
    )
}

export default Fruit;