const projectUpdater = (project, changes) => {
  Object.keys(changes).forEach((field) => {
    project.setValue(changes[field], field);
  });
};

export default projectUpdater;
