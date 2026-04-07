import { Link, Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar';

export function MainLayout() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header
        style={{
          height: 56,
          borderBottom: '1px solid #ddd',
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600 }}>
            TintUI
          </Link>
          <Link to="/components" style={{ textDecoration: 'none', color: 'inherit' }}>
            Components
          </Link>
        </div>
        <div style={{ fontSize: 12, color: '#666' }}>Preview</div>
      </header>

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <Sidebar />
        <main style={{ flex: 1, overflow: 'hidden' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
