import { Copyright } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <main className="flex min-h-fit flex-col items-center p-16 overflow-hidden">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Created in&nbsp;
          <Link
            href="https://code.visualstudio.com"
            target="_blank"
            hrefLang="en-gb"
            rel="noopener noreferrer"
            className="underline"
          >
            VS Code
          </Link>
          , built in&nbsp;
          <Link
            href="https://nextjs.org"
            target="_blank"
            hrefLang="en-gb"
            rel="noopener noreferrer"
            className="underline"
          >
            Next.js
          </Link>
          &nbsp;and&nbsp;
          <Link
            href="https://ui.shadcn.com"
            target="_blank"
            hrefLang="en-gb"
            rel="noopener noreferrer"
            className="underline"
          >
            shadcn/ui
          </Link>
          ,&nbsp;deployed to&nbsp;
          <Link
            href="https://www.cloudflare.com"
            target="_blank"
            hrefLang="en-gb"
            rel="noopener noreferrer"
            className="underline"
          >
            Cloudflare
          </Link>
          .
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 flex items-center">
          <Copyright size={16} />
          &nbsp;John Allison 2018 - {new Date().getFullYear()}.
        </p>
      </main>
    </>
  );
};
