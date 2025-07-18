"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  devops,
  javascriptFrameworks,
  programmingLanguages,
} from "@/data/Skills";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export const About = () => {
  return (
    <main
      id="about"
      className="flex min-h-fit flex-col items-center p-24 overflow-hidden"
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-3">
        &lt;About&#47;&gt;
      </h1>
      <Card className="max-w-1/2">
        <CardHeader>
          <CardTitle>Hi, I&apos;m John.</CardTitle>
          <CardDescription>
            MEng (Hons). MBCS. Software Developer.
          </CardDescription>
        </CardHeader>
        <CardContent>
          I&apos;m currently a Mid-Level Full Stack Developer at&nbsp;
          <Link
            href="https://trailight.com"
            target="_blank"
            hrefLang="en-gb"
            rel="noopener noreferrer"
            className="underline"
            aria-label="Trailight"
          >
            Trailight
          </Link>
          .
          <br />
          After graduating with a 1st level Masters Degree in Computer Science
          (Software Engineering) I didn&apos;t stop there.
          <br />I continued to enhance my skillset with new and exiting
          technologies, such as:
        </CardContent>
        <CardContent>
          <div className="flex flex-row">
            <div>
              {programmingLanguages.map((language) => (
                <Badge className="mr-1" key={`pl-${language.name}`}>
                  {language.name}
                </Badge>
              ))}
            </div>
            <div>
              {javascriptFrameworks.map((language) => (
                <Badge className="mr-1" key={`js-${language.name}`}>
                  {language.name}
                </Badge>
              ))}
            </div>
            <div>
              {devops.map((devops) => (
                <Badge className="mr-1" key={`do-${devops.name}`}>
                  {devops.name}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardContent>
          If you would like to know more details about me or my journey, feel
          free to download my CV below!
        </CardContent>
        <CardFooter className="items-center flex flex-col">
          <Link
            href="https://drive.google.com/file/d/1ODzwaJzeMN0eubRasFh1VPvyn0BUSmXq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row"
          >
            <Button className="cursor-pointer">
              <FileText className="mr-3" />
              Resume
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
};
