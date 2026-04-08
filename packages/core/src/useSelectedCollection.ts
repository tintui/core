import { useLocation, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { getStoryCollections, type StoryCollection, type CollectionsByCategory } from './storyRegistry';

const toSlug = (str: string) => str.toLowerCase().replace(/\s+/g, '-');
const fromSlug = (slug: string) => slug.toLowerCase().replace(/-/g, ' ');

export function useSelectedCollection(): {
  collectionsByCategory: CollectionsByCategory;
  selected: StoryCollection | null;
  currentTab: 'stories' | 'guide';
  activeCollectionSlug: string | null;
  activeCategorySlug: string | null;
} {
  const location = useLocation();
  const { category, collection } = useParams();

  const collectionsByCategory = getStoryCollections();

  const selected = useMemo<StoryCollection | null>(() => {
    if (!category || !collection) return null;

    const catLower = fromSlug(category);
    const colLower = fromSlug(collection);
    const collections = collectionsByCategory[catLower];
    return collections?.find(c => c.title.toLowerCase() === colLower) ?? null;
  }, [category, collection, collectionsByCategory]);

  const currentTab = location.pathname.endsWith('/guide') ? 'guide' : 'stories';

  return {
    collectionsByCategory,
    selected,
    currentTab,
    activeCategorySlug: category ?? null,
    activeCollectionSlug: collection ?? null,
  };
}
