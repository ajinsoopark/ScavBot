const capitalized = (string) => string.charAt(0).toUpperCase() + string.substring(1);

const removeTagFromName = (tag) => {
  const tagArr = tag.split('');
  tagArr.splice(-1, 5);
  const authorName = tagArr.join('');
  return authorName;
};

const invalidCommand = (message) => {
  const userTag = message.member.user.tag;
  const user = removeTagFromName(userTag);
  return `Invalid command dumb betch ${user}. Type ??help`;
};

module.exports = {
  capitalized,
  invalidCommand,
};
