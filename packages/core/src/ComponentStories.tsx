import { type ReactNode } from 'react';
import { applyDecorators } from './storyRegistry';
import { useSelectedCollection } from './useSelectedCollection';

const globalDecorator = (story: ReactNode) => (
  <>{story}</>
);

export function ComponentStories() {
  const { selected } = useSelectedCollection();

  if (!selected) {
    return <div style={{ padding: 24, color: '#999' }}>Select a component collection from the sidebar</div>;
  }

  return (
    <div style={{ padding: 24 }}>
      {selected.stories.map(story => (
        <div key={story.id} style={{ marginBottom: 24 }}>
          <h3>{story.name}</h3>
          {applyDecorators(<story.Component />, [globalDecorator, ...story.decorators])}
        </div>
      ))}
    </div>
  );
}
