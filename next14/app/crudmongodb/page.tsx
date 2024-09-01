"use client"
import mongoose from "mongoose"
import {useFormState, useFormStatus} from 'react-dom'
import Mongodbserveraction from './mongodbserveraction'
const initialState = {message: null,}

const ModifyUser = () => {
const [state, formAction] = useFormState(Mongodbserveraction, initialState)
const {pending} = useFormStatus()
    return (
        <>
        <form method="POST" action={formAction}>
<input type="text" name="id1" id="id1" placeholder="id"/>
<input type="text" name="name1" id="name1" placeholder="name"/>
<input type="text" name="quantity1" id="quantity1" placeholder="quantity"/>
<div>
    {state?.message ? (<h3>{state?.message}</h3>) : null}
</div>
<button type="submit" name="submit" value="insert">{pending? "Inserting values..." : "Insert"}</button>

<button type="submit" name="submit" value="update">{pending? "Updating values..." : "Update"}</button>


<button type="submit" name="submit" value="delete">{pending? "Delete values..." : "Delete"}</button>



        </form>
        
        
        
        
        
        
        
        </>
    )
}

export default ModifyUser