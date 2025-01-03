import Fruit from "./Fruit";

function Fruits() {
    //const fruits = ['Apple', 'Mango', 'Orange'];

    const fruits = [
        { name: "Apple", price: 10, emoji: "🍎" },
        { name: "Mango", price: 11, emoji: "🍊" },
        { name: "Orange", price: 12, emoji: "🦧" },
        { name: "Banana", price: 13, emoji: "🍌" },
        { name: "Pineapple", price: 14, emoji: "🍍" },
    ];

    return (
        <div>
            <h1>Fruits: {fruits.map((f) => (<Fruit
                key={f.name}
                name={f.name}
                price={f.price}
                emoji={f.emoji} />))}</h1>
        </div >
    )
}
export default Fruits