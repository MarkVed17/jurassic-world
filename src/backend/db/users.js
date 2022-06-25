import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Vedant",
    lastName: "Lahane",
    username: "vedantlahane",
    avatar:
      "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
    bio: "Sometimes you gotta run before you can walk",
    website: "https://vedantlahane.netlify.app/",
    password: "vedant123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
