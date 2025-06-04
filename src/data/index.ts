import data from '../data/posts.json';

const allPosts = data.posts.map(({ content, ...post }) => post);

const allPostsWithContent = data.posts;

export { allPosts, allPostsWithContent };
