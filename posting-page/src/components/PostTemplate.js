import React from 'react';
import './PostTemplate.scss';

const PostTemplate=({children})=>{
    return(
        <div className="PostTemplate">
            <div className="title">게시물</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default PostTemplate;