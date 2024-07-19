import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fahad Munir",
    short_name: "fmunirdev",
    description: "About Fahad Munir",
    start_url: "/",
    display: "standalone",
    background_color: "#FDFFFC",
    theme_color: "#222733",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/x-icon"
      }
    ]
  };
}
