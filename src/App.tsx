import "./App.css";
import { CardItem } from "./components/CardItem";
import { MenuItem } from "./components/MenuItem";
import { MenuList } from "./components/MenuList";
import { CardType } from "./model/card.model";
import { LuCar } from "react-icons/lu";

function App() {
  const handleClickOnCardNav = (id: string) => {
    alert(`This card item clicked : ${id}`);
  };

  return (
    <div className="flex justify-center w-200">
      <MenuList className="flex flex-col w-full">
        <MenuItem className="w-full">
          <CardItem
            cardType={CardType.NAVIGABLE}
            cardSpecificProps={{
              id: "1001",
              leftIcon: <LuCar className="text-2xl" />,
              text: "Name",
              subText: "Hi Im Deep, Nice to meet you",
              onNavArrowClick: handleClickOnCardNav,
            }}
          />
        </MenuItem>
      </MenuList>
    </div>
  );
}

export default App;
