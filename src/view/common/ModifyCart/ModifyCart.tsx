import {useState} from "react";

export function ModifyCart() {

    const [itemCount, setItemCount] = useState(1);

    const  decreaseItemCount = () =>{
        setItemCount(prevValue => prevValue > 1 ? prevValue -1 : (alert("Item count cannot be less than 1"), prevValue));
    }

    const IncrementItemCount = () =>{
        setItemCount(prevValue => prevValue + 1);
    }

    return (
        <div className="w-fit mx-auto flex items-center justify-center gap-2 mt-1 p-1 border border-gray-300 rounded text-lg">
            <button className="bg-red-200 px-5 py-1 rounded hover:bg-gray-300 transition" onClick={decreaseItemCount}>−</button>
            <small className="px-1 font-semibold border bg-gray-300 px-2 py-1 rounded border-gray-300">{itemCount}</small>
            <button className="bg-green-200 px-5 py-1 rounded hover:bg-gray-300 transition" onClick={IncrementItemCount}>+</button>
        </div>
    );
}
