import Link from "next/link";

function StudentInfo() {
  return (
    <main>
      <h1>Name: Dat Do-Nguyen</h1>
      <Link href="https://github.com/datdo13a/cprg306-assignments" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-blue-400 ">My GitHub!</Link>
    </main>
  );
}

export default StudentInfo;