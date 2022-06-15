import React from "react";
import useTypewriterEffect, {
    getTypewriter,
    useCursor,
} from "use-typewriter-effect";

function Typed() {
    const [state, dispatch, isTyping] = useTypewriterEffect();
    const cursor = useCursor(isTyping);

    React.useEffect(() => {
        getTypewriter(dispatch)
            .type("Programmer Analyst Student")
            .pauseFor(1000)
            .deleteAll()
            .type("Front-End Developer")
            .pauseFor(1000)
            .deleteAll()
            .type("Autodidact")
            .pauseFor(1000)
            .deleteAll()
            .setLoop(true)
            .trigger()
    }, [dispatch]);

    const sentences = state.split("\n");
    const lastSentence = sentences.pop();
    return (
        <main>

            <div style={{color: "#10CB94"}}>
                {sentences.map((sen, i) => (
                    <p key={i}> {sen}</p>
                ))}
                <p>
                    <span style={{color: '#fff'}}>And I'm a</span> {lastSentence}
                </p>
            </div>
        </main>
    );
}

export default Typed;