export default function ListItem({ itemData, deleteTodo }) {
  return (
    <li className="p-2 mt-2 bg-[#E0DFFE] text-[#13131E] mb-2 rounded flex">
      <span>{itemData.content}</span>
      <button
        onClick={() => deleteTodo(itemData.id)}
        className="ml-auto py-1 px-2 font-semibold bg-[#E54666] text-[#E0DFFE] rounded"
      >
        X
      </button>
    </li>
  );
}
