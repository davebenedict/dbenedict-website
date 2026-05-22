import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const username = 'davebenedict';
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          // Optional: Add your GitHub token for higher rate limits
          // 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repos');
    }

    const repos = await response.json();

    // Filter and format the repos
    const formattedRepos = repos
      .filter((repo: any) => !repo.fork && !repo.private) // Only show original public repos
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'No description available',
        url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics || [],
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
      }))
      .sort((a: any, b: any) => b.stars - a.stars); // Sort by stars

    return NextResponse.json(formattedRepos);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    );
  }
}
