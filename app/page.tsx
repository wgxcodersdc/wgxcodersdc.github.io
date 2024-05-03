import { getAllPosts } from '@/lib/api';
import { HeroPost, MoreStories } from '@/components';

export default function Home() {
  const allPosts = getAllPosts();
  const sortedPosts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  const heroPost = sortedPosts[0];
  const morePosts = sortedPosts.slice(1);

  return (
    <main>
      <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </main>
  );
}
