import React, {useState} from 'react';
import ReactDOMServer from 'react-dom/server';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";

import './CollapsiblePanel.scss'

const CollapsiblePanel = ({children}) => {
    const [status, setStatus] = useState(false);

    const toggleStatusHandler = () => {
        setStatus(!status);
    };

    let handleMessage = 'Show completed tasks';
    let handleIcon = faCaretDown;
    let contentClass = "content";
    let content = null;

    if (status) {
        handleMessage = 'Hide completed tasks';
        handleIcon = faCaretUp;
        contentClass = "content show";
    }

    if (children.length !== 0) {
        content = (
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
    }

    return content;
};

export default CollapsiblePanel;
