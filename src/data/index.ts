import data from '../data/posts.json';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const allPosts = data.posts.map(({ content, ...post }) => post);

const allPostsWithContent = data.posts;

export { allPosts, allPostsWithContent };
