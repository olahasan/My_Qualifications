function emotify(str) {
  const emoticons = {
    smile: ":D",
    grin: ":)",
    sad: ":(",
    mad: ":P",
  };

  return str.replace(/\bsmile|grin|sad\b/gi, (match) => emoticons[match]);
}

console.log(emotify("Make me smile")); // ➞ "Make me :D"
console.log(emotify("Make me grin")); // ➞ "Make me :)"
console.log(emotify("Make me sad")); // ➞ "Make me :("
