const giveExplorePosts = (posts, most) => {
  if (most === "Latest") {
    return [...posts].sort(
      (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
    );
  } else if (most === "Trending") {
    return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
  }
  
  return posts;
};

export { giveExplorePosts };
