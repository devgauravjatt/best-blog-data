import BestBlogData from 'best-blog-data'
import { describe, expect, it } from 'vitest'

const blogData = new BestBlogData()

describe('BestBlogData', () => {
  describe('getPosts()', () => {
    it('should return 10 posts on the first page', () => {
      const { posts, nextPageAvailable } = blogData.getPosts()
      expect(posts).toHaveLength(10)
      expect(typeof nextPageAvailable).toBe('boolean')
    })

    it('should return different posts on page 2', () => {
      const page1 = blogData.getPosts(1)
      const page2 = blogData.getPosts(2)
      expect(page1.posts[0].slug).not.toBe(page2.posts[0].slug)
    })
  })

  describe('getFullPostBySlug()', () => {
    it('should return a full post by slug', () => {
      const firstPost = blogData.getPosts().posts[0]
      const post = blogData.getFullPostBySlug(firstPost.slug)
      expect(post).toBeDefined()
      expect(post?.slug).toBe(firstPost.slug)
      expect(post?.content).toBeTruthy()
    })

    it('should return undefined for an invalid slug', () => {
      const post = blogData.getFullPostBySlug('invalid-slug')
      expect(post).toBeUndefined()
    })
  })

  describe('getPostsByCategory()', () => {
    it('should return posts for a valid category', () => {
      const categories = blogData.getAllCategories()
      const result = blogData.getPostsByCategory(categories[0].slug)
      expect(result.categoryFound).toBe(true)
      expect(result.posts.length).toBeGreaterThan(0)
    })

    it('should return categoryFound false for an invalid category', () => {
      const result = blogData.getPostsByCategory('unknown-category')
      expect(result.categoryFound).toBe(false)
      expect(result.posts).toHaveLength(0)
    })
  })

  describe('getAllCategories()', () => {
    it('should return a list of categories', () => {
      const categories = blogData.getAllCategories()
      expect(categories.length).toBeGreaterThan(0)
      expect(categories[0]).toHaveProperty('slug')
      expect(categories[0]).toHaveProperty('name')
    })
  })

  describe('getPostsBySearch()', () => {
    it('should return posts matching the search query', () => {
      const results = blogData.getPostsBySearch('ai')
      expect(results.length).toBeGreaterThan(0)
      expect(results[0]).toHaveProperty('title')
      expect(results[0].slug.includes('ai')).toBeTruthy()
    })

    it('should return empty array for unmatched search', () => {
      const results = blogData.getPostsBySearch('nonsensequerygibberish')
      expect(results).toHaveLength(0)
    })
  })
})
