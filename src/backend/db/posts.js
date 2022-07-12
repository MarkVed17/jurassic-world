import { v4 as uuid } from "uuid";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  // Post 1
  {
    _id: uuid(),
    content: "I am one mad dino head.",
    likes: {
      likeCount: 9,
      likedBy: [
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
      dislikedBy: [],
    },
    firstName: "Vedant",
    lastName: "Lahane",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
    username: "vedantlahane",
    createdAt: new Date("May 24, 2022"),
    updatedAt: new Date("May 24, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
        text: "I am a Paleontologist.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. Ellen",
        lastName: "Sattler",
        username: "ellie",
        avatarURL:
          "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
        text: "So am I.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
        text: "You know, at times like this one feels, well, perhaps extinct animals should be left extinct.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
        text: "Blue.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
        text: "You know its all fun watching it on the outside.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
        text: "Do you think the park was a bad idea?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dennis",
        lastName: "Nedry",
        username: "programmer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/2251865948/image_400x400.jpg",
        text: "You are a programmer too.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Henry",
        lastName: "Wu",
        username: "inGeneer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1491820732418035718/MqsUQxai_400x400.jpg",
        text: "I hope you loved the Indominus, Indoraptor & Scorpius.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Maisie",
        lastName: "Lockwood",
        username: "iammaisie",
        avatarURL:
          "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
        text: "Me too.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 1
  // Post 2
  {
    _id: uuid(),
    content:
      "Jurassic Park was all good until 2022... God, I regret watching the Dominion.",
    likes: {
      likeCount: 9,
      likedBy: [
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
      dislikedBy: [],
    },
    firstName: "Vedant",
    lastName: "Lahane",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
    username: "vedantlahane",
    createdAt: new Date("May 28, 2022"),
    updatedAt: new Date("May 28, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
        text: "I know, I know.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. Ellen",
        lastName: "Sattler",
        username: "ellie",
        avatarURL:
          "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
        text: "I agree!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
        text: "I'm not suprised.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
        text: "I saved baby blue.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
        text: "I'm really sorry.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
        text: "Do you think the park was a bad idea?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dennis",
        lastName: "Nedry",
        username: "programmer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/2251865948/image_400x400.jpg",
        text: "You are a programmer too.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Henry",
        lastName: "Wu",
        username: "inGeneer",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1491820732418035718/MqsUQxai_400x400.jpg",
        text: "I hope you atleast loved the Giga.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Maisie",
        lastName: "Lockwood",
        username: "iammaisie",
        avatarURL:
          "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
        text: "I am a clone.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 2
  // Post 3
  {
    _id: uuid(),
    content: "I hate computers.",
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    firstName: "Dr. Alan",
    lastName: "Grant",
    avatarURL:
      "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
    username: "Dr.Grant",
    createdAt: new Date("May 30, 2022"),
    updatedAt: new Date("May 30, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Dr. Ellen",
        lastName: "Sattler",
        username: "ellie",
        avatarURL:
          "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
        text: "The feeling's mutual.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
        text: "Well, this obviously isn't handwritten Alan.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 3
  // Post 4
  {
    _id: uuid(),
    content:
      "God creates dinosaurs. God destroys dinosaurs. God creates man. Man destroys God. Man creates dinosaurs.",
    likes: {
      likeCount: 3,
      likedBy: [
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
      ],
      dislikedBy: [],
    },
    firstName: "Dr. Ian",
    lastName: "Malcolm",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
    username: "malcolm",
    createdAt: new Date("June 1, 2022"),
    updatedAt: new Date("June 1, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
        text: "That was a good one, Malcolm.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. Ellen",
        lastName: "Sattler",
        username: "ellie",
        avatarURL:
          "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
        text: "Dinosaurs eat man. Woman inherits the earth.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 4
  // Post 5
  {
    _id: uuid(),
    content:
      "We've been pre-booking tickets for months. The park needs a new attraction every few years in order to reinvigorate the public's interest. Kind of like the space program. Corporate felt genetic modification would up the wow factor.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Claire",
    lastName: "Dearing",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
    username: "iamclaire",
    createdAt: new Date("May 27, 2022"),
    updatedAt: new Date("May 27, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
        text: "They're dinosaurs. Wow enough?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
        text: "Not according to our focus groups. The Indominus Rex makes us relevant again.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
        text: "The Indominus Rex?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
        text: `We needed something scary and easy to pronounce. You should hear a four-year-old try to say "Archeaornithomimus."`,
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 5
  // Post 6
  {
    _id: uuid(),
    content: "Animals raised in isolation aren't always the most functional.",
    likes: {
      likeCount: 3,
      likedBy: [
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
      dislikedBy: [],
    },
    firstName: "Owen",
    lastName: "Grady",
    avatarURL:
      "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
    username: "raptorguy",
    createdAt: new Date("May 30, 2022"),
    updatedAt: new Date("May 30, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
        text: "Your Raptors are born in captivity.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
        text: "With siblings. They learn social skills. And I imprint on then when they're born. There's trust. The only positive relationship this animal has is with that crane. At least she knows that means food.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
        text: "So, she needs a friend. We should schedule play-dates? That sort of thing?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
        text: "Probably not a good idea.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 6
  // Post 7
  {
    _id: uuid(),
    content:
      "Hammond, after careful consideration, I've decided, not to endorse your park.",
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    firstName: "Dr. Alan",
    lastName: "Grant",
    avatarURL:
      "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
    username: "Dr.Grant",
    createdAt: new Date("June 4, 2022"),
    updatedAt: new Date("June 4, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
        text: "So have I.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 7
  // Post 8
  {
    _id: uuid(),
    content:
      "Nothing in Jurassic World is natural, we have always filled gaps in the genome with the DNA of other animals.",
    likes: {
      likeCount: 6,
      likedBy: [
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
      ],
      dislikedBy: [],
    },
    firstName: "Henry",
    lastName: "Wu",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1491820732418035718/MqsUQxai_400x400.jpg",
    username: "inGeneer",
    createdAt: new Date("June 2, 2022"),
    updatedAt: new Date("June 2, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
        text: "Kudos!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Maisie",
        lastName: "Lockwood",
        username: "iammaisie",
        avatarURL:
          "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
        text: "Oh, really? I didn't know.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 8
  // Post 9
  {
    _id: uuid(),
    content:
      "All major theme parks have delays. When they opened Disneyland in 1956, nothing worked!",
    likes: {
      likeCount: 5,
      likedBy: [
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
      ],
      dislikedBy: [],
    },
    firstName: "Dr. John",
    lastName: "Hammond",
    avatarURL:
      "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
    username: "founder",
    createdAt: new Date("June 5, 2022"),
    updatedAt: new Date("June 5, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
        text: "Yeah, but, John, if The Pirates of the Caribbean breaks down, the pirates don't eat the tourists.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 9
  // Post 10
  {
    _id: uuid(),
    content: "Blue is alive.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Owen",
          lastName: "Grady",
          username: "raptorguy",
          avatarURL:
            "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Claire",
    lastName: "Dearing",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
    username: "iamclaire",
    createdAt: new Date("June 9, 2022"),
    updatedAt: new Date("June 9, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Maisie",
        lastName: "Lockwood",
        username: "iammaisie",
        avatarURL:
          "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
        text: "Thank God.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
        text: "Jesus, Claire!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
        text: "You raised her, Owen. Come on, you're a better man than you think you are.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
        text: "You should write fortune cookies.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 10
  // Post 11
  {
    _id: uuid(),
    content:
      "Change is like death. You don't know what it looks like till you're standing at the gates.",
    likes: {
      likeCount: 2,
      likedBy: [
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
      ],
      dislikedBy: [],
    },
    firstName: "Dr. Ian",
    lastName: "Malcolm",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
    username: "malcolm",
    createdAt: new Date("June 5, 2022"),
    updatedAt: new Date("June 5, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
        text: "I always hate to agree with you. But this...",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. Ellen",
        lastName: "Sattler",
        username: "ellie",
        avatarURL:
          "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
        text: "That's true.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 11
  // Post 12
  {
    _id: uuid(),
    content:
      "I am totally unappreciated in my time. You can run this whole park from this room with minimal staff for up to 3 days. You think that kind of automation is easy? Or cheap? You know anybody who can network 8 connection machines and debug 2 million lines of code for what I bid for this job? Because if he can I'd like to see him try.",
    likes: {
      likeCount: 3,
      likedBy: [
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
      ],
      dislikedBy: [],
    },
    firstName: "Dennis",
    lastName: "Nedry",
    avatarURL:
      "https://pbs.twimg.com/profile_images/2251865948/image_400x400.jpg",
    username: "programmer",
    createdAt: new Date("June 7, 2022"),
    updatedAt: new Date("June 7, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
        text: "I'm sorry about your financial problems, Dennis, I really am, but they are your problems..",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
        text: "I hate computers.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 12
  // Post 13
  {
    _id: uuid(),
    content: "Blue had a baby. That's impossible.",
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    firstName: "Maisie",
    lastName: "Lockwood",
    avatarURL:
      "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
    username: "iammaisie",
    createdAt: new Date("June 8, 2022"),
    updatedAt: new Date("June 8, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
        text: "Isn't she lovely.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
        text: "Yes, a baby blue.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 13
  // Post 14
  {
    _id: uuid(),
    content: "I have to fix a terrible mistake that I've made.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Henry",
    lastName: "Wu",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1491820732418035718/MqsUQxai_400x400.jpg",
    username: "inGeneer",
    createdAt: new Date("June 15, 2022"),
    updatedAt: new Date("June 15, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Owen",
        lastName: "Grady",
        username: "raptorguy",
        avatarURL:
          "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
        text: "Too late buddy.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Maisie",
        lastName: "Lockwood",
        username: "iammaisie",
        avatarURL:
          "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
        text: "The stage is all yours.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Claire",
        lastName: "Dearing",
        username: "iamclaire",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1028888448437026816/KSqyz1DU_400x400.jpg",
        text: "Not gonna fall into this trap again. You create monsters.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 14
  // Post 15
  {
    _id: uuid(),
    content: "So, what are you thinking?",
    likes: {
      likeCount: 2,
      likedBy: [
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
          firstName: "Dr. Ian",
          lastName: "Malcolm",
          username: "malcolm",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Dr. Ellen",
    lastName: "Sattler",
    avatarURL:
      "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
    username: "ellie",
    createdAt: new Date("June 10, 2022"),
    updatedAt: new Date("June 10, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
        text: "We're out of a job.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },

      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
        text: "Don't you mean extinct?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 15
  // Post 16
  {
    _id: uuid(),
    content:
      "Condors are on the verge of extinction! If I were to create a flock of condors on this island, you wouldn't have anything to say!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Dr. John",
    lastName: "Hammond",
    avatarURL:
      "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
    username: "founder",
    createdAt: new Date("June 12, 2022"),
    updatedAt: new Date("June 12, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
        text: "Condors are less scary.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
        text: "This isn't some species that was obliterated by deforestation or the building of a dam. Dinosaurs had their shot and nature selected them for extinction!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 16
  // Post 17
  {
    _id: uuid(),
    content:
      "Don't worry. It's gonna be just like taking a walk in the woods... 65 million years ago.",
    likes: {
      likeCount: 3,
      likedBy: [
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
      dislikedBy: [],
    },
    firstName: "Owen",
    lastName: "Grady",
    avatarURL:
      "https://pbs.twimg.com/profile_images/623457529893261313/U_gGfcfZ_400x400.jpg",
    username: "raptorguy",
    createdAt: new Date("June 13, 2022"),
    updatedAt: new Date("June 13, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
        text: "Been there, Done that.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. Ellen",
        lastName: "Sattler",
        username: "ellie",
        avatarURL:
          "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
        text: "PRO tip: Ooh, ah, that's how it always starts. But then later there's running and screaming.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
        text: "This is not funny.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 17
  // Post 18
  {
    _id: uuid(),
    content: "Uh uh uh! You didn't say the magic word! Uh uh uh! Uh uh uh!",
    likes: {
      likeCount: 3,
      likedBy: [
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
      dislikedBy: [],
    },
    firstName: "Dennis",
    lastName: "Nedry",
    avatarURL:
      "https://pbs.twimg.com/profile_images/2251865948/image_400x400.jpg",
    username: "programmer",
    createdAt: new Date("June 20, 2022"),
    updatedAt: new Date("June 20, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
        text: "LOL",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
        text: "Shut up!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
        text: "This is hilarious.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 18
  // Post 19
  {
    _id: uuid(),
    content: "These dinos were less scary in my books. But now...",
    likes: {
      likeCount: 5,
      likedBy: [
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
      ],
      dislikedBy: [],
    },
    firstName: "Maisie",
    lastName: "Lockwood",
    avatarURL:
      "https://i.pinimg.com/736x/84/fb/90/84fb90a4a3790c9413e1adc4ad36ae10.jpg",
    username: "iammaisie",
    createdAt: new Date("June 14, 2022"),
    updatedAt: new Date("June 14, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
        text: "LOL",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. John",
        lastName: "Hammond",
        username: "founder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/804113657613402115/qCpyaK63_400x400.jpg",
        text: "Sorry Maisie. I never imagined a place like this.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
        text: "Appears you never going back to reading.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 19
  // Post 20
  {
    _id: uuid(),
    content: "Doctor Grant's not machine compatible.",
    likes: {
      likeCount: 2,
      likedBy: [
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
          firstName: "Dr. Ian",
          lastName: "Malcolm",
          username: "malcolm",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Dr. Ellen",
    lastName: "Sattler",
    avatarURL:
      "https://pbs.twimg.com/profile_images/3482028691/bffa3c992bade83644dfdc6882d71685_400x400.jpeg",
    username: "ellie",
    createdAt: new Date("June 30, 2022"),
    updatedAt: new Date("June 30, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Dr. Alan",
        lastName: "Grant",
        username: "Dr.Grant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/906797609876156417/Ok4QhSR0_400x400.jpg",
        text: "Stop endorsing this now.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Dr. Ian",
        lastName: "Malcolm",
        username: "malcolm",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1281764003442720775/Th9ohDVK_400x400.jpg",
        text: "Uncle Grant xD",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 20
];
