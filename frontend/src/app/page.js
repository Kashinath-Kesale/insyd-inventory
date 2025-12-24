"use client";

import { useEffect, useState } from 'react';
import { getItems, addItem, updateItem } from '../services/inventoryApi';

export default function Home() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [minThreshold, setMinThreshold] = useState("");
  const [editingId, setEditingId] = useState(null);

  const fetchInventory = async() => {
    const data = await getItems();
    setItems(data);
  };

  useEffect(() =>{
    fetchInventory();
  }, []);


  const handleSubmit = async(e)=> {
    e.preventDefault();

    if(!name || quantity === "" || minThreshold === ""){
      alert('Please fill all fields');
      return;
    }

    const itemData = {name, quantity : Number(quantity), minThreshold: Number(minThreshold)};

    if(editingId){
      await updateItem(editingId, {
        quantity: itemData.quantity,
        minThreshold: itemData.minThreshold
      });
    }
    else await addItem(itemData);

    setName("");
    setQuantity("");
    setMinThreshold("");
    setEditingId(null);

    fetchInventory();
  }

  
  const handleEdit =(item) =>{
    setName(item.name);
    setQuantity(item.quantity);
    setMinThreshold(item.minThreshold);
    setEditingId(item._id);
  }


  return(
    <main style = {{padding: '20px', maxWidth: '900px', margin: '0 auto'}}>
      <h1>Inventory Dashboard</h1>
      <p>Current stock overview</p>

      <form onSubmit={handleSubmit} style={{marginBottom: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
        <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} disabled={editingId !== null} style={{marginRight: "10px", padding: "6px", minWidth: "150px"}} />

        <input type="number" placeholder='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} style={{marginRight: "10px", padding: "6px", minWidth: "150px"}}  />

        <input type="number" placeholder='min threshold' value={minThreshold} onChange={(e) => setMinThreshold(e.target.value)} style={{marginRight: "10px", padding: "6px", minWidth: "150px"}}  />

        <button type="submit">{editingId ? "Update Item" : "Add Item"}</button>

      </form>

      <table border="1" style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px"}}>
        <thead>
          <tr>
            <th style={{ padding: "10px", textAlign: "left" }}>Item Name</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Quantity</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Min Threshold</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Status</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.length === 0 ? (<tr><td colSpan = "5">No inventory items found</td></tr>) : (
            items.map((item, index) => {
              const isLowStock = item.quantity < item.minThreshold;

              return(
                <tr key={`${item._id}-${index}`}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.minThreshold}</td>
                  <td style={{ color: isLowStock ? '#ff6b6b' : '#4caf50'}}> {isLowStock ? "Low Stock" : "OK"}</td>
                  <td><button onClick={() => handleEdit(item)}>Edit</button></td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </main>
  )
};
