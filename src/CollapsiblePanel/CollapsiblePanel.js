import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";

import './CollapsiblePanel.scss'

const CollapsiblePanel = ({children}) => {
    const [status, setStatus] = useState(false);

    let handleMessage = 'Show completed tasks';
    let handleIcon = faCaretDown;
    let contentClass = "content";

    if (status) {
        handleMessage = 'Hide completed tasks';
        handleIcon = faCaretUp;
        contentClass = "content show";
    }

    const toggleStatusHandler = () => {
        setStatus(!status);
    };

    return (
        <div className="collapsible-panel">
            <button type="button" className="handle" onClick={toggleStatusHandler}>
                <FontAwesomeIcon icon={handleIcon}/>
                <span>{handleMessage}</span>
                <FontAwesomeIcon icon={handleIcon}/>
            </button>
            <div className={contentClass}>
                {children}
            </div>
        </div>
    );
};

export default CollapsiblePanel;
