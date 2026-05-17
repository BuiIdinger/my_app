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
    price: -67,
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
    price: -67,
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
];

export const products = computed(() => {
  return internal_prods;
});