const users = [];

<<<<<<< HEAD
=======

>>>>>>> d7a8aab11fb8694208a7f8eef1a72d356e799c36
// Join user to a game
function userJoin(id, username, room) {
  const user = { id, username, room };

  users.push(user);

  return user;
}

// Get current   user
function getCurrentUser(id) {
  return users.find((user) => user.id === id);
}

// User leaves game
function userLeave(id) {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(room) {
  return users.filter((user) => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};
