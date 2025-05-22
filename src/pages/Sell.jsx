import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Sell.css'; 
const Sell = () => {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("rehome_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || !preview) return alert("Please fill all fields including image");

    const newItem = {
      id: Date.now(),
      title,
      price,
      image: preview,
      email: user.email,
    };

    const existingItems = JSON.parse(localStorage.getItem(`items_${user.email}`)) || [];
    localStorage.setItem(`items_${user.email}`, JSON.stringify([...existingItems, newItem]));

    alert("Item posted successfully!");
    navigate("/profile");
  };

  if (!user) {
    return <p>You must be logged in to post.</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Post an Item for Sale</h2>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price (KES)" required />
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        {preview && <img src={preview} alt="Preview" style={{ width: "200px", marginTop: "1rem" }} />}
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Sell;
