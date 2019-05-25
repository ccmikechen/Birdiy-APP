import { AsyncStorage } from 'react-native';
import { findIndex } from 'lodash';

const ITEM_NAME = 'cartProjects';

export default class Cart {
  reload = async () => {
    const projectsJson = await AsyncStorage.getItem(ITEM_NAME);

    if (!projectsJson) {
      await this.initialize();
    } else {
      this.projects = JSON.parse(projectsJson);
    }

    return this.projects;
  };

  update = async (newProjects) => {
    const str = JSON.stringify(newProjects);
    await AsyncStorage.setItem(ITEM_NAME, str);
    this.projects = newProjects;

    return this.projects;
  };

  updateProject = async (newProject) => {
    const newProjects = this.projects.map((project) => {
      if (project.id === newProject.id) {
        return newProject;
      }
      return project;
    });
    await this.update(newProjects);

    return newProjects;
  };

  deleteProject = async (projectId) => {
    const newProjects = this.projects.filter(project => (
      project.id !== projectId
    ));

    await this.update(newProjects);
    return this.projects;
  };

  addMaterial = async (project, material) => {
    let cartProject = this.getProject(project.id);

    if (!cartProject) {
      cartProject = await this.addProject(project);
    }

    const materialIndex = findIndex(cartProject.materials, ({ id }) => (
      id === material.id
    ));

    if (materialIndex !== -1) {
      return;
    }

    cartProject.materials.push({
      id: material.id,
      name: material.name,
      amountUnit: material.amountUnit,
      purchased: false,
    });
    await this.updateProject(cartProject);
  };

  deleteMaterial = async (projectId, materialId) => {
    const project = this.getProject(projectId);

    if (!project) {
      return this.projects;
    }

    const newMaterials = project.materials.filter(material => (
      material.id !== materialId
    ));

    if (newMaterials.length === 0) {
      await this.deleteProject(projectId);
    } else {
      await this.updateProject({ ...project, materials: newMaterials });
    }

    return this.projects;
  };

  addProject = async (project) => {
    const newProjects = [{
      id: project.id,
      name: project.name,
      materials: [],
    }, ...this.projects];
    await this.update(newProjects);

    return this.projects[0];
  };

  getProject = (projectId) => {
    const index = findIndex(this.projects, ({ id }) => (id === projectId));
    return index === -1 ? null : this.projects[index];
  };

  getProjects = () => this.projects;

  initialize = async () => {
    await AsyncStorage.setItem(ITEM_NAME, '[]');
    this.projects = [];
  };
}
