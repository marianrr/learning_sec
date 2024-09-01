import Buttonc from "./Buttonc";
import Buttone from "./Buttone";
import "./style.css";
import {notes} from "./notes";

export default function RenderedNotes() {
    return (
        <>
        <p>This is renderednotes page.</p>

{notes.map(d => <p key={d.id}>{d.title}<Buttonc id={d.id}/><Buttone id={d.id}/></p>)}


        </>
    )
}