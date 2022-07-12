import { giveFilteredFeed } from "./giveFilteredFeed";
import { giveSortedFeed } from "./giveSortedFeed";

const giveFeedPosts = (posts, following, currentUsername, sortBy) => {
  const filteredFeedPosts = giveFilteredFeed(
    posts,
    following,
    currentUsername
  );

  const sortedFeedPosts = giveSortedFeed(filteredFeedPosts, sortBy);

  return sortedFeedPosts; 
};

export { giveFeedPosts };
