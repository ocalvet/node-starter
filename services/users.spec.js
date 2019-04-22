const UsersController = require('./users');

describe('users.findOne', function() {
  const users = new UsersController();
  it('throws an exception', function() {
    expect(() => users.findOne('123')).toThrow();
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
