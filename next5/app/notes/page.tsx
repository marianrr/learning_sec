import Formm from '../Formm'; 
import {notes} from "../ddd";
export default function Page() {

    return (
        <>
        <Formm/>
        <p>This is notes page</p>
        <p>The notes are: </p>
        {notes.map(r => <p className="m-2 border-2 border-white rounded-2xl p-2 shadow-[0_0_0.2rem_#fff,0_0_0.2rem_#fff,0_0_2rem_#bc13fe,0_0_0.8rem_#bc13fe,0_0_2.8rem_#bc13fe,inset_0_0_1.3rem_#bc13fe]" key={r}>{r}<span className="material-symbols-outlined">
delete
</span><span className="material-symbols-outlined">
edit_note
</span></p>)}
        </>
    )
}
