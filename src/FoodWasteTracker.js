import React, { useState, useEffect } from "react";
import "./App.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

function FoodWasteTracker() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const itemsCollectionRef = collection(db, "foodWasteItems");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDocs(itemsCollectionRef);
        setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching data from Firebase: ", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!itemName || !quantity) return;

    try {
      const newItem = { name: itemName, quantity: Number(quantity) };
      const docRef = await addDoc(itemsCollectionRef, newItem); // Use addDoc with itemsCollectionRef
      setItems([...items, { id: docRef.id, ...newItem }]);
      setItemName("");
      setQuantity("");
    } catch (error) {
      console.error("Error adding item to Firebase: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await db.collection("foodWasteItems").doc(id).delete();
      const updatedItems = items.filter((item) => item.id !== id);
      setItems(updatedItems);
    } catch (error) {
      console.error("Error deleting item from Firebase: ", error);
    }
  };

  const handleEdit = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    setItemName(itemToEdit.name);
    setQuantity(itemToEdit.quantity.toString());
    handleDelete(id);
  };

  return (
    <div className="App">
      <h1>Food Waste Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>

      {/* Add inline styles to the table element */}
      <table
        style={{
          border: "1px solid black",
          borderCollapse: "collapse",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Item Name
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Quantity
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {item.name}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {item.quantity}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FoodWasteTracker;
