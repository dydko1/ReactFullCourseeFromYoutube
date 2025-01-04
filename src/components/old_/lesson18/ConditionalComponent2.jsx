export default function ConditionalComponent2() {

    let messageOne = <h1>This is message one</h1>;
    let messageTwo = <h1>This is message two</h1>;

    const display = true;

    return (
        <div>
            <h1 >{display ? messageOne : messageTwo}</h1>;
        </div >
    );
}