import React, { useState } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  const [selectedPizza, setSelectedPizza] = useState(null);

 
  const openModal = (pizza) => {
    setSelectedPizza(pizza);
  };

  
  const closeModal = () => {
    setSelectedPizza(null);
  };

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <div onClick={() => openModal(menuItem)} key={key}>
              <MenuItem image={menuItem.image} name={menuItem.name} price={menuItem.price} />
            </div>
          );
        })}
      </div>

      {}
      {selectedPizza && (
        <div className="modal show">
          <div className="modalContent">
            <span className="close" onClick={closeModal}>&times; </span>
            <h1>{selectedPizza.name}</h1>
            <img src={selectedPizza.image} alt={selectedPizza.name} />
            <p>Price: ${selectedPizza.price}</p>
            <p>{selectedPizza.description}</p> {}
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;