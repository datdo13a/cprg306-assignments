"use client"
import ItemList from "./item-list";
import ItemFormComp from "./item-form";
import itemData from './items.json';
import Link from "next/link";
import { useState } from "react";
import { NewItem } from "./new-item";

function Page() {

    const [itemArray, setItemArray] = useState( 
        itemData.map( (item) => ( {...item}))
    );

    const handleAddItem = (e) => (
        addNewItem(e.target.value)
    )

    function addNewItem(newItem) {
        setItemArray([...itemArray, newItem]);
    }

    function removeItem(e) {
        let thisItemList = itemArray.filter( (item) => item.id !== e.target.id );
        setItemArray(thisItemList);
    }


    return (
        <main className="flex m-4 justify-center">
            <div>
                <NewItem onAddItem={addNewItem} />
            </div>
            <div>
                <ItemList itemArray={itemArray}/>
            </div>

        </main>
    )   
};

export default Page;