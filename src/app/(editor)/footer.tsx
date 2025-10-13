import {
  GITHUB_REPO,
  TWITTER_URL
} from "@/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-center gap-6 p-4 text-sm text-muted-foreground">
      <p className="text-center text-muted-foreground">
        Made by{" "}
        <Link
          href={"https://siteassist.io?utm_source=codetoimg"}
          target="_blank"
          className="font-medium text-foreground underline-offset-2 hover:underline"
        >
          SiteAssist.io
        </Link>
      </p>
      <Link
        href={'/home'}
        target="_blank"
        className="font-medium text-muted-foreground underline-offset-2 hover:text-accent-foreground hover:underline"
      >
        Home
      </Link>
      <Link
        href={GITHUB_REPO}
        target="_blank"
        className="font-medium text-muted-foreground underline-offset-2 hover:text-accent-foreground hover:underline"
      >
        Github
      </Link>
      <Link
        href={TWITTER_URL}
        target="_blank"
        className="font-medium text-muted-foreground underline-offset-2 hover:text-accent-foreground hover:underline"
      >
        Twitter
      </Link>
    </footer>
  );
}
