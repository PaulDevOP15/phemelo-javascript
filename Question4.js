console.log("Question 4");

const post = {
  username: "phemelo_codes",
  caption: "Learning JavaScript objects today.",
  likes: 12,
  comments: ["Nice!", "Keep it up.", "Thanks for sharing."],
  addLike() {
    this.likes += 1;
  },
};

const { username, caption } = post;

console.log("Destructured from post:");
console.log("  username:", username);
console.log("  caption:", caption);

console.log("\nLikes before addLike:", post.likes);
post.addLike();
post.addLike();
console.log("Likes after 2 addLike() calls:", post.likes);
