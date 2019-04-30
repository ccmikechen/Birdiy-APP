const userUpdater = (user, changes) => {
  Object.keys(changes).forEach((field) => {
    user.setValue(changes[field], field);
  });
};

export default userUpdater;
