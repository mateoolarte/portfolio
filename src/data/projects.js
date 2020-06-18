import iconServillantas from "../images/projects/icon-servillantas.png";
import bgServillantas from "../images/projects/bg-servillantas.png";

import iconEcoactua from "../images/projects/icon-ecoactua.svg";
import bgEcoactua from "../images/projects/bg-ecoactua.png";

import iconExpensify from "../images/projects/icon-expensify.svg";
import bgExpensify from "../images/projects/bg-expensify.jpg";

const items = [
  {
    id: 1,
    name: "Servillantas",
    icon: iconServillantas,
    bgImage: bgServillantas,
    date: "2020",
    role: "Full stack developer",
    description:
      "Web application where you can search, list, manage products through admin panel and contact an adviser.",
    link: "https://servillantasla57.com/",
  },
  {
    id: 2,
    name: "Ecoactua",
    icon: iconEcoactua,
    bgImage: bgEcoactua,
    date: "2019",
    role: "Creator / Developer",
    description:
      "Web application to report environmental issues in your city. Solved by local authorities.",
    link: "http://ecoactua.herokuapp.com/#/",
  },
  {
    id: 3,
    name: "Expensify",
    icon: iconExpensify,
    bgImage: bgExpensify,
    date: "2018",
    role: "Creator / Developer",
    description:
      "Web application to track personal expenses, with graphs and categories.",
    link: "https://expensify-rails.herokuapp.com/",
  },
];

export default items;