import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  // User 1
  {
    _id: uuid(),
    firstName: "Vedant",
    lastName: "Lahane",
    username: "vedantlahane",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
    bio: "Sometimes you gotta run before you can walk",
    website: "https://vedantlahane.netlify.app",
    following: [
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ellen",
        lastName: "Sattler",
        username: "ellie",
        avatarURL:
          "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dennis",
        lastName: "Nedry",
        username: "programmer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/2251865948/image_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Henry",
        lastName: "Wu",
        username: "inGeneer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1491820732418035718/MqsUQxai_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Maisie",
        lastName: "Lockwood",
        username: "iammaisie",
        avatarURL:
          "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
      },
    ],
    password: "vedant123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 1
  // User 2
  {
    _id: uuid(),
    firstName: "Dr. Alan",
    lastName: "Grant",
    username: "Dr.Grant",
    avatarURL:
      "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
    bio: `"Reverse Darwinism: Survival Of The Most Idiotic."`,
    website: "https://jurassicpark.fandom.com/wiki/Alan_Grant",
    following: [
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ellen",
        lastName: "Sattler",
        username: "ellie",
        avatarURL:
          "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Dr. Ellen",
        lastName: "Sattler",
        username: "ellie",
        avatarURL:
          "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Maisie",
        lastName: "Lockwood",
        username: "iammaisie",
        avatarURL:
          "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Henry",
        lastName: "Wu",
        username: "inGeneer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1491820732418035718/MqsUQxai_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "vedantlahane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
      },
    ],
    password: "alangrant123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 2
  // User 3
  {
    _id: uuid(),
    firstName: "Dr. Ellen",
    lastName: "Sattler",
    username: "ellie",
    avatarURL:
      "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
    bio: "We can make it if we run.",
    website: "https://jurassicpark.fandom.com/wiki/Ellie_Sattler",
    following: [
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Maisie",
        lastName: "Lockwood",
        username: "iammaisie",
        avatarURL:
          "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
      },
      {
        _id: uuid(),
        firstName: "Henry",
        lastName: "Wu",
        username: "inGeneer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1491820732418035718/MqsUQxai_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "vedantlahane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
      },
    ],
    password: "ellie123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 3
  // User 4
  {
    _id: uuid(),
    firstName: "Dr. Ian",
    lastName: "Malcolm",
    username: "malcolm",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
    bio: `"Life, uh, finds a way."`,
    website: "https://jurassicpark.fandom.com/wiki/Ian_Malcolm",
    following: [
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ellen",
        lastName: "Sattler",
        username: "ellie",
        avatarURL:
          "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Henry",
        lastName: "Wu",
        username: "inGeneer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1491820732418035718/MqsUQxai_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dennis",
        lastName: "Nedry",
        username: "programmer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/2251865948/image_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Maisie",
        lastName: "Lockwood",
        username: "iammaisie",
        avatarURL:
          "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
      },
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ellen",
        lastName: "Sattler",
        username: "ellie",
        avatarURL:
          "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
      },
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "vedantlahane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
      },
    ],
    password: "malcolm123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 4
  // User 5
  {
    _id: uuid(),
    firstName: "Owen",
    lastName: "Grady",
    username: "raptorguy",
    avatarURL:
      "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
    bio: `"I Always Come Back."`,
    website: "https://jurassicpark.fandom.com/wiki/Owen_Grady",
    following: [
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Maisie",
        lastName: "Lockwood",
        username: "iammaisie",
        avatarURL:
          "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ellen",
        lastName: "Sattler",
        username: "ellie",
        avatarURL:
          "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "vedantlahane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Maisie",
        lastName: "Lockwood",
        username: "iammaisie",
        avatarURL:
          "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "vedantlahane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
      },
    ],
    password: "owengrady123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 5
  // User 6
  {
    _id: uuid(),
    firstName: "Claire",
    lastName: "Dearing",
    username: "iamclaire",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
    bio: `"Welcome to Jurassic World!"`,
    website: "https://jurassicpark.fandom.com/wiki/Ian_Malcolm",
    following: [
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Maisie",
        lastName: "Lockwood",
        username: "iammaisie",
        avatarURL:
          "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
      },
      {
        _id: uuid(),
        firstName: "Henry",
        lastName: "Wu",
        username: "inGeneer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1491820732418035718/MqsUQxai_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ellen",
        lastName: "Sattler",
        username: "ellie",
        avatarURL:
          "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "vedantlahane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Maisie",
        lastName: "Lockwood",
        username: "iammaisie",
        avatarURL:
          "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
      },
      {
        _id: uuid(),
        firstName: "Henry",
        lastName: "Wu",
        username: "inGeneer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1491820732418035718/MqsUQxai_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "vedantlahane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
      },
    ],
    password: "claire123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 6
  // User 7
  {
    _id: uuid(),
    firstName: "Henry",
    lastName: "Wu",
    username: "inGeneer",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1491820732418035718/MqsUQxai_400x400.jpg",
    bio: `"You didn't ask for reality, you asked for more teeth."`,
    website: "https://jurassicpark.fandom.com/wiki/Henry_Wu",
    following: [
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Maisie",
        lastName: "Lockwood",
        username: "iammaisie",
        avatarURL:
          "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ellen",
        lastName: "Sattler",
        username: "ellie",
        avatarURL:
          "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dennis",
        lastName: "Nedry",
        username: "programmer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/2251865948/image_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Maisie",
        lastName: "Lockwood",
        username: "iammaisie",
        avatarURL:
          "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dennis",
        lastName: "Nedry",
        username: "programmer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/2251865948/image_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "vedantlahane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
      },
    ],
    password: "henry123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 7
  // User 8
  {
    _id: uuid(),
    firstName: "Dr. John",
    lastName: "Hammond",
    username: "founder",
    avatarURL:
      "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
    bio: `"Welcome to Jurassic Park!"`,
    website: "https://jurassicpark.fandom.com/wiki/John_Hammond",
    following: [
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ellen",
        lastName: "Sattler",
        username: "ellie",
        avatarURL:
          "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
      },
      {
        _id: uuid(),
        firstName: "Dennis",
        lastName: "Nedry",
        username: "programmer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/2251865948/image_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Henry",
        lastName: "Wu",
        username: "inGeneer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1491820732418035718/MqsUQxai_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Maisie",
        lastName: "Lockwood",
        username: "iammaisie",
        avatarURL:
          "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dennis",
        lastName: "Nedry",
        username: "programmer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/2251865948/image_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Henry",
        lastName: "Wu",
        username: "inGeneer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1491820732418035718/MqsUQxai_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ellen",
        lastName: "Sattler",
        username: "ellie",
        avatarURL:
          "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "vedantlahane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
      },
    ],
    password: "hammond123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 8
  // User 9
  {
    _id: uuid(),
    firstName: "Dennis",
    lastName: "Nedry",
    username: "programmer",
    avatarURL:
      "https://pbs.twimg.com/profile_images/2251865948/image_400x400.jpg",
    bio: `"No wonder you're extinct."`,
    website: "https://jurassicpark.fandom.com/wiki/Dennis_Nedry",
    following: [
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Henry",
        lastName: "Wu",
        username: "inGeneer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1491820732418035718/MqsUQxai_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Maisie",
        lastName: "Lockwood",
        username: "iammaisie",
        avatarURL:
          "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
      },
      {
        _id: uuid(),
        firstName: "Henry",
        lastName: "Wu",
        username: "inGeneer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1491820732418035718/MqsUQxai_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
      },
    ],
    password: "dennis123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 9
  // User 10
  {
    _id: uuid(),
    firstName: "Maisie",
    lastName: "Lockwood",
    username: "iammaisie",
    avatarURL:
      "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
    bio: "Isla Sorna & Isla Nublar. Visited none xD",
    website: "https://jurassicpark.fandom.com/wiki/Maisie_Lockwood",
    following: [
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dennis",
        lastName: "Nedry",
        username: "programmer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/2251865948/image_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Henry",
        lastName: "Wu",
        username: "inGeneer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1491820732418035718/MqsUQxai_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ellen",
        lastName: "Sattler",
        username: "ellie",
        avatarURL:
          "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Henry",
        lastName: "Wu",
        username: "inGeneer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1491820732418035718/MqsUQxai_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
      },
    ],
    password: "maisie123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 10
];
