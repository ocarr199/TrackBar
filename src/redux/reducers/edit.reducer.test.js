import editPost from './edit.reducer';

describe('EDIT REDUCER TESTS', () => {

    test('SET_EDIT_POST', () => {
        const action = {
            type: 'SET_EDIT_POST', 
            payload: 
                    ['post1', 'post2']
                    
                }
                const state = [];
                expect(editPost(state, action)).toEqual('post1')
    })

    // test('EDIT_ONCHANGE', () => {
    //     const action = {
    //         type: 'EDIT_ONCHANGE', 
    //         payload: 
    //                 {key: value}
                    
    //             }
    //             const state = {};
    //             expect(editPost(state, action)).toEqual({...state, key: 'value'})
    // })
 
})