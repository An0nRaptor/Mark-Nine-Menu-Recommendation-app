import React, { useState } from "react";
import "./App.css";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./Data";

// for dynamic data
// const allCategories =["all" ,...new Set(items.map((item)=>{

//   return item.category
// }))] 
// console.log(allCategories)

function App() {
  const [menuItems, setMenuitems] = useState(items);
  // const [categories, setCategories] = useState([allCategories]);

  const filteredItems = (category) => {

    if(category === "all"){

      setMenuitems(items)
      return;
    }

    const newItems = items.filter((item) => {
      return item.category === category;
    });
    setMenuitems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2> Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories  filteredItems={filteredItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
