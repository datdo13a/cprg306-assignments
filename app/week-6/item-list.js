"use client"
import Item from "./item";
import { useState } from "react";
import itemData from './items.json';

function ItemList() {

    let itemArray = itemData.map( (item) => ( {...item}));

    let [sortBy, setSortBy] = useState("name");

    const handleItemSortChange = (e) => setSortBy(e.target.value);

    // if statement for sorting either name or category
    if (sortBy == "name" ) {
        itemArray.sort( (itemA, itemB) => {
            if ( itemA[sortBy] ) {
                let nameA = itemA.name;
                let nameB = itemB.name;
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            }
        })
    }
    else if (sortBy === "category" ) {
        itemArray.sort( (itemA, itemB) => {
        if (itemA[sortBy]) {
            let categoryA = itemA.category;
            let categoryB = itemB.category;
            if (categoryA < categoryB) return -1;
            if (categoryA > categoryB) return 1;
            return 0;
            }
        }, {})
    }

    //reduce methods
    const groupedCategory = itemData.reduce((groupedItems, item) => {
        const category = item.category
        if (groupedItems[category] == null) groupedItems[category] = []
        groupedItems[category].push(item)
        return groupedItems
    }, {})
    console.log(groupedCategory);

    return (
        <section>
            <div>
                <div className="bg-gray-100 m-10 p-10 rounded-lg shadow-lg flex justify-evenly">
                    <button onClick={() =>setSortBy("name")} className="text-white font-bold text-xl w-30 bg-pink-300 p-5 rounded-lg hover:bg-pink-400 active:bg-pink-500">Name</button>
                    <button onClick={() =>setSortBy("category")} className="text-white font-bold text-xl w-30 bg-blue-300 p-5 rounded-lg hover:bg-blue-400 active:bg-blue-500">Category</button>
                </div>
                <div>
                    {itemArray.map( (item) => (
                        <Item key={item.id} itemObj={item}></Item>
                    ))}
                </div>
                {/* reduced rendered categorized list */}
                {/* <div>
                    {Object.keys(groupedCategory).map((category) => (
                        <div key={category}>
                            <h2 className="font-bold text-3xl text-center">{category}</h2>
                            {groupedCategory[category].map((item) => (
                                <Item key={item.id} itemObj={item}></Item>
                            ))}
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    )
    };

    export default ItemList;