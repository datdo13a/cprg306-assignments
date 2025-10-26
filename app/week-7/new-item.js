"use client"
import { useState } from "react";

export function NewItem( { onAddItem } ) {
    // Quantity state and handlers
    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
            return;
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            return;
        }
    }
    // Name and Category state and handlers
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    // Handlers for form inputs
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }

    function generateRandomId() {
        return Math.random().toString(36).slice(2);
    }

    // Form submission handler
    // creates a food object and resets the form after submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const foodObj = {
            name: name,
            category: category,
            quantity: quantity
        }
        
        let newItemObj = {
            id: generateRandomId(),
            name: name,
            quantity: quantity,
            category: category
        }

        onAddItem(newItemObj);

        console.log("New Item Added:", newItemObj);

        // Reset form fields
        setCategory("Produce");
        setName("");
        setQuantity(1);
    }

    // Dynamic button styles
    const buttonStyles = (colour) => {
    const colourClasses = {
        red: 'bg-red-200 hover:bg-red-300 active:bg-red-400',
        green: 'bg-green-200 hover:bg-green-300 active:bg-green-400'
    };
    
    return `"m-5 p-5 h-16 rounded-xl shadow-sm font-bold cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed ${colourClasses[colour]}"`;
};

return (
    <div className="bg-gray-100 p-10 m-10 rounded-3xl shadow-lg flex flex-col items-center justify-center">
        <h1 className="mb-2 text-6xl font-bold text-gray-500 mb-10">Add Groceries</h1>

        {/* Text input for name */}
        <div>
            <div className="justify-center flex">
                <label className="mb-2 text-4xl font-bold text-gray-500">Name</label>
            </div>
           
            <input type="text" onChange={handleNameChange} value={name} className="bg-blue-100 rounded-lg p-2 m-2 mb-6"></input>
        </div>

        {/* Dropdown for category */}
        <div>
            <div className="justify-center flex">
                <label className="mb-2 text-4xl font-bold text-gray-500">Category</label>
            </div>
            
            <select className="bg-blue-100 rounded-lg p-2 m-2 mb-6" value={category} onChange={handleCategoryChange}>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Meat</option>
                <option value="Meat">Pantry</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
            </select>
        </div>

        {/* Quantity selector */}
        <div className="mb-2 text-4xl font-bold text-gray-500">
            <p>Quantity</p>
        </div>
        <div className="flex flex-wrap items-center justify-center mb-6">
            <button className={buttonStyles('red')} disabled={quantity === 1} onClick={decrement}>
                -
            </button>
            <button className="bg-orange-200 w-20 h-17 m-2 rounded-xl shadow-sm font-bold width-25 text-gray-500">
                {quantity}
            </button>
            <button className={buttonStyles('green')} disabled={quantity === 20} onClick={increment}>
                +
            </button>
        </div>

        {/* Submit button */}
        <div>
            <button className="bg-blue-300 rounded-lg pl-12 pr-12 pt-4 pb-4 m-4 hover:bg-blue-400 active:bg-blue-500 text-white font-bold text-xl" onClick={handleSubmit}>Submit</button>
        </div>

        {/* <div>
            <p>Debugging bag</p>
            <p>Name: {name}</p>
            <p>Category: {category}</p>
            <p>Quantity: {quantity}</p>
        </div> */}
    </div>
)

}

