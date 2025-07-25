// src/app/components/UserList.jsx
'use client';
import useSWR from 'swr';
import fetcher from '@/app/lib/fetcher';

export default function UserList() {
  const { data, error, isLoading } = useSWR('/api/users', fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load users</p>;

  return (
    <div className="user-container">
      <h1>Next.js with SWR</h1>
      <h2>User List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .user-container {
          max-width: 700px;
          margin: 2rem auto;
          padding: 30px;
          background: linear-gradient(to right, #e3f2fd, #ffffff);
          border-radius: 15px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          font-family: 'Segoe UI', sans-serif;
        }

        h1 {
          text-align: center;
          font-size: 2rem;
          color: #0d47a1;
          margin-bottom: 10px;
        }

        h2 {
          text-align: center;
          font-size: 1.5rem;
          color: #1565c0;
          margin-bottom: 20px;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          padding: 14px 18px;
          margin: 12px 0;
          background-color: #ffffff;
          border-left: 6px solid #1e88e5;
          border-radius: 6px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        li:hover {
          transform: translateX(5px);
          background-color: #e3f2fd;
          border-left-color: #0d47a1;
        }

        span {
          font-weight: 600;
          font-size: 17px;
          color: #333;
        }
      `}</style>
    </div>
  );
}
