import React from "react";
import "./Songs.css"

export default function Songs({children}) {
    return (
        <section className="Songs">
            {children}
        </section>
    )
}