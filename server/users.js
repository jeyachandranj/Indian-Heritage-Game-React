const users = [];

export const addUser = ({ id, name, room, myCards }) => {
  const numberOfUsersInRoom = users.filter((user) => user.room === room).length;
  if (numberOfUsersInRoom === 2) return { error: "Room full" };

  const newUser = { id, name, room, myCards };
  users.push(newUser);
  return { newUser };
};

export const removeUser = (id) => {
  const removeIndex = users.findIndex((user) => user.id === id);

  if (removeIndex !== -1) return users.splice(removeIndex, 1)[0];
};

export const getUser = (id) => {
  return users.find((user) => user.id === id);
};

export const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};
