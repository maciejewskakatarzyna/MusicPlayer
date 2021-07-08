import "./styles.css";

function Heading() {
    const showHello  = 1 + 1 === 3 || 2 === 2
    return <h1>{showHello && "hello"}</h1>;
}
function SongPlayer() {
    const showControls = false || true;
    const audioUrl = "https://examples.devmastery.pl/assets/audio/deadfro5h.mp3"
    return (
        <section>
            <Heading />
            <audio controls={showControls}>
                <source src={audioUrl} />
            </audio>
        </section>
    );
}

function getStatusMessage(isLoading, hasErrors) {
    let message = null;
    if (isLoading) {
        message = "Loading..."
    }
    if (hasErrors) {
        message = "Error occured..."
    }
    return message
}

export default function App() {
    const isLoading = false
    const hasErrors = false
    const showPlayer = !isLoading && !hasErrors
    const statusMessage = getStatusMessage(isLoading, hasErrors)
    return (
        <div className="App">
            {showPlayer ? <SongPlayer /> : statusMessage}
        </div>
    );
}
