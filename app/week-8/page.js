"use client";
import ItemList from "./item-list";
import ItemFormComp from "./item-form";
import itemData from "./items.json";
import Link from "next/link";
import { useState } from "react";
import { NewItem } from "./new-item";
import MealIdeas from "./meal-ideas";

function Page() {
  const [itemArray, setItemArray] = useState(
    itemData.map((item) => ({ ...item }))
  );

  const handleAddItem = (e) => addNewItem(e.target.value);

  function addNewItem(newItem) {
    setItemArray([...itemArray, newItem]);
  }

  function removeItem(e) {
    let thisItemList = itemArray.filter((item) => item.id !== e.target.id);
    setItemArray(thisItemList);
  }

  const [selectedItemName, setSelectedItemName] = useState(null);

  function handleItemSelect(item) {
    const cleanItemName = item.name
      .split(",")[0]
      .trim()
      .replace(/[^\w\s]/gi, "");
    setSelectedItemName(cleanItemName);
  }

  return (
    <main className="flex m-4 justify-center">
      <div className="sticky top-4 self-start">
        <NewItem onAddItem={addNewItem} />
      </div>
      <div>
        <ItemList itemArray={itemArray} onItemSelect={handleItemSelect} />
      </div>
      <div className="sticky top-4 self-start">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

export default Page;
