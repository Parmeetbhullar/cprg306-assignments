import ItemL from "./item-list"


export default function Item() {
    return (
        <div className="w-full">
            {ItemL.map(function (item, index) {
                return (
                    <div key={index}  className="bg-gray-400 m-2 text-black w-auto h-auto">
                        <h2 className="text-2xl font-bold text-left  w-auto h-auto">{item.name}</h2>
                        <ul className=" w-auto h-auto">
                            <li className="p-2 m-2">Quantity: {item.quantity}</li>
                            <li className="p-2 m-2">Category: {item.category}</li>
                        </ul>
                    </div>
                );
            })}
        </div>

    );
}

