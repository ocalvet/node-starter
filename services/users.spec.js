import { findOne, findAll, create, update, deleteData } from './users'; 
import UnknownError from '../errors/UnknownError';
import ModelNotFoundError from '../errors/ModelNotFoundError';


describe('users.findOne', function() {
  it('throws an exception', function() {
    expect(() => findOne('123')).toThrow();
  });
  it('throws a specific exception', () => {
    expect(() => findOne('324')).toThrow(ModelNotFoundError);
  });
});

describe('findAll', () => {
  it('returns all users', () => {
    const allUsers = findAll();
    expect(allUsers).toEqual([
      {
        id: 1,
        name: 'test'
      },
      {
        id: 2,
        name: 'second'
      }
    ]);
  });
});

describe('users.create', () => {
  it('returns the created user with an id of 11', () => {
    const createdUser = create({ name: 'test user' });
    expect(createdUser).toEqual({
      id: 11,
      name: 'test user'
    });
  });
});

describe('users.update', () => {
  it('throws an unknown error with the message ""', () => {
    expect(() => update()).toThrow(UnknownError);
    expect(() => update()).toThrow('Testing errors!!!');
  });
});

describe('users.delete', () => {
  it('returns the id of the deleted user', () => {
    const deletedId = deleteData('123456');
    expect(deletedId).toEqual('123456');
  });
});
