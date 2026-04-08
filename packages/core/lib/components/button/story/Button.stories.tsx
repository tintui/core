import { Button } from '../Button';
import type { Decorator, MetaStoryDefinition, StoryDefinition } from '../../../../src/storyRegistry';
import type { ReactNode } from 'react';

const withGrayBackground: Decorator = (story: ReactNode) => (
  <div style={{ background: '#f5f5f5', padding: 16 }}>{story}</div>
);

const Default = () => <Button>Default</Button>;

export default {
  title: 'Button',
  category: 'controls', // new : buttons live under a "controls" category
  decorators: [withGrayBackground],
  Component: Default,
} satisfies MetaStoryDefinition;

export const Secondary = {
  title: 'Secondary Button',
  // inherits `category` from the default export above ("controls")
  decorators: [],
  Component: () => <Button style={{ background: 'hotpink' }}>Secondary</Button>,
} satisfies StoryDefinition;
