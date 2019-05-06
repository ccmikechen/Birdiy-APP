import ApiError from './ApiError';

export class ProjectError extends ApiError {}

export class CreateProjectError extends ProjectError {
  constructor() {
    super(2001, 'Cannot create project');
  }
}

export class UpdateProjectError extends ProjectError {
  constructor() {
    super(2002, 'Cannot update project');
  }
}

export class DeleteProjectError extends ProjectError {
  constructor() {
    super(2003, 'Cannot delete project');
  }
}

export class PublishProjectError extends ProjectError {
  constructor() {
    super(2004, 'Cannot publish project');
  }
}

export class UnpublishProjectError extends ProjectError {
  constructor() {
    super(2005, 'Cannot unpublish project');
  }
}
