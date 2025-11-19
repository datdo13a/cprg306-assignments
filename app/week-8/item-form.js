"use client"
import { useState } from "react"

export default function ItemFormComp() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");

    const handleIdChange = (e) => setId(e.target.value);
    const handleNameChange = (e) => setName(e.target.value);
    const handleQuantityChange = (e) => setQuantity(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(id, name, quantity, category);

        //create new item object
        let newItemObj = {
            id: id,
            name: name,
            quantity: quantity,
            category: category
        }

        newDogFunc(newItemObj);

        // reset form fields
        setId("");
        setName("");
        setQuantity("");
        setCategory("");
    }

    return (
        <div>
            <form>
                
            </form>
        </div>
    )
}