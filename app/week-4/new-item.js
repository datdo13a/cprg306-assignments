"use client"
import { useState } from "react";

export function NewItem() {
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

    return (
        <div className="bg-gray-100 p-10 m-10 rounded-3xl shadow-lg flex flex-col items-center justify-center">
            <div className="mb-2 text-4xl font-bold text-gray-500">
                <p>Quantity</p>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <button className="m-5 p-5 h-17 bg-red-200 rounded-xl shadow-sm hover:bg-red-300 active:bg-red-400 font-bold disabled:bg-gray-300" disabled={quantity === 1} onClick={decrement}>
                    -
                </button>
                <button className="bg-orange-200 w-20 h-17 m-2 rounded-xl shadow-sm font-bold width-25">
                    {quantity}
                </button>
                <button className="m-5 p-5 h-16 bg-green-200 rounded-xl shadow-sm hover:bg-green-300 active:bg-green-400 font-bold disabled:bg-gray-300" disabled={quantity === 20} onClick={increment}>
                    +
                </button>

            </div>
        </div>
        
    )

}

