import postsReducer from './posts.reducer'


describe('USER REDUCER TESTS', () => {

    test('SET_POSTS', () => {
        const action = {
            type: 'SET_POSTS', 
            payload: 
                    ['posts']
                    
                }
                const state = [];
                expect(postsReducer(state, action)).toEqual(['posts'])
    })

    test('SET_USER_POSTS', () => {
        const action = {
            type: 'SET_USER_POSTS', 
            payload: ['user posts']
            
        }
                
                const state = [];
                expect(postsReducer(state, action)).toEqual(['user posts'])
    })

})