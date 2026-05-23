import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  
  try {
    post = await getPostBySlug(slug);
  } catch (error) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
