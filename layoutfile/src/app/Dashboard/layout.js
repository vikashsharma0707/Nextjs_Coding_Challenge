// app/dashboard/layout.js
export const metadata = {
  title: 'Dashboard - My App',
};

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa' }}>
      <aside style={{
        width: '240px',
        backgroundColor: '#1e1e2f',
        color: '#fff',
        padding: '2rem 1rem',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '1.4rem', borderBottom: '2px solid #444', paddingBottom: '0.5rem' }}>
          🧭 Dashboard
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1rem' }}>
            <a href="/Dashboard" style={linkStyle}>🏠 Overview</a>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <a href="/Dashboard/Setting" style={linkStyle}>⚙️ Settings</a>
          </li>
        </ul>
      </aside>

      <main style={{
        flex: 1,
        padding: '2rem',
        backgroundColor: '#ffffff',
        boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{ marginBottom: '1rem', color: '#333' }}>📊 Dashboard Area</h2>
        <div style={{ padding: '1rem', backgroundColor: '#f1f3f5', borderRadius: '8px' }}>
          {children}
        </div>
      </main>
    </div>
  );
}

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '1rem',
  display: 'inline-block',
  padding: '0.4rem 0.8rem',
  borderRadius: '5px',
  transition: 'background 0.3s ease',
  backgroundColor: '#2e2e42'
};

// Hover effect using inline styles in JSX isn't automatic,
// so add this in a `<style jsx>` block if needed OR move to CSS Module if project grows.
