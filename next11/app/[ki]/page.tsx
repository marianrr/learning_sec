import {lili} from "../actions"
export default function Page({params}: {params: {ki: number}}) {
    
    
    
    const vivi = lili.bind(null, params.ki)
    
    
    
    return (
        <>
        <p>{params.ki}</p>
        <form action={vivi}>
            <input type="text" name="gigi" id="gigi" className="text-gray-700" />
            <button type="submit">click</button>
        </form>
        
        </>
    )
}