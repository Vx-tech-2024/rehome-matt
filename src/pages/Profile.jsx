import React, { useEffect, useState } from 'react';
import LoginButton from '../components/LoginButton';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("rehome_user");
    if (stored) {
      const userData = JSON.parse(stored);
      setUser(userData);

      const items = JSON.parse(localStorage.getItem(`items_${userData.email}`)) || [];
      setUserItems(items);
    }
  }, []);

  const handleLogin = (loggedInUser) => {
    const userData = {
      name: loggedInUser.displayName,
      email: loggedInUser.email,
      photo: loggedInUser.photoURL
    };
    setUser(userData);
    setUserItems(JSON.parse(localStorage.getItem(`items_${userData.email}`)) || []);
  };

  const handleLogout = () => {
    localStorage.removeItem("rehome_user");
    window.location.reload();
  };

  const handleDelete = (id) => {
    const updatedItems = userItems.filter(item => item.id !== id);
    setUserItems(updatedItems);
    localStorage.setItem(`items_${user.email}`, JSON.stringify(updatedItems));
  };

  if (!user) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Please log in</h2>
        <LoginButton onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Profile</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', alignItems: 'center' }}>
        <img src={user.photo} alt="profile" style={{ width: 100, borderRadius: "50%" }} />
        <div>
          <p><strong>{user.name}</strong></p>
          <p><a href={`mailto:${user.email}`}>{user.email}</a></p>
        </div>
        <button onClick={handleLogout} style={{ marginLeft: "auto", padding: "0.5rem 1rem" }}>Logout</button>
      </div>

      <h3>Your Listings</h3>
      {userItems.length === 0 ? (
        <p>No items posted yet</p>
      ) : (
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {userItems.map((item) => (
            <div key={item.id} style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "12px" }}>
              <img src={item.image} alt={item.title} style={{ width: "100%", height: 120, objectFit: "cover" }} />
              <h4>{item.title}</h4>
              <p>KES {item.price}</p>
              <button onClick={() => handleDelete(item.id)} style={{ backgroundColor: "red", color: "white", border: "none", padding: "0.5rem", marginTop: "0.5rem" }}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
