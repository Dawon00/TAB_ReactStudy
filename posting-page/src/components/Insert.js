import React from 'react';
import { BsFillCursorFill } from "react-icons/bs";
import './Insert.scss';

const Insert = () => {
    return (
        <form className="Insert">
            <input placeholder="글을 작성하세요."/>
            <button type="submit">
                <BsFillCursorFill />
            </button>
        </form>
    );
};

export default Insert;