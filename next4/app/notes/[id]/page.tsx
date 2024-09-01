export default function Page({params}: {params: {id: number}}) {
    return (
        <>
        <p>This is {params.id}</p>
        </>
    )
}