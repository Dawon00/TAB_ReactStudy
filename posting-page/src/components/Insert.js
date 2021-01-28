import React,{useState, useCallback} from 'react';
import { BsFillCursorFill } from "react-icons/bs";
import './Insert.scss';

const Insert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(
        e=>{
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="Insert" onSubmit={onSubmit}>
            <input placeholder="댓글을 작성하세요."
            value={value}
            onChange={onChange}
            />
            <button type="submit">
                <BsFillCursorFill />
            </button>
        </form>
    );
};

export default Insert;