const helloHandler = require('../api/hello'); 

describe('helloHandler', () => {
    it('should return the correct response', async () => {
       
        const mockRequest = {}; 
        const mockContext = {}; 

        const response = await helloHandler(mockRequest, mockContext);

        expect(response).toEqual({
            body: 'Hello NOOOOO Julia here!'
        });
    });
});