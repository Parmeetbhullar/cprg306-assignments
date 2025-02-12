"use client" ;
import {useState} from  'react';

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20 ){
            setQuantity(preQuantity => preQuantity+1);
        }
    }
    const decrement = () => {
        if (quantity > 1 ){
            setQuantity(preQuantity => preQuantity-1);
        }
    }
    return (
        <div className='flex items-center space-x-5 p-2 bg-white'> 
            <span className='bold text-black'>{quantity}</span>
            <button className='bg-gray-500 text-white border rounded px-3 disabled:opacity-50' onClick={decrement} disabled={quantity == 1}> - </button>
            <button className='bg-blue-500 text-black border rounded px-3' onClick={increment} disabled={quantity == 20}> + </button>
        </div>
    )
}  