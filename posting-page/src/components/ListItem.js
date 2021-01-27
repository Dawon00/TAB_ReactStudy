import React from 'react';
import{
    BsFillTrashFill
}from "react-icons/bs";
import './ListItem.scss';

const ListItem=()=>{
    return(
        <div className="ListItem">
            <div className="text">
                게시글
            </div>
            <div className="remove">
                <BsFillTrashFill/>
            </div>
        </div>
    );
};

export default ListItem;