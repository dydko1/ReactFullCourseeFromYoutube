import Code from "./Code";
import Welcome from "./Welcome";

function ConditionalComponent() {

    const display = false;

    if (display) {
        return (
            <Welcome />
        )
    }

    else
        return (
            <Code />
        )
}

export default ConditionalComponent;