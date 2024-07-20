import { nanoid } from 'nanoid';
import { useState } from 'react';
import ListItem from './components/ListItem';

function App() {
  const [todoList, SetTodoList] = useState([
    {
      id: nanoid(8),
      item: 'item 1',
    },
    {
      id: nanoid(8),
      item: 'item 2',
    },
    {
      id: nanoid(8),
      item: 'item 3',
    },
  ]);

  function deleteTodo(id) {
    SetTodoList(todoList.filter((item) => item.id !== id));
  }

  return (
    <div className="h-screen bg-[#13131E]">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-[#B1A9FF] mb-4">Ma To-do liste</h1>
        <form className="mb-10">
          <label htmlFor="todo-item" className="text-[#E0DFFE]">
            Ajouter une chose à faire
          </label>
          <input
            type="text"
            className="mt-1 block w-full bg-[#E0DFFE] text-[#13131E] rounded focus:ring-[#3D3E82]"
          />
          <button className="mt-4 mb-4 py-2 px-2 bg-[#5B5BD6] rounded min-w-[115px] hover:bg-[#6E6ADE]">
            Ajouter
          </button>
          <ul>
            {todoList.map((item) => (
              <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} />
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
}

export default App;
