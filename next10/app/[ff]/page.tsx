import Fform from "./Fform";

export default function Page({params}: {params: ff}) {
    return (
        <>
        <p>This is ff page.</p>
<Fform ccc={params.ff}/>

        </>
    )
}