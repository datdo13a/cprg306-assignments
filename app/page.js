import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2" className="hover:text-blue-400 hover:underline">Go to Week 2</Link> &rarr;
        <Link href="/week-3" className="hover:text-blue-400 hover:underline">Go to Week 3</Link> &rarr;
      </p>
    </div>
  )
}

export default HomePage;