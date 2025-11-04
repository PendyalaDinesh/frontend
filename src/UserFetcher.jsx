import React, { useState } from "react";

export default function UserFetcher() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);

  const handleFetch = async () => {
    if (!userId) return;
    setLoading(true);
    setUser(null);
    setError("");
    setNotFound(false);

    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();

      if (!data.id) {
        setNotFound(true);
      } else {
        setUser(data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="number"
        placeholder="Enter user ID (1–10)"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <button
        onClick={handleFetch}
        style={{ marginLeft: "10px", padding: "8px 16px", fontSize: "16px" }}
      >
        Fetch User
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {notFound && <p style={{ color: "orange" }}>User not found</p>}
      {user && (
        <div style={{ marginTop: "15px", textAlign: "left", display: "inline-block" }}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>
      )}
    </div>
  );
}
