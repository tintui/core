export function LandingPage() {
  return (
    <div style={{ height: '100%', display: 'flex' }}>
      <main style={{ flex: 1, overflowY: 'auto', padding: 24 }}>
        <h1>Welcome to TintUI</h1>
        <p style={{ color: '#555', marginTop: 8 }}>
          Pick a component collection from the sidebar to get started.
        </p>
        <p style={{ color: '#999', marginTop: 16 }}>
          You can also browse the component docs and stories by selecting a category.
        </p>
      </main>
    </div>
  );
}

export const StoryPreview = LandingPage; // preserve existing exports until future cleanup

