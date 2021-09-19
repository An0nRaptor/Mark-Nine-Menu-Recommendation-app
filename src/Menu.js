import React from "react";
import "./App.css";

function Menu({ items }) {
  return (
    <div className="section-center">
      {items.map((menuitem) => {
        const { id, title, price, img, desc } = menuitem;

        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">&#8377;{price}</h4>
              </header>
              <div className="item-text">{desc} </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
