import React, { useState } from "react";

const FoodWasteTracker = () => {
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [waste, setWaste] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWaste((prevWaste) => prevWaste + quantity);
    setFood("");
    setQuantity(0);
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Food Waste Tracker</h6>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="foodInput">Food Item</label>
            <input
              type="text"
              className="form-control"
              id="foodInput"
              value={food}
              onChange={(e) => setFood(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantityInput">Quantity (in grams)</label>
            <input
              type="number"
              className="form-control"
              id="quantityInput"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add to Waste
          </button>
        </form>
        <hr />
        <div className="text-center">
          <h4>Total Food Waste: {waste} grams</h4>
        </div>
      </div>
    </div>
  );
};

export default FoodWasteTracker;
