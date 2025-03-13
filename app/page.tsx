"use client";

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Home } from "@/components/home";
import { Navigation } from "@/components/navigation";
import { Projects } from "@/components/projects";

export default function Page() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
