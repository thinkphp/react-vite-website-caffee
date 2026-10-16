import images from "./images";
const coffee = [
  {
    title: "Coffee Latte",
    price: "Rp 20.000,00",
    tags: "Espresso | Milk | Sugar",
  },
  {
    title: "Coffee Latte Super",
    price: "Rp 25.000,00",
    tags: "2 Shot of Espresso | Milk | Sugar ",
  },
  {
    title: "Cappuccino",
    price: "Rp 20.000,00",
    tags: "Espresso | Milk ",
  },
  {
    title: "Mochaccino",
    price: "Rp 23.000,00",
    tags: "Espresso | Milk | Chocolate",
  },
  {
    title: "Americano",
    price: "Rp 18.000,00",
    tags: "Espresso",
  },
];

const tea = [
  {
    title: "Jasmine Tea",
    price: "Rp 18.000,00",
    tags: "Tea | Jasmine | Sugar",
  },
  {
    title: "Lychee Tea",
    price: "Rp 20.000,00",
    tags: "Black Tea | Lychee | Sugar ",
  },
  {
    title: "Peach Tea",
    price: "Rp 20.000,00",
    tags: "Black Tea | Peach  ",
  },
  {
    title: "Matcha",
    price: "Rp 25.000,00",
    tags: "Ground Green Tea Powder",
  },
  {
    title: "Ocha",
    price: "Rp 15.000,00",
    tags: "Green Tea",
  },
];

const food = [
  {
    title: "Indomie Goreng/Kuah",
    price: "Rp 8.000,00",
    tags: "Indomie",
  },
  {
    title: "Indomie Goreng/Kuah + Telur",
    price: "Rp 13.000,00",
    tags: "Indomie | Telur",
  },
  {
    title: "Indomie Goreng/Kuah Jumbo",
    price: "Rp 10.000,00",
    tags: "Indomie | Jumbo",
  },
  {
    title: "Indomie Goreng/Kuah Jumbo + Telur",
    price: "Rp 15.000,00",
    tags: "Indomie | Jumbo",
  },
  {
    title: "Indomie Spesial",
    price: "Rp 18.000,00",
    tags: "Indomie | Telur | Sosis",
  },
];

const snack = [
  {
    title: "French Fries",
    price: "Rp 20.000,00",
    tags: "Potato | Fry",
  },
  {
    title: "Curly Fries",
    price: "Rp 22.000,00",
    tags: "Potato | Fry",
  },
  {
    title: "Chicken Karage",
    price: "Rp 30.000,00",
    tags: "Chicken | Fry",
  },
  {
    title: "French Fries + Chicken Karage",
    price: "Rp 23.000,00",
    tags: "Potato | Chicken | Fry | Half of Each",
  },
  {
    title: "Curly Fries + Chicken Karage",
    price: "Rp 25.000,00",
    tags: "Potato | Chicken | Fry | Half of Each",
  },
];

const other = [
  {
    title: "Coca Cola",
    price: "Rp 10.000,00",
    tags: "Soda",
  },
  {
    title: "Sprite",
    price: "Rp 10.000,00",
    tags: "Soda",
  },
  {
    title: "Fanta",
    price: "Rp 10.000,00",
    tags: "Soda",
  },
  {
    title: "Badak",
    price: "Rp 15.000,00",
    tags: "Soda",
  },
  {
    title: "Mineral Water",
    price: "Rp 5.000,00",
    tags: "Water",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Outstanding Chef",
    subtitle:
      "Recognizes exceptional culinary creativity, skill, and dedication to delivering unforgettable dining experiences.",
  },
  {
    imgUrl: images.award01,
    title: "Excellence in Hospitality",
    subtitle:
      "Honors outstanding service and a welcoming atmosphere that makes every guest feel at home.",
  },
  {
    imgUrl: images.award05,
    title: "Best Community Café",
    subtitle:
      "Celebrates a café's positive impact on its local community through engagement, events, and support.",
  },
  {
    imgUrl: images.award03,
    title: "Sustainability Leadership",
    subtitle:
      "Acknowledges commitment to eco-friendly practices, from sourcing ingredients responsibly to reducing waste.",
  },
];

export default { awards, coffee, tea, food, snack, other };
