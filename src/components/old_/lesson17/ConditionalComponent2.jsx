export default function ConditionalComponent2() {

    let messageOne = <h1>This is message one</h1>;
    let messageTwo = <h1>This is message two</h1>;
    let message;
    const display = true;

    if (display) {
        message = messageOne;
    } else {
        message = messageTwo;
    }

    return (
        <div>
            {message}
        </div>
    );
}