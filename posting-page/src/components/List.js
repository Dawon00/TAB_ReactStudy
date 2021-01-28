import React from 'react';
import ListItem from './ListItem';
import './List.scss';

const List =({posts, onToggle,onRemove})=>{
    return (
        <div className="List">
            {posts.map(post => (
                <ListItem 
                post={post} 
                key={post.id}
                onRemove ={onRemove}
                onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default List;