import { useEffect, useState } from 'react';
import collapse from "../../assets/collapse.svg"
import expand from "../../assets/expand.svg"
import "./Singleselect.css"

function Singleselect({ value, data, onChange }) {
    const [inputvalue, setinputvalue] = useState(
        () => {
        if (value) {
            return data.options.find(opt => opt.id === value) || data.options[0];
        }
        return data.options[0];
    });
    const [isopen, setIsopen] = useState(false);

    useEffect(() => {
        if (value) {
            const selected = data.options.find(opt => opt.id === value) || data.options[0];
            setinputvalue(selected);
        } else {
            setinputvalue(data.options[0]);
        }
    }, [value, data.options]);

    const handleSelect = (item) => {
        setinputvalue(item);
        setIsopen(false);
        if (onChange) {
            onChange(item.id);
        }
    };

    return (
        <div className="singleselect">
            <label htmlFor="">{data.label}</label>
            <div className="dropdown">
                <div role="textbox" aria-required = {data.required ? true : false} className={`inputfield ${isopen ? 'open' : ''}`} onClick={() => setIsopen(!isopen)}>
                    {inputvalue.value}
                    <img src={collapse} alt="collapse" />
                </div>
                {isopen && (
                    <ul className={`dropdownlist open`}>
                        {data.options.map((item) => (
                            <li key={item.id} onClick={() => handleSelect(item)}>{item.value}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Singleselect;
