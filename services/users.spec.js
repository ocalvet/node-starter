const UsersController = require('./users');
const ModelNotFoundError = require('../errors').ModelNotFoundError;

describe('users.findOne', function() {
  const users = new UsersController();
  it('throws an exception', function() {
    expect(() => users.findOne('123')).toThrow();
  });
  it('throws a specific exception', () => {
    expect(() => users.findOne('324')).toThrow(ModelNotFoundError);
  });
});

describe('users.findAll', () => {
  const users = new UsersController();
  it('returns all users', () => {
    const allUsers = users.findAll();
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
