"use client";

import { useState } from 'react';

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const increment = () => {
        if (quantity < 20) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };
    
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="max-w-md mx-auto bg-[#141b26] shadow-md rounded-lg text-white p-2">
            <form onSubmit={handleSubmit} className="space-y-4 bg-[#0f172a] p-2 rounded-lg shadow-lg">
                <div>
                    <input 
                        type="text" 
                        placeholder="Item name"
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        className="w-full p-2 border rounded-md bg-white text-black" 
                    />
                </div>
                <div className="flex items-center space-x-3">
                    <div className="bg-white rounded-md px-3 py-1 text-black">
                        <span className="font-bold">{quantity}</span>
                        <button 
                            type="button"
                            className="ml-8 bg-gray-500 text-white border rounded px-2 disabled:opacity-50" 
                            onClick={decrement} 
                            disabled={quantity === 1}
                        >
                            -
                        </button>
                        <button 
                            type="button"
                            className="ml-3 bg-blue-500 text-white border rounded px-2" 
                            onClick={increment} 
                            disabled={quantity === 20}
                        >
                            +
                        </button>
                    </div>
                    <select 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)}
                        className="p-1.5 border rounded-md bg-white text-black"
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen_foods">Frozen Foods</option>
                        <option value="canned_goods">Canned Goods</option>
                        <option value="dry_goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-800 transition"
                >
                    +
                </button>
            </form>
        </div>
    );
}
