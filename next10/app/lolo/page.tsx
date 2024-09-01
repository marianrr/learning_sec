"use client";
import {useState} from "react";
export default function Soso() {

const [timp, setTimp] = useState("kiki first time")


    return (
        <>
        <p>dj guga ala felipa</p>

<button type="submit" onClick={() => { setTimp("Lili"); console.log("dj guga la Mili")}}>like</button>
<br/>
{timp}




        </>
    )
}