import followReducer from './follow.reducer';


describe('FOLLOWING REDUCER TESTS', () => {

    test('SET_FOLLOWING', () => {
        const action = {
            type: 'SET_FOLLOWING', 
            payload: 
                    ['prof1', 'prof2']
                    
                }
                const state = [];
                expect(followReducer(state, action)).toEqual(['prof1', 'prof2'])
    })

})