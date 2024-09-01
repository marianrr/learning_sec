
import {notes} from "../notes";

export default function Page() {

    return (
        <>
        <p>dj web dev</p>
        
        {notes.map(o => <p key={o.id}>{o.title}</p>)}
        
        </>
    )
}