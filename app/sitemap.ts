import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/content/blog';

const SITE_URL = 'https://obxalethia.art';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/services', '/agents', '/web3', '/resources', '/blog', '/about'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date()
  }));

  const posts = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date
  }));

  return [...routes, ...posts];
}
