import React from "react";
import "./SongsListItem.css"

export default function SongListItem({song, isCurrent, onSelect}) {
    function handleClick() {
        onSelect(song)
    }

    return (
        <li className={`SongListItem ${isCurrent ? 'selected' : ''}`} onClick={handleClick}>
            {song.title} by {song.artist}
        </li>
    )
}