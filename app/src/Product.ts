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
    price: 6.00,
    name: "Bunny",
    description: "Meet Bunny, a super fluffy white plushie handmade by our team! Featuring a cute blue ribbon bow, it's budget-friendly, eco-friendly, and perfect to clip onto your school bag or keep on your desk.",
    headshot_image_url: "/products/miffy.png",
    legal_information: [
      "Warm hand wash or gentle machine wash in a laundry bag",
      "Do not tumble dry (or: Line dry in shade)",
      "Do not iron",
      "Do not dry-clean",
    ],
    slideshow_images_url: [
      "/products/miffy.png",
    ]
  },
  {
    id: 2,
    price: 6.00,
    name: "Cat",
    description: "Meet Cat, a super soft and fluffy pink and red plushie handmade by our team! Featuring a cute little golden collar bell, it's budget-friendly, eco-friendly, and perfect to keep on your desk or take with you anywhere.",
    headshot_image_url: "/products/cat.png",
    legal_information: [
      "Warm hand wash or gentle machine wash in a laundry bag",
      "Do not tumble dry (or: Line dry in shade)",
      "Do not iron",
      "Do not dry-clean",
    ],
    slideshow_images_url: [
      "/products/cat.png",
    ]
  },
  {
    id: 3,
    price: 5.50,
    name: "Koala",
    description: "Meet Pokey, an incredibly fluffy pink koala plushie handmade by our team! With its sweet rosy cheeks and big fuzzy nose, it's eco-friendly, budget-friendly, and ready to bring total comfort to your room.",
    headshot_image_url: "/products/pokey.png",
    legal_information: [
      "Warm hand wash or gentle machine wash in a laundry bag",
      "Do not tumble dry (or: Line dry in shade)",
      "Do not iron",
      "Do not dry-clean",
    ],
    slideshow_images_url: [
      "/products/pokey.png",
    ]
  },
  {
    id: 5,
    price: 4.50,
    name: "Seal",
    description: "Meet Seal, a super cute, spotted round plushie handmade by our team! With its sweet rosy cheeks and perfectly squishable shape, it's eco-friendly, budget-friendly, and the ultimate comfort companion for your desk or bed.",
    headshot_image_url: "/products/seal.png",
    legal_information: [
      "Warm hand wash or gentle machine wash in a laundry bag",
      "Do not tumble dry (or: Line dry in shade)",
      "Do not iron",
      "Do not dry-clean",
    ],
    slideshow_images_url: [
      "/products/seal.png",
    ]
  },
];

export const products = computed(() => {
  return internal_prods;
});