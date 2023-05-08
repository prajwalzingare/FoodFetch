import React from "react";
import "./RestaurantCard.css";
function RestaurantCard() {
  return (
    <div>
      <div className="card-container">
        <div className="card">
          <div className="card-image-container">
            <img
              src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
              alt=""
              className="card-img"
            />
          </div>
          <div className="card-description">
            <h5 className="card-title">Card Title</h5>
            <p>categories</p>
            <p>place famous for</p>
            <div className="card-buttons">
              <button>
                {" "}
                <i class="fa-sharp fa-solid fa-star"></i>Rating
              </button>
              <p>7.6 kms</p>
              <p>Price</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { RestaurantCard };
