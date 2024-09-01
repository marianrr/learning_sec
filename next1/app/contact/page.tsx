import Link from "next/link";
export default function Page() {
    return (
    <div>
        <div className="flex justify-around items-center h-20 text-3xl">
             <Link href="/notes">Notes</Link>
    <Link href="/jobs">Jobs</Link>
    <Link href="/contact">Contact</Link>
    </div>
    <p className="bg-slate-400 mb-40">This is Contact page.</p>
   
   <Link href="/" className="border-[2px] border-red-600 rounded-[10px] bg-yellow-700 m-20 h-[80px] p-5">Home</Link>
    </div>
    );
}