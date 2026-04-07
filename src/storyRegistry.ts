import type { ComponentType, ReactNode } from 'react';

export type Decorator = (story: ReactNode) => ReactNode;

/* ---- named exports from story files ---- */
export type StoryDefinition = {
    title?: string;
    Component: ComponentType;
    decorators?: Decorator[];
};
export type MetaStoryDefinition = StoryDefinition & {
    category: string;
};

/* ---- types for building and rendering story objects ---- */
export type Story = {
    id: string;
    name: string;
    Component: ComponentType;
    decorators: Decorator[];
};

export type StoryCollection = {
    /**
     * The title of this story collection (from the default export's title or file name).
     */
    title: string;
    stories: Story[];
};

/**
 * Collections grouped by category.  Keys are the raw category string (not
 * slugged); the sidebar and router will slug when generating URLs.
 */
export type CollectionsByCategory = Record<string, StoryCollection[]>;


type StoryModule = {
    default: StoryDefinition & { category: string };
    [key: string]: StoryDefinition;
};

const modules = import.meta.glob('../lib/components/**/*.stories.tsx', {
    eager: true,
}) as Record<string, StoryModule>;

export function getStoryCollections(): CollectionsByCategory {
    const result: CollectionsByCategory = {};

    for (const [, mod] of Object.entries(modules)) {
        if (!mod.default || !mod.default.category) continue;

        const category = mod.default.category;
        const title = mod.default.title ?? category;
        const fileDecorators = mod.default.decorators ?? [];

        const collection: StoryCollection = { title, stories: [] };

        for (const [name, def] of Object.entries(mod)) {
            collection.stories.push({
                id: `${category}-${name}`,
                name: def.title ?? name,
                Component: def.Component,
                decorators: [...fileDecorators, ...(def.decorators ?? [])],
            });
        }

        if (!result[category]) result[category] = [];
        result[category].push(collection);
    }

    return result;
}

export function applyDecorators(
    story: ReactNode,
    decorators: Decorator[]
): ReactNode {
    return decorators.reduceRight((acc, decorator) => decorator(acc), story);
}
