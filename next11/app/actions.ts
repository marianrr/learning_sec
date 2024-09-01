"use server"
import {notes} from "./notes"
import {redirect} from "next/navigation"
import {revalidatePath} from "next/cache"

export const soso = async (o: number) => {
    console.log("eu web dev next js")
    redirect(`/${o}`)
    
    }

export const lili = async (id: number, formdata: FormData) => {
    console.log(notes.filter(i => i.id==id)[0], formdata.get("gigi"))

notes.filter(i => i.id==id)[0].title = formdata.get("gigi")
console.log(notes)
redirect("/coco")

}