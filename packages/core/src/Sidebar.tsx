import { Link } from 'react-router-dom';
import { useSelectedCollection } from './useSelectedCollection';

const toSlug = (str: string) => str.toLowerCase().replace(/\s+/g, '-');

export function Sidebar() {
  const { collectionsByCategory, selected, currentTab } = useSelectedCollection();

  return (
    <aside style={{ width: 250, borderRight: '1px solid #ddd', overflowY: 'auto' }}>
      {Object.entries(collectionsByCategory).map(([category, collections]) => (
        <div key={category}>
          <h4 style={{ marginLeft: 12, marginRight: 12 }}>{category}</h4>

          {collections.map(collection => (
            <Link
              key={collection.title}
              to={`/components/${toSlug(category)}/${toSlug(collection.title)}/${currentTab}`}
              style={{
                display: 'block',
                padding: '8px 12px',
                textDecoration: 'none',
                color: selected?.title === collection.title ? '#0066cc' : '#333',
                backgroundColor: selected?.title === collection.title ? '#f0f0f0' : 'transparent',
                borderLeft: selected?.title === collection.title ? '3px solid #0066cc' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {collection.title}
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
}
