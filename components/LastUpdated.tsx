import { formatDistanceToNow } from "date-fns";

export default async function LastUpdated() {
  const response = await fetch(
    "https://api.github.com/repos/gursheyss/next.gursheys.com",
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  const lastUpdated = new Date(data.pushed_at);
  const timeDifference = formatDistanceToNow(lastUpdated, { addSuffix: true });
  return (
    <>
      <span className="ml-1">{timeDifference}</span>
    </>
  );
}
