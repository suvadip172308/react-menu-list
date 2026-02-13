import "./App.css";
import { CardItem } from "./components/CardItem";
import { MenuItem } from "./components/MenuItem";
import { MenuList } from "./components/MenuList";
import { FaTrash } from "react-icons/fa";

function App() {
  const handleCardClick = () => {
    alert("On Click Card Navigate To Somewhere Else");
  };

  const handleDelete = () => {
    alert("Confirm Delete ?");
  };

  return (
    <div className="flex justify-center">
      <MenuList className="flex flex-col w-200">
        <MenuItem className="">
          <CardItem onCardClick={handleCardClick}>
            <p>Adrija</p>
            <p>Das</p>
            <button className="cursor-pointer" onClick={handleDelete}>
              <FaTrash className="h-5 w-5 text-black-500" />
            </button>
          </CardItem>
          <CardItem>
            <p>Suvadip</p>
            <p>Ghosh</p>
            <button className="cursor-pointer" onClick={handleDelete}>
              <FaTrash className="h-5 w-5 text-black-500" />
            </button>
          </CardItem>
        </MenuItem>
      </MenuList>
    </div>
  );
}

export default App;
