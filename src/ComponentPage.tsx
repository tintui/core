import { Link, Outlet, useLocation } from 'react-router-dom';

export function ComponentPage() {
  const location = useLocation();

  const base = location.pathname.replace(/\/(stories|guide)$/, '');
  const currentTab = location.pathname.endsWith('/guide') ? 'guide' : 'stories';


  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <nav
        style={{
          borderBottom: '1px solid #ddd',
          padding: '0 16px',
          display: 'flex',
          gap: 16,
          alignItems: 'center',
          height: 56
        }}
      >
        <Link
          to={`${base}/stories`}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            padding: '12px 0',
            fontWeight: currentTab === 'stories' ? 700 : 600,
          }}
        >
          Stories
        </Link>
        <Link
          to={`${base}/guide`}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            padding: '12px 0',
            fontWeight: currentTab === 'guide' ? 700 : 600,
          }}
        >
          Guide
        </Link>
      </nav>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Outlet />
      </div>
    </div>
  );
}
