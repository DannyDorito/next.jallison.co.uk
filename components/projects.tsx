"use client";

import { Project, projects } from "@/data/Projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { LinkIcon } from "lucide-react";

export const Projects = () => {
  const [shuffledProjects, setShuffledProjects] = useState<Project[]>([]);

  const shuffle = (array: Project[]) => {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  useEffect(() => {
    const shuffled = shuffle(projects);
    setShuffledProjects(shuffled);
  }, []);

  return (
    <main
      id="projects"
      className="flex min-h-fit flex-col items-center p-24 overflow-hidden"
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-3">
        &lt;Projects&#47;&gt;
      </h1>
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pb-3">
        Here are some of my personal projects.
      </h2>
      <div className="w-full flex justify-center">
        <Carousel
          className="w-full max-w-xl"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {shuffledProjects.map((project, index) => (
              <CarouselItem key={index}>
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>
                      <Link
                        key={`project-link-${index}`}
                        href={project.url}
                        target="_blank"
                        hrefLang="en-gb"
                        rel="noopener noreferrer"
                        className="underline flex items-center"
                        aria-label={project.name}
                      >
                        <LinkIcon size={16} />
                        {project.name}
                      </Link>
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={project.image}
                      alt={project.name}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      placeholder="blur"
                      priority={true}
                    />
                  </CardContent>
                  <CardFooter className="items-center flex flex-col">
                    <Link
                      key={`project-link-${index}-all`}
                      href="https://github.com/DannyDorito"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label='GitHub'
                    >
                      <Button variant="secondary" className="cursor-pointer">
                        View All Projects
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
};
