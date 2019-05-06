import ApiError from './ApiError';

export class PostError extends ApiError {}

export class CreatePostError extends PostError {
  constructor() {
    super(3001, 'Cannot create post');
  }
}

export class UpdatePostError extends PostError {
  constructor() {
    super(3002, 'Cannot update post');
  }
}

export class DeletePostError extends PostError {
  constructor() {
    super(3003, 'Cannot delete post');
  }
}
