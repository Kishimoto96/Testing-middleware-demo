
const authorizationMiddleware = require('../authorizationMiddleware');

describe('Authorization middleware',() => {
    let mockRequest = {};
    let mockResponse = {json : jest.fn()}
    let mockNext = jest.fn();

    beforeEach (() =>{
        mockRequest = {};
        mockResponse = {json: jest.fn() }
    })
    test('without headers',async() => {
        const expectedResponse = {"error":"Missing JWT token from the 'Authorization' header"}
        authorizationMiddleware(mockRequest,mockResponse,mockNext);
        expect(mockResponse.json).toBeCalledWith(expectedResponse)
    })
    test('authorization header',async() => {
        const expectedResponse = {"error":"Missing JWT token from the 'Authorization' header"}
        mockRequest = {
            headers: {}
        }
        authorizationMiddleware(mockRequest,mockResponse,mockNext);
        expect(mockResponse.json).toBeCalledWith(expectedResponse)
    })
    test('with authorization header',async() => {
        mockRequest = {
            headers: {'authorization':'Bearer abcdef'}
        }
        authorizationMiddleware(mockRequest,mockResponse,mockNext);
        expect(mockNext).toBeCalledTimes(1)
    }) 
})
