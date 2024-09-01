import {notes} from "../notess";



export default function Page() {

// notes.push("zece", "unsprezece")
// console.log(notes)

    return (
        <>
        <p>This is Notes page.</p>
        { notes.map(j => <p key={j}> ...{j}... </p>)}
        </>
    )
}