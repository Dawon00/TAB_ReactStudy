import React from 'react';
import './PostTemplate.scss';

const PostTemplate=({children})=>{
    return(
        <div className="PostTemplate">
            <div className="title">게시물</div>
            <div className="posting">
                나 여기 다녀 왔어 어때?
            </div>
            <div className="content">{children}</div>
        </div>
    );
};

export default PostTemplate;