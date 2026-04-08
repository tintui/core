import { useSelectedCollection } from './useSelectedCollection';

export function ComponentGuide() {
  const { selected } = useSelectedCollection();

  if (!selected) {
    return <div style={{ padding: 24, color: '#999' }}>Select a component collection from the sidebar</div>;
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>{selected.title} guide</h2>
      <p>
        Add documentation, usage patterns, API details, and best practices for{' '}
        <strong>{selected.title}</strong> here.
      </p>
    </div>
  );
}
