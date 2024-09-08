function getVoteCount(votes) {
  return votes.upvotes - votes.downvotes;
}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); // ➞ 13
console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); // ➞ -31
console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); //  ➞ 0
