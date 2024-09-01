'use server';
import {notes} from './notes';
import {redirect} from "next/navigation";
 
export async function createnote(formdata: FormData) {
    const note = {
        id: Date.now(),
        title: formdata.get("note")
    }

notes.unshift(note)

console.log(notes)

redirect("/notes")

}





export async function deletenote(id) {
    const index = notes.findIndex(s => s.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
    }
    console.log(id)
    redirect("/notes")
}

export async function editnote(id) {
   
    console.log(id)
    redirect(`/notes/${id}`)
}