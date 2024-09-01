import Link from "next/link";
export default function Page({params}: {params: {koko: string}}) {
    console.log(params);
    return (
        <>
            <Link href="/">Home</Link>
            <p>This is {params.koko} page.</p>
        </>
    );
}