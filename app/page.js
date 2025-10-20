import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>

      <ul>
        <li><Link href="/week-2" className="hover:text-blue-400 hover:underline">Week 2: Student Info</Link></li>
        <li><Link href="/week-3" className="hover:text-blue-400 hover:underline">Week 3: Item List</Link></li>
        <li><Link href="/week-4" className="hover:text-blue-400 hover:underline">Week 4: New Item</Link></li>
        <li><Link href="/week-5" className="hover:text-blue-400 hover:underline">Week 5: Interactivity Form</Link></li>
        <li><Link href="/week-6" className="hover:text-blue-400 hover:underline">Week 5: Handling Lists</Link></li>
      </ul>
    </div>
  )
}

export default HomePage;