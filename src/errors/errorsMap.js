import * as general from './generalErrors';
import * as user from './userErrors';
import * as project from './projectErrors';
import * as post from './postErrors';

const errorsMap = {
  1: general.UnauthorizedError,
  2: general.PermissionDeniedError,
  3: general.RecordNotFoundError,
  4: general.InvalidCredentialError,
  5: general.BannedError,

  1001: user.CreateUserError,
  1002: user.UpdateUserError,

  2001: project.CreateProjectError,
  2002: project.UpdateProjectError,
  2003: project.DeleteProjectError,
  2004: project.PublishProjectError,
  2005: project.UnpublishProjectError,
  2006: project.TooManyDraftsError,

  3001: post.CreatePostError,
  3002: post.UpdatePostError,
  3003: post.DeletePostError,
};

export default errorsMap;
