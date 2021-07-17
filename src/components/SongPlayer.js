import React, {useRef} from "react";
import Heading from "./Heading";
import "./SongPlayer.css"

export default function SongPlayer({showControls = false, song}) {
    const audioRef = useRef();
    const {audioUrl, coverUrl} = song
    return (
        <section className="SongPlayer">
            <Heading title={"Music Player"}/>
            <img width="250px" height="250px" src={coverUrl} alt="Song cover"/>
            <audio ref={audioRef} key={audioUrl} controls={showControls}>
                <source src={audioUrl}/>
            </audio>
            <div>
                <button ><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 24l-18-12 18-12v24zm-19-24v24h-1v-24h1zm2.803 12l15.197 10.132v-20.263l-15.197 10.131z"/></svg></button>
                <button onClick={() => audioRef.current.play()}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z"/></svg> </button>
                <button onClick={() => audioRef.current.pause()}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M10 24h-6v-24h6v24zm10 0h-6v-24h6v24zm-11-23h-4v22h4v-22zm10 0h-4v22h4v-22z"/></svg></button>
                <button ><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2 24l18-12-18-12v24zm19-24v24h1v-24h-1zm-2.803 12l-15.197 10.132v-20.263l15.197 10.131z"/></svg></button>
            </div>
        </section>
    );
}