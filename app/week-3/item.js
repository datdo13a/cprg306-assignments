function Item( { itemObj } ) {

    const { name, quantity, category } = itemObj;

    return (
        <ul className="rounded-lg shadow-lg m-8 p-4 py-6 w-xl bg-gray-100 text-center text-lg hover:bg-gray-200">
            <li>{name}</li>
            <li>Quantity: {quantity}</li>
            <li>Category: {category}</li>
        </ul>
    )
};

export default Item;