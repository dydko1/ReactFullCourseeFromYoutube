export default function Message() {

    const handleClick = () => {
        console.log(new Date().getMilliseconds());
    }

    return (
        <div>
            <button onClick={() => handleClick()}>Message Miro</button>
        </div>
    )
}