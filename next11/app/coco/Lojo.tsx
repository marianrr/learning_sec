"use client"
import {soso} from "../actions"
import {notes} from "../notes"


export default function Lojo() {
    return (<>
        
        {notes.map(o => <p key={o.id} onClick={() => soso(o.id)}>{o.title}</p>)}
        </>)
}