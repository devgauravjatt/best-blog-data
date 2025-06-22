import {
  getAllCategories,
  getFullPostBySlug,
  getPosts,
  getPostsByCategory,
} from './lib/posts'
import { getPostsBySearch } from './lib/search'

class BestBlogData {
  constructor() {}

  getAllCategories() {
    return getAllCategories()
  }

  getFullPostBySlug(slug: string) {
    return getFullPostBySlug(slug)
  }

  getPosts(pageIndex: number = 1) {
    return getPosts(pageIndex)
  }

  getPostsByCategory(category: string, pageIndex: number = 1) {
    return getPostsByCategory(category, pageIndex)
  }

  getPostsBySearch(query: string) {
    return getPostsBySearch(query)
  }
}

export default BestBlogData
