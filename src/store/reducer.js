const INITIAL_STATE = {
    posts: [],
    post: [{
        title: 'Title here',
        id: 1,
        body: 'Body goes here'
    }]
};

 const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return {
                ...state,
                posts: state.posts.concat(action.posts)
            };
 

        case 'LOAD_POST':
            return {
                ...state,
                post: state.post.slice(1,1).concat(action.post)
            };
        
       

        default: return state;
    }
};

export default reducer;