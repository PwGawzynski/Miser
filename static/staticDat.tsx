import { Offer } from "../src/Components/Pages/Good";

export const offers = [

  {
    id: 1,
    name: "Nike Shoes",
    where: "nike.com",
    points: 987,
    price: 900.99,
    ship: "free",
    discount: "2500zł (-64%)",
    photo: require("./images/nike.jpg"),
  },
  {
    id: 2,
    name: "Apple MacBook Air",
    where: "apple.com",
    points: 1203,
    price: 5099.99,
    ship: "",
    discount: "6500zł (-21%)",
    photo: require("./images/mac.jpg"),
  },
  {
    id: 3,
    name: "Bourbon Four Roses",
    where: "Biedronka",
    points: -43,
    price: 120.00,
    ship: "500zł",
    discount: "129zł (-7%)",
    photo: require("./images/bourbon.jpg"),
  },
  {
    id: 4,
    name: "Book for a tree",
    where: "Tree Foundation",
    points: 433,
    price: "free",
    ship: "",
    discount: "",
    photo: require("./images/tree.jpg"),
  },

] as Array<Offer>;


export const offerNew = [
  {
    id: 1,
    name: "Bourbon Four Roses",
    where: "Biedronka",
    points: -43,
    price: 120.00,
    ship: "500zł",
    discount: "129zł (-7%)",
    photo: require("./images/bourbon.jpg"),
  },
  {
    id: 2,
    name: "Book for a tree",
    where: "Tree Foundation",
    points: 433,
    price: "free",
    ship: "",
    discount: "",
    photo: require("./images/tree.jpg"),
  },
  {
    id: 3,
    name: "Apple MacBook Air",
    where: "apple.com",
    points: 1203,
    price: 5099.99,
    ship: "",
    discount: "6500zł (-21%)",
    photo: require("./images/mac.jpg"),
  },
  {
    id: 4,
    name: "Nike Shoes",
    where: "nike.com",
    points: 987,
    price: 900.99,
    ship: "free",
    discount: "2500zł (-64%)",
    photo: require("./images/nike.jpg"),
  },
] as Array<Offer>;



export const offerTheBest = [
  {
    id: 1,
    name: "Apple MacBook Air",
    where: "apple.com",
    points: 1203,
    price: 5099.99,
    ship: "",
    discount: "6500zł (-21%)",
    photo: require("./images/mac.jpg"),
  },
  {
    id: 2,
    name: "Nike Shoes",
    where: "nike.com",
    points: 987,
    price: 900.99,
    ship: "free",
    discount: "2500zł (-64%)",
    photo: require("./images/nike.jpg"),
  },
  {
    id: 3,
    name: "Book for a tree",
    where: "Tree Foundation",
    points: 433,
    price: "free",
    ship: "",
    discount: "",
    photo: require("./images/tree.jpg"),
  },
  {
    id: 4,
    name: "Bourbon Four Roses",
    where: "Biedronka",
    points: -43,
    price: 120.00,
    ship: "500zł",
    discount: "129zł (-7%)",
    photo: require("./images/bourbon.jpg"),
  },
] as Array<Offer>;
