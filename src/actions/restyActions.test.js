//TODO: add an action to set the values of the request from the form into state (input- url, method, body)

//TODO: add an action to set the response from the request into state- test is incomplete

describe.skip('resty actions', () => {
  it('creates a set request action', () => {
    const action = setRequest({
      request: {
    });
    expect(action).toEqual({
      type: SET_REQUEST,
      payload: [{
        request: {
        }
    }];
    });
  });  
})
