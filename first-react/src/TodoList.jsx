
import { useState } from "react";
import { Lightbulb, SquareKanbanPlus, X } from "lucide-react";

function TodoList({ title }) {
  const [cards, setCards] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [text, setText] = useState("");
  const [num,setNum] = useState(0);

 
function handleAdd() {
    if (text.trim() === "") return;

    setCards([...cards, text]);
    setText("");
    setIsAdding(false);
  }

  function handleCancel() {
    setText("");
    setIsAdding(false);
  }

   function increment () {
    setNum(num + 1);
  }



  return (
    <div className="bg-[#101204] w-65 py-2 px-3 rounded-lg mt-4 self-start">

      <div className="flex gap-40">
           <h3 className="font-semibold mb-3">{title}</h3>
           <p>{num}</p>
      </div>
     

      {cards.map((card, index) => (
        <div key={index} className="bg-gray-500 rounded shadow-sm p-2 my-2">
          {card}
        </div>
      ))}

      {isAdding ? (
        <div>
          <textarea
            autoFocus
            placeholder="Enter a title for this card..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 rounded shadow-sm resize-none outline-none"
            rows={3}
          />
          <div className="flex items-center gap-2 mt-3 cursor-pointer">
            <button
              onClick={() =>{
                handleAdd ();
                increment();
              } }
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
            >
              Add card
            </button>

            <div className="bg-[#48245D] flex gap-2 p-1 rounded hover:bg-gray-800">
              <Lightbulb />
              <button>Tip</button>
            </div>

            <X onClick={handleCancel} className="w-5 h-5" />
          </div>
        </div>
      ) : (
        <div className="flex gap-8">
          <button
            onClick={() => setIsAdding(true)}
            className="w-full text-left text-white hover:bg-gray-800 p-2 rounded"
          >
            + Add a card
          </button>

          <SquareKanbanPlus className="w-5 h-5 mt-2" />
        </div>
      )}
    </div>
  );
}

export default TodoList;