import { useEffect, useState } from 'react';

export default function RecentUploads() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch('https://tej-backend-production.up.railway.app/entries', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (res.ok) setEntries(data);
    };

    fetchEntries();
  }, []);

  return (
    <div className="container mt-4">
      <h4>Recent Uploads</h4>
      {entries.length === 0 ? (
        <p>No entries found.</p>
      ) : (
        <ul className="list-group">
          {entries.map((entry, idx) => (
            <li key={idx} className="list-group-item">
              <strong>From:</strong> {entry.from} | <strong>To:</strong> {entry.to} | <strong>Weight:</strong> {entry.weight}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
