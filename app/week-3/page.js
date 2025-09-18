import ItemList from "./item-list";
import Link from "next/link";

function Page() {
    return (
        <main className="m-4 flex flex-col items-center">
            <h1 className="py-6 font-bold text-3xl">Shopping List</h1>
            <ItemList/>
            <a id="chat-bubble" className="hover:cursor-pointer" href="https://github.com/datdo13a/cprg306-assignments">
                <p className="text-3xl text-white font-bold">GitHub</p>
            </a>
        </main>
    )   
};

export default Page;