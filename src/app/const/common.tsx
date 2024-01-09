"use client";

import { faker } from "@faker-js/faker";

export const me = {
  id: "shcho",
  nickname: "shcho",
  image: "",
};

export const photo = {
  imageId: 1,
  link: faker.image.urlLoremFlickr(),
  Post: {
    content: faker.lorem.text(),
  },
};
