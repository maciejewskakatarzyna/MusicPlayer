import "./styles.css";
import React, {useState, useRef, useEffect} from "react";

function Heading({ title }) {
    return <h1>{title}</h1>;
}
function SongPlayer({ showControls = false, song }) {
    const audioRef = useRef();
    const { audioUrl, coverUrl } = song
        return (
        <section>
            <Heading title={"Music Player"}/>
            <img width="250px" height="250px" src={coverUrl} alt="Song cover" />
            <audio ref={audioRef} key={audioUrl} controls={showControls}>
                <source src={audioUrl} />
            </audio>
            <div>
                <button onClick={() => audioRef.current.play()}>Play</button>
                <button onClick={() => audioRef.current.pause()}>Pause</button>
            </div>
        </section>
    );
}

function SongListItem({song, isCurrent, onSelect}) {
    const background = isCurrent ? "darkslategray" : "none"
    const style = {background}
    function handleClick() {
        onSelect(song)
    }
    return (
        <li style={style} onClick={handleClick}>
            {song.title} by {song.artist}
        </li>
    )
}

export default function App() {
    const URL = "https://examples.devmastery.pl/songs-api/songs"
    const [songs, setSongs] = useState([])
    useEffect(() => {
        fetch(URL).then((response) => {
            if (response.ok) {
                response.json().then(setSongs)
            }
        })
    }, [])
    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const currentSong = songs[currentSongIndex]

     function handleSelectSong(selectedSong) {
        const audioIndex = songs.findIndex(song => song.audioUrl === selectedSong.audioUrl)
         if(audioIndex >= 0) {
             setCurrentSongIndex(audioIndex)
         }
    }
    return (
        <div className="App">
            { songs.length === 0 ? "Loading..." :(
                <>
                <SongPlayer song={currentSong}/>
                <section>
                <Heading title="Songs" />
                <ul>{songs.map(song =>
                <SongListItem
                key={song.audioUrl}
                song={song}
                isCurrent={currentSong.audioUrl === song.audioUrl}
                onSelect={handleSelectSong}
                />)}
                </ul>
                </section></>)}

        </div>
    );
}
