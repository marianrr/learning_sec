import {redirect} from 'next/navigation';
import {notes} from "./ddd";
export default function Formm() {



const soso = async (formdata: FormData) => {
    "use server"
const c = await formdata.get('note')
console.log(c)
await notes.push(c)
redirect('/notes')

}




    return (
        <>
        <p>This is the form page.</p>
        <p>Complete the form:</p>

<form action={soso}>
<input className="text-gray-800" type='text' name="note" id="note" placeholder='Insert the note here...'/>
<input type="submit" value="click"/>



</form>






        </>
    )
}