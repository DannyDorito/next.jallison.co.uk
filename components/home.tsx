"use client";

import { Button } from "@/components/ui/button";
import { socialData } from "@/data/SocialData";
import Link from "next/link";

export const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 overflow-hidden">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-3">
        {"<John Allison/>"}
      </h1>
      <p className="text-sm text-muted-foreground">Full Stack Developer.</p>
      <div className="flex flex-row pt-10">
        {socialData.map((sd, index) => {
          return (
            <div key={`social-div-${index}`} className="pr-2 pl-2">
              <Link
                key={`social-link-${index}`}
                className="px-3"
                href={sd.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sd.platform}
              >
                <Button
                  variant="secondary"
                  size="icon"
                  className="cursor-pointer"
                >
                  <sd.icon key={`social-icon-${index}`} />
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};
