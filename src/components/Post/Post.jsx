import React , { useEffect }from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import './Post.css'
function Post () {
      const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_POSTS' });
  }, [dispatch]);
        const posts = useSelector(store => store.posts);
console.log(posts)
    return (
        <> 
    
        </> 

    )
}

export default Post;