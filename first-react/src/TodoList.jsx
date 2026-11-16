
import { useState } from "react";
import { Lightbulb, SquareKanbanPlus, X,SquarePen } from "lucide-react";

function TodoList({ title }) {
  const [cards, setCards] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [text, setText] = useState("");
  const [num,setNum] = useState(cards.length);
  // const [openMenu, setOpenMenu] = useState(null); // null = no menu open

 
function handleAdd() {
    if (text.trim() === "") return;

    setCards([...cards, text]);
    increment();
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

// const lists = ["Open card", "Edit label", "Change cover", "Edit Date", "Move", "Copy card"];




  return (
    <div className="bg-[#101204] w-65 py-2 px-3 rounded-lg mt-4 self-start">

      <div className="flex gap-40">
           <h3 className="font-semibold mb-3">{title}</h3>
           <p>{cards.length}</p>
      </div>
     

     {cards.map((card, index) => (
  <div
    key={index}
    className="group flex items-center bg-gray-500 rounded-lg shadow-sm p-2 my-2 cursor-pointer relative"
  >
    <input
      type="checkbox"
      className=" appearance-none border-8 border-white w-0 opacity-0  group-hover:w-4 group:hover:h-4 rounded-full  group-hover:opacity-100 group-hover:mr-2 transition-all duration-200  checked:border-green-500"
    />
    {/* <SquarePen onClick={listOption} className='w-5 h-5 absolute right-2 hidden group-hover:block '/> */}


    <span>{card}</span>
  </div>
))}

      {isAdding ? (
        <div>
          <textarea
            autoFocus
            placeholder="Enter a title for this card..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full   rounded-lg bg-[#242528] shadow-sm  outline-none"
            rows={3}
          />
          <div className="flex items-center gap-2 mt-3 cursor-pointer">
            <button
              onClick={handleAdd}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
            >
              Add card
            </button>

            <div className="bg-[#48245D] flex gap-2 p-1 rounded hover:bg-gray-800">
              <Lightbulb className="w-5 h-5" />
              <button>Tip</button>
            </div>

            <X onClick={handleCancel} className="w-5 h-5" />
          </div>
        </div>
      ) : (
        <div className="flex gap-8">
          <button
            onClick={() => setIsAdding(true)}
            className="w-full text-left text-white hover:bg-gray-800 p-2 rounded-lg"
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