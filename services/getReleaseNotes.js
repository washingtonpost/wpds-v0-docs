/**
 * fetch all release notes from github graphql api
 */

export const getReleaseNotes = async (repoName) => {
  const query = `
query {
    repository(name: "${repoName}", owner: "washingtonpost") {
        releases(first: 4, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
            id
            name
            isLatest
            description
            publishedAt
            shortDescriptionHTML
        }
        }
    }
    }
`;

  const response = await fetch(`https://api.github.com/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();

  const releaseNotes = data.data.repository.releases.nodes.map((release) => {
    return {
      id: release.id,
      name: release.name,
      isLatest: release.isLatest,
      description: release.description,
    };
  });

  return releaseNotes;
};
