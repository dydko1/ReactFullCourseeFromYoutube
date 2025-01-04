import Fruit from "./Fruit";

function Fruits() {
    //const fruits = ['Apple', 'Mango', 'Orange'];

    const fruits = [
        { name: "Apple", price: 10, emoji: "🍎", soldout: false },
        { name: "Mango", price: 7, emoji: "🍊", soldout: false },
        { name: "Orange", price: 2, emoji: "🦧", soldout: true },
        { name: "Banana", price: 5, emoji: "🍌", soldout: false },
        { name: "Pineapple", price: 8, emoji: "🍍", soldout: true },
    ];

    return (
        <div>
            <h1>Fruits: {fruits.map((f) => (<Fruit
                key={f.name}
                name={f.name}
                price={f.price}
                emoji={f.emoji}
                soldout={f.soldout} />))}</h1>
        </div >
    )
}
export default Fruits