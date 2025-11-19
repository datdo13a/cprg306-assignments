function Item({ itemObj, onSelect }) {
  const { name, quantity, category } = itemObj;

  return (
    <div
      onClick={() => onSelect(itemObj)}
      className="rounded-lg shadow-lg m-8 p-4 py-6 w-xl bg-gray-100 text-center text-lg hover:bg-gray-200 cursor-pointer"
    >
      <p className="text-xl font-bold">{name}</p>
      <p className="text-xl font-bold">Category: {category}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
}

export default Item;
