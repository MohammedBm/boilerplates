import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'abcd12312'
  };
  const state = authReducer({}, action);
  expect(state).toEqual({
    uid: 'abcd12312'
  });
});

test('should clear uid for login', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({
    uid: 'dummyUserId'
  }, action);
  expect(state).toEqual({});
});
