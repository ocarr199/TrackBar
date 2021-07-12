import followers from "./followers.reducer";


describe('FOLLOWERS REDUCER TESTS', () => {

    test('SET_FOLLOWERS', () => {
        const action = {
            type: 'SET_FOLLOWERS', 
            payload: 
                    ['prof1', 'prof2']
                    
                }
                const state = [];
                expect(followers(state, action)).toEqual(['prof1', 'prof2'])
    })

})