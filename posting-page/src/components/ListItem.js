import React from 'react';
import{
    BsFillHeartFill,BsHeart,BsFillTrashFill
}from "react-icons/bs";
import cn from 'classnames';
import './ListItem.scss';


const ListItem=({post,onToggle,onRemove})=>{
    const{id,text,checked}=post;

    return(
        <div className="ListItem">
            <div className={cn('checkbox', {checked})} onClick={()=>onToggle(id)}>
            <div className="text">{text}</div>
            
            {checked ? <BsFillHeartFill /> : <BsHeart/>}
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <BsFillTrashFill/>
            </div>
        </div>
    );
};

export default ListItem;