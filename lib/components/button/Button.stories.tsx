import { Button } from './Button';
import type { Decorator, StoryDefinition } from '../../../src/storyRegistry';
import type { ReactNode } from 'react';

const withGrayBackground: Decorator = (story: ReactNode) => (
  <div style={{ background: '#f5f5f5', padding: 16 }}>{story}</div>
);

const Default = () => <Button>Default</Button>;

export default {
  title: 'Button',
  decorators: [withGrayBackground],
  Component: Default,
} satisfies StoryDefinition;

export const Secondary = {
  title: 'Secondary Button',
  decorators: [],
  Component: () => <Button style={{ background: 'hotpink' }}>Secondary</Button>,
} satisfies StoryDefinition;
