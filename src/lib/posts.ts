import { allPosts } from '../data';

/**
 * Returns a slice of posts.
 *
 * @param {number} [pageIndex=1] The page index to get.
 *
 * @returns {Object} An object with two properties: `posts` and `nextPageAvailable`.
 *
 * @example
 * const { posts, nextPageAvailable } = getPosts(2);
 * console.log(posts.length); // e.g., 10
 * console.log(nextPageAvailable); // e.g., true
 */
export function getPosts(pageIndex: number = 1) {
  const nextPageAvailableIs = allPosts.length > 10 * pageIndex;

  const sendPosts = allPosts.slice(10 * (pageIndex - 1), 10 * pageIndex);

  return {
    posts: sendPosts,
    nextPageAvailable: nextPageAvailableIs,
  };
}

/**
 * Get the post by its slug.
 *
 * @param {string} slug The post slug.
 *
 * @returns {Object} The post or `undefined` if not found.
 *
 * @example
 * const post = getPostsBySlug('hello-world');
 * console.log(post.title); // e.g., "Hello World"
 */
export function getPostsBySlug(slug: string) {
  const post = allPosts.find((post) => post.slug === slug);
  return post;
}

/**
 * Returns a slice of posts by category.
 *
 * @param {string} category The post category.
 * @param {number} [pageIndex=1] The page index to get.
 *
 * @returns {Object} An object with two properties: `posts` and `nextPageAvailable`.
 *
 * @example
 * const { posts, nextPageAvailable } = getPostsByCategory('javascript', 2);
 * console.log(posts.length); // e.g., 10
 * console.log(nextPageAvailable); // e.g., true
 */
export function getPostsByCategory(category: string, pageIndex: number = 1) {
  const allCategoryPosts = allPosts.filter(
    (post) => post.categorie.slug === category,
  );

  const categoryFound = allCategoryPosts.length > 0;

  const nextPageAvailableIs = allCategoryPosts.length > 10 * pageIndex;

  const sendPosts = allCategoryPosts.slice(
    10 * (pageIndex - 1),
    10 * pageIndex,
  );

  return {
    posts: sendPosts,
    nextPageAvailable: nextPageAvailableIs,
    categoryFound: categoryFound,
  };
}

/**
 * Get all categories.
 *
 * @returns {Object[]} An array of all categories.
 *
 * @example
 * const allCategories = getAllCategories();
 * console.log(allCategories.length); // e.g., 2
 */

export function getAllCategories() {
  const categories = allPosts.map((post) => post.categorie);

  const uniqueCategoriesMap = new Map();

  categories.forEach((category) => {
    uniqueCategoriesMap.set(category.slug, category);
  });

  const filteredCategories = Array.from(uniqueCategoriesMap.values());

  return filteredCategories;
}
