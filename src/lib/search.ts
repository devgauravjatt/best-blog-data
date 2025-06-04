import Fuse from 'fuse.js';
import { allPosts } from '../data';

/**
 * Search for posts by title query using Fuse.js.
 *
 * @param {string} query - The search query string.
 * @returns {Array<Object>} - An array of posts matching the search query.
 */
export function getPostsBySearch(query: string) {
  const fuse = new Fuse(allPosts, {
    threshold: 0.3,
    keys: ['title'],
  });
  const posts = fuse.search(query);
  return posts.slice(0, 10);
}
