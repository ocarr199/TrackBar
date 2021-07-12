import profileReducer from "./profile.reducer";

describe('USER REDUCER TESTS', () => {

    test('SET_PROFILE', () => {
        const action = {
            type: 'SET_PROFILE', 
            payload: 
                    ['prof1', 'prof2']
                    
                }
                const state = {};
                expect(profileReducer(state, action)).toEqual('prof1')
    })

})