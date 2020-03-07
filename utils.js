const capitalized = (string) => string.charAt(0).toUpperCase() + string.substring(1);

const invalidCommand = (message) => {
  const userTag = message.member.user.tag;
  return `Invalid command dumb betch ${userTag}. Type ??help`;
};

module.exports = {
  capitalized,
  invalidCommand,
};
