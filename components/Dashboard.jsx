import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchUser = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch('https://tej-backend-production.up.railway.app/user', {
  headers: { Authorization: `Bearer ${token}` }
});

    const data = await res.json();
    if (res.ok) {
      setUser(data);
    } else {
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return user ? (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Role: {user.role}</p>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
