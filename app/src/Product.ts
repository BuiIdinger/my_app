import { computed } from "vue";

export interface Product {
  id: number,
  price: number,
  name: string,
  description: string,
  headshot_image_url: string,
  legal_information: string[],
  slideshow_images_url: string[],
}

const internal_prods: Product[] = [
  {
    id: 1,
    price: 6769,
    name: "Miffy",
    description: "Miffy is the softest, most cudeable companianl ",
    headshot_image_url: "/products/miffy.png",
    legal_information: [
      "Hand-wash only",
      "Fragile: handle with care",
    ],
    slideshow_images_url: [
      "/products/miffy.png",
    ]
  },
  {
    id: 2,
    price: 6769,
    name: "Cat",
    description: "Cat is the softest, most cuteable",
    headshot_image_url: "/products/cat.png",
    legal_information: [
      "Hand-wash only",
      "Fragile: handle with care",
    ],
    slideshow_images_url: [
      "/products/cat.png",
    ]
  },
  {
    id: 3,
    price: 6769,
    name: "Pokey",
    description: ";jqwrh ;uowe hu;wqh outhou;wq thou;qwt wq",
    headshot_image_url: "/products/pokey.png",
    legal_information: [
      "Hand-wash only",
      "Fragile: handle with care",
    ],
    slideshow_images_url: [
      "/products/pokey.png",
    ]
  },
  {
    id: 4,
    price: 6769,
    name: "Teddy",
    description: ";jqwrh;uowehu;wqhouthou;wqthou;qwtwq",
    headshot_image_url: "/products/teddy.png",
    legal_information: [
      "Hand-wash only",
      "Fragile: handle with care",
    ],
    slideshow_images_url: [
      "/products/teddy.png",
    ]
  },
  {
    id: 5,
    price: 6769,
    name: "LogRoll Bruh",
    description: ";jqwrh;uowehu;wqhouthou;wqthou;qwtwq",
    headshot_image_url: "/products/log_roll.png",
    legal_information: [
      "Hand-wash only",
      "Fragile: handle with care",
    ],
    slideshow_images_url: [
      "/products/log_roll.png",
    ]
  },
];

export const products = computed(() => {
  return internal_prods;
});