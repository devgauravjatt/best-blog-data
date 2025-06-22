# 📚 Best-blog-data

A powerful and lightweight npm package for working with structured blog post data, featuring 200+ dummy posts out of the box. Includes built-in pagination, categorization, fuzzy search, and full TypeScript support. Perfect for static blogs, CMS backends, or frontend demos.

> \[!NOTE]
> 😍 200+ Posts and 30 Categories with SEO Meta!

![GitHub License](https://img.shields.io/github/license/devgauravjatt/best-blog-data?logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/devgauravjatt/best-blog-data?logo=git)
![NPM Downloads](https://img.shields.io/npm/dw/best-blog-data?logo=npm&color=%23f75352)
![NPM Version](https://img.shields.io/npm/v/best-blog-data?logo=npm&color=%23f75352)

---

## ✨ Features

- 📄 **Pagination** – Retrieve posts with configurable page size and pagination
- 🏷️ **Category Filtering** – Organize and access posts by categories
- 🔍 **Search** – Fuzzy search powered by [Fuse.js](https://fusejs.io/)
- 🔗 **Post Slug Lookup** – Quickly fetch posts by slug
- 🧩 **Modular API** – Simple, composable utilities
- ⚡ **Lightweight** – Zero bloat, minimal dependencies
- 🧠 **Fully Typed** – Built with TypeScript for great DX

---

## 📦 Installation

```bash
npm install best-blog-data
```

or

```bash
pnpm add best-blog-data
```

---

## 🚀 Quick Start

### Create Instance

```ts
import BestBlogData from 'best-blog-data'

const blogData = new BestBlogData()
```

---

### 📄 Get Paginated Posts

```ts
const { posts, nextPageAvailable } = blogData.getPosts() // Defaults to page 1
console.log(posts.length) // Up to 10 posts
```

```ts
const page2 = blogData.getPosts(2)
console.log(page2.posts.length)
```

---

### 🔗 Get Full Post by Slug with HTML Content

```ts
const post = blogData.getFullPostBySlug('my-blog-post-slug')
if (post) {
  console.log(post.title)
}
```

---

### 🏷️ Filter Posts by Category

```ts
const { posts, nextPageAvailable, categoryFound } =
  blogData.getPostsByCategory('technology')
if (categoryFound) {
  console.log(posts)
}
```

```ts
const reactPostsPage2 = blogData.getPostsByCategory('react', 2)
```

---

### 📚 Get All Categories

```ts
const categories = blogData.getAllCategories()
console.log(categories)
// [
//   { slug: 'react', name: 'React' },
//   { slug: 'ai', name: 'Artificial Intelligence' },
//   ...
// ]
```

---

### 🔍 Fuzzy Search Posts

```ts
const searchResults = blogData.getPostsBySearch('AI content')
searchResults.forEach(({ item, score }) => {
  console.log(`${item.title} (score: ${score})`)
})
```

---

## 📘 API Reference

### `blogData.getPosts(pageIndex?: number): { posts: Post[], nextPageAvailable: boolean }`

Returns paginated posts (10 per page by default).

---

### `blogData.getFullPostBySlug(slug: string): Post | undefined`

Fetch a single post by its unique slug.

---

### `blogData.getPostsByCategory(categorySlug: string, pageIndex?: number): { posts: Post[], nextPageAvailable: boolean, categoryFound: boolean }`

Retrieve posts filtered by a category slug.

---

### `blogData.getAllCategories(): Category[]`

Returns a list of all unique categories found in posts.

---

### `blogData.getPostsBySearch(query: string): FuseResult<Post>[]`

Performs fuzzy search across post titles. Returns max 10 results with match scores.

---

## 🧱 Data Structure

### `Post`

```ts
interface Post {
  slug: string
  title: string
  content?: string
  date: string
  image: string
  categorie: {
    slug: string
    name: string
  }
  meta_seo: {
    title: string
    description: string
    image: string
    url: string
  }
}
```

### `Category`

```ts
interface Category {
  slug: string
  name: string
}
```

---

## 🔧 Search Configuration (Fuse.js)

- **Threshold**: `0.3`
- **Search Keys**: `['title']`
- **Limit**: `10 results`

---

## 📦 Dependency

- [`fuse.js`](https://fusejs.io/) — Fuzzy search engine

---

## 💡 Use Cases

- Build static blog websites
- Power blog UIs with real or mock content
- CMS & content preview tools
- Search-enabled article listings
- Prototyping frontend blog layouts

---

## 🧠 TypeScript Support

This package is fully typed with built-in definitions, ensuring IntelliSense and compile-time safety in modern editors and TypeScript projects.

---

## 🤝 Contributing

Found a bug or have a feature idea? PRs and issues are welcome!

```bash
git clone https://github.com/devgauravjatt/best-blog-data
```

---

## 📄 License

MIT © [devgauravjatt](https://github.com/devgauravjatt)

---

## 🔍 Keywords

`blog`, `cms`, `posts`, `pagination`, `search`, `categories`, `typescript`, `fuse`, `content`, `npm-package`

---
