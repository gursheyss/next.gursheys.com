import { formatDistanceToNow } from "date-fns";

export default async function LastUpdated() {
  const response = await fetch(
    "https://api.github.com/repos/gursheyss/astro.gursheys.com",
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  const lastUpdated = new Date(data.pushed_at).toLocaleDateString();
  const timeDifference = formatDistanceToNow(lastUpdated, { addSuffix: true });
  return (
    <>
      <span className="ml-1">{timeDifference}</span>
    </>
  );
}
