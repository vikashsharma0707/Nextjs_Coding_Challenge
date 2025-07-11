'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function UserouterDemo() {
  const router = useRouter();

  useEffect(() => {
    console.log('✅ Component mounted and ready to navigate');
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🚀 useRouter Demo (Next.js 15)</h2>
        <p style={styles.subtitle}>Navigate programmatically using push, replace, and back</p>

        <div style={styles.buttonGroup}>
          <button style={styles.button} onClick={() => router.push('/userouterdemo?id=99')}>
            🔁 Push → ?id=99
          </button>
          <button style={styles.button} onClick={() => router.replace('/userouterdemo?id=123')}>
            ♻️ Replace → ?id=123
          </button>
          <button style={styles.button} onClick={() => router.back?.()}>
            ⬅️ Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #f9f9f9, #e0eaff)',
    padding: 20,
  },
  card: {
    padding: '30px 40px',
    borderRadius: '16px',
    backgroundColor: '#ffffff',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
    maxWidth: '420px',
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },
  title: {
    marginBottom: 10,
    fontSize: '24px',
    color: '#333',
  },
  subtitle: {
    marginBottom: 24,
    fontSize: '15px',
    color: '#666',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  button: {
    padding: '12px 18px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#0070f3',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

styles.button[':hover'] = {
  backgroundColor: '#0055cc',
};
