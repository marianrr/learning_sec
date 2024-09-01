import { revalidatePath } from 'next/cache'


var si = ["unu", "doi", "trei", "patru", "cinci", "sase", "sapte", "opt"]

export default function Page() {
    
    const coco = async (formData: FormData) => {
        'use server'
        
         const lolo = await formData.get("note")
     
     
         console.log("FormDataa este: ", lolo)
     
          await si.unshift(lolo) 
         console.log(si)
         revalidatePath('/notes/formm')
     }



    return (
        <>
        <p>This is Form page.</p>
        <hr/>
        <hr/>
        <br/>
        <form name="formm" id="formm" action={coco}>
            <input type="text" id="note" name="note" placeholder="insert note here" className="text-green-600" />
            <button type="submit">Insert note</button>
        </form>
        <br/>
        <p>The notes are: </p>
        {si.map(c => <p key={c}>{c}</p>)}
        </>
    )
}


// export const revalidate = 3;