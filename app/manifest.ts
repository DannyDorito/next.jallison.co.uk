import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "John Allison's Portfolio",
    short_name: "John Allison",
    description: "MEng (Hons). MBCS. Software Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#232323",
    theme_color: "#DE5021",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

export const dynamic = "force-static";
