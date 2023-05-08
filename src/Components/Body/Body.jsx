import React from "react";
import "./Body.css";
import { RestaurantCard } from "Components";
function Body() {
  return (
    <div>
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <button>
          {" "}
          <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="card-list">
        <RestaurantCard />
      </div>
    </div>
  );
}

export { Body };
