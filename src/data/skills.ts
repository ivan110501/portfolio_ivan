import { LinkType } from "../types/main";
import ApiImg from "../assets/pokemon.png";
import galleryImg from "./../assets/gallery.png";
import movieImg from "./../assets/movies.png";
import gameImg from "../assets/games.png";
import carImg from "../assets/scss.png";

export const vjezbeLinks: LinkType[] = [
  {
    label: "API use",
    href: "/API",
    description:
      "This application is a Pokemon Explore app developed using React, TypeScript, and external APIs. It provides users with a seamless interface to explore different pokemons and how they look. ",
    img: ApiImg,
  },

  {
    label: "Gallery - Fruits ",
    href: "/gallery",
    description:
      "This application is a simple Gallery app developed using React. It allows users to view gallery, zoom images, see color of the fruit and to delete the fruit from the gallery. The app provides a clean, smooth and user-friendly interface",
    img: galleryImg,
  },
  {
    label: "Movie Tabs ",
    href: "/tabs",
    description:
      "Small Web application that shows list of different movies sorted in tabs with details about choosen movie. It shows picture of actors that play in the movie, year of production and genre",
    img: movieImg,
  },
  {
    label: "Games Archive ",
    href: "/games",
    description:
      "In this section I made a Gallery of most popular Computer games that allows user to see all informations about that game in just one click",
    img: gameImg,
  },
  {
    label: "Cars SCSS",
    href: "/cars",
    description: "Here is example of using advanced features of SCSS",
    img: carImg,
  },
];
