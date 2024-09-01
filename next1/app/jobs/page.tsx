import Link from "next/link";
export default function Page() {
    return (
    <div>
        <div className="flex justify-around items-center h-20 text-3xl">
     <Link href="/notes">Notes</Link>
    <Link href="/jobs">Jobs</Link>
    <Link href="/contact">Contact</Link>
    </div>
    <p className="bg-green-300">This is Jobs page.</p>
    </div>
    );
}