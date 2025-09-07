function Item( { name, quantity, category } ) {
    return (
        <ul className="rounded-lg shadow-lg m-4 p-4 py-6 w-xl bg-gray-50 text-center text-lg">
            <li>{name}</li>
            <li>Quantity: {quantity}</li>
            <li>Category: {category}</li>
        </ul>
    )
};

export default Item;