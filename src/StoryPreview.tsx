import { useState, type ReactNode } from 'react';
import { getStoryGroups, type Decorator, type Story } from './storyRegistry';

function applyDecorators(
  story: ReactNode,
  decorators: Decorator[]
) {
  return decorators.reduceRight(
    (acc, decorator) => decorator(acc),
    story
  );
}

const globalDecorator: Decorator = story => {
  return (
    <div style={{ padding: 24 }}>
      {story}
    </div>
  );
};

export function StoryPreview() {
  const groups = getStoryGroups();
  const [selected, setSelected] = useState<Story | null>(null);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <aside style={{ width: 250, borderRight: '1px solid #ddd' }}>
        {groups.map(group => (
          <div key={group.title}>
            <h4>{group.title}</h4>

            {group.stories.map(story => (
              <button
                key={story.id}
                onClick={() => setSelected(story)}
                style={{ display: 'block', width: '100%' }}
              >
                {story.name}
              </button>
            ))}
          </div>
        ))}
      </aside>

      {/* Canvas */}
        <main style={{ flex: 1 }}>
        {selected
          ? applyDecorators(
              <selected.Component />,
              [globalDecorator, ...selected.decorators]
            )
          : 'Select a story'}
      </main>
    </div>
  );
}
