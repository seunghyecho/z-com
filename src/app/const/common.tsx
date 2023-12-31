"use client";

import { faker } from "@faker-js/faker";
import DefaultProfile from "../../../public/assets/images/image_profile_00.svg";

export const me = {
  id: "shcho",
  nickname: "shcho",
  image: DefaultProfile,
};

export const photo = {
  imageId: 1,
  link: faker.image.urlLoremFlickr(),
  Post: {
    content: faker.lorem.text(),
  },
};
