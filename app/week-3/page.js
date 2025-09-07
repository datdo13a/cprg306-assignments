import ItemList from "./item-list";

function Page() {
    return (
        <main className="m-4 flex flex-col items-center">
            <h1 className="py-6 font-bold text-2xl">Shopping List</h1>
            <ItemList/>
        </main>
    )
};

export default Page;