import UnknownError from '../errors/UnknownError';
import ModelNotFoundError from '../errors/ModelNotFoundError';

export function findOne(id) {
    throw new ModelNotFoundError('Error');
  };
export function findAll() {
    return [{ id: 1, name: 'test' }, { id: 2, name: 'second' }];
  };
export function create(user) {
    return { ...user, id: 11 };
  };
export function update(id, user) {
    throw new UnknownError('Testing errors!!!');
  };

export function deleteData(id) {
    return id;
  };

