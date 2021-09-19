import React from "react";
// import "./App.css";

function Categories({ categories, filteredItems }) {
  return (
    <div className="btn-container">
     <button className='filter-btn' onClick={()=> filteredItems('all')}>
         All
     </button>
       <button className='filter-btn' onClick={()=> filteredItems('breakfast')}>
         Breakfast
     </button>
     <button className='filter-btn' onClick={()=> filteredItems('lunch')}>
         Lunch
     </button>
     <button className='filter-btn' onClick={()=> filteredItems('shakes')}>
         shakes
     </button>






    </div>
  );
}

export default Categories;


// {categories.map((category, index) => {
//     return (
//       <button
//         type="button"
//         className='filter-btn'
//         key={index}
//         onClick={() => filteredItems(category)}
//       >
//         {category}
//       </button>
//     );
//   })}
