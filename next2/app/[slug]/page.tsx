import {titles} from "./coconitos"


export default function Page({params}: {params: {slug: number}}) {
    

    function coco(dio: number) {
        console.log('dio este' , dio)
        const ff = titles.filter(r => r.id==dio)
        console.log(ff)
         return ff[0].title;
    } 
    
    return (<>
    
    <p>This is slug page.</p>
    <p>{params.slug}</p>
    <p>{coco(params.slug)}</p>
    
    
    </>);
}