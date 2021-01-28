import React,{useState, useRef, useCallback} from 'react';
import PostTemplate from './components/PostTemplate';
import Insert from './components/Insert';
import List from './components/List';


const App=()=> {
  const [posts, setposts] = useState([
  {
    id:1,
    text:'첫 번째 댓글',
    checked:false
  },
  {
    id:2,
    text:'두 번째 댓글',
    checked:false
  }
  ]);

  const nextId = useRef(3);

  const onInsert = useCallback(
    text=> {
      const post = {
        id:nextId.current,
        text,
        checked : false,
      };
      setposts(posts.concat(post));
      nextId.current += 1;
    },
    [posts],
  );

  const onRemove = useCallback(
    id=> {
      setposts(posts.filter(post => post.id !== id));
    },
    [posts],
  );

  const onToggle = useCallback(
    id=>{
      setposts(
        posts.map(post=>
          post.id === id?{ ...post, checked: !post.checked}:post,
          ),
      );
    },
    [posts],
  );


  return ( 
  <PostTemplate>
    <Insert onInsert={onInsert}/>
    <List posts={posts} onRemove={onRemove} onToggle={onToggle}/> 
  </PostTemplate>
  );
};

export default App;
