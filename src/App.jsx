import { nanoid } from 'nanoid';
import { useState } from 'react';
import ListItem from './components/ListItem';

function App() {
  const [todoList, setTodoList] = useState([]);

  const [todo, setTodo] = useState('');
  const [showValidation, setShowValidation] = useState(false);

  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.trim() === '') {
      setShowValidation(true);
      return;
    }
    if (todo.trim() !== '') {
      setTodoList([...todoList, { id: nanoid(8), content: todo }]);
      setTodo('');
      setShowValidation(false);
    }
  }

  return (
    <div className="h-screen">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-[#B1A9FF] mb-4">Ma To-do liste</h1>
        <form onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="todo-item" className="text-[#E0DFFE]">
            Ajouter une chose à faire
          </label>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="mt-1 block w-full bg-[#E0DFFE] text-[#13131E] rounded focus:ring-[#3D3E82]"
          />
          {showValidation && (
            <p className="text-[#E54666]">Veuillez entrer une tâche</p>
          )}
          <button className="mt-4 mb-4 py-2 px-2 bg-[#5B5BD6] rounded min-w-[115px] hover:bg-[#6E6ADE]">
            Ajouter
          </button>
          <ul>
            {todoList.length === 0 && (
              <li className="text-[#E0DFFE]">Aucune tâche à faire...</li>
            )}
            {todoList.length > 0 &&
              todoList.map((item) => (
                <ListItem
                  key={item.id}
                  itemData={item}
                  deleteTodo={deleteTodo}
                />
              ))}
          </ul>
        </form>
      </div>
    </div>
  );
}

export default App;
