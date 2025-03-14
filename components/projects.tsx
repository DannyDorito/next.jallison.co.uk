"use client";

import { Project, projects } from "@/data/Projects";
import {
  Card,
  CardContent,
  CardDescription,
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
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      <div>
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
                <div className="p-1">
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={project.image}
                        alt={project.name}
                        width="500"
                        className="pb-3"
                      />
                      <div className="flex justify-center pb-3">
                        <Link
                          key={`project-link-${index}`}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="secondary"
                            className="cursor-pointer"
                          >
                            View {project.buttonText}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
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
