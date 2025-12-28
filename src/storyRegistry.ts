import type { ComponentType, ReactNode } from 'react';

export type Decorator = (story: ReactNode) => ReactNode;

/* ---- type to export in .stories files ---- */
export type StoryDefinition = {
    title?: string;
    Component: ComponentType;
    decorators?: Decorator[];
};

/* ---- types for building and rendering story objects ---- */

export type Story = {
    id: string;
    name: string;
    Component: ComponentType;
    decorators: Decorator[];
};

export type StoryGroup = {
    title: string;
    stories: Story[];
};

/* ---- Story discovery ---- */

type StoryModule = {
    default: StoryDefinition;
    [key: string]: StoryDefinition;
};

const modules = import.meta.glob('../lib/components/**/*.stories.tsx', {
    eager: true, // enable HMR
}) as Record<string, StoryModule>;

export function getStoryGroups(): StoryGroup[] {
    return Object.entries(modules).map(([path, mod]) => {
        const groupTitle = mod.default.title ?? path;
        const fileDecorators = mod.default.decorators ?? [];

        const stories: Story[] = Object.entries(mod)
            .map(([name, def]) => ({
                id: `${groupTitle}-${name}`,
                name: def.title ?? name,
                Component: def.Component,
                decorators: [...fileDecorators, ...(def.decorators ?? [])],
            }));

        return {
            title: groupTitle,
            stories,
        };
    });
}

export function applyDecorators(
    story: ReactNode,
    decorators: Decorator[]
): ReactNode {
    return decorators.reduceRight((acc, decorator) => decorator(acc), story);
}
