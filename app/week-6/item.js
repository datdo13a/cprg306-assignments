function Item( { itemObj } ) {

    const { name, quantity, category } = itemObj;

    return (
        <ul className="rounded-lg shadow-lg m-8 p-4 py-6 w-xl bg-gray-100 text-center text-lg hover:bg-gray-200">
            <li className="text-xl font-bold">{name}</li>
            <li className="text-xl font-bold">Category: {category}</li>
            <li>Quantity: {quantity}</li>
        </ul>
    )
};

export default Item;