import React, {useEffect, useState} from "react";
import Heading from "./Heading"
import Songs from "./Songs";
import SongListItem from "./SongListItem";
import SongPlayer from "./SongPlayer";
import "./App.css"

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

    function handleNextSong() {
        const nextSongIndex = (currentSongIndex + 1) % songs.length;
        setCurrentSongIndex(nextSongIndex)
    }

    function handlePrevSong() {
        const prevSongIndex = (currentSongIndex + songs.length - 1) % songs.length;
        setCurrentSongIndex(prevSongIndex)
    }

    return (
        <div className="App">
            {songs.length === 0 ? (
                "Loading..."
            ) : (
                <>
                    <SongPlayer song={currentSong} handleNextSong={handleNextSong} handlePrevSong={handlePrevSong}>
                    </SongPlayer>
                    <Songs>
                        <Heading title="Songs" />
                            <ul>
                        {songs.map((song) => (
                            <SongListItem
                            key={song.audioUrl}
                            song={song}
                            isCurrent={currentSong.audioUrl === song.audioUrl}
                            onSelect={handleSelectSong}
                            />
                            ))}
                            </ul>
                    </Songs>
                </>
            )}
        </div>
    );
}
