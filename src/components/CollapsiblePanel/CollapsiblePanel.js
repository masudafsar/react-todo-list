import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";

import styleClasses from './CollapsiblePanel.module.scss'

class CollapsiblePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false
        };
    }

    render() {
        let handleMessage = 'Show completed tasks';
        let handleIcon = faCaretDown;
        let contentClass = [styleClasses.Content];
        let content = null;

        if (this.state.expand) {
            handleMessage = 'Hide completed tasks';
            handleIcon = faCaretUp;
            contentClass.push(styleClasses.Show);
        }

        if (this.props.children.length !== 0) {
            content = (
                <div className={styleClasses.CollapsiblePanel}>
                    <button
                        type="button"
                        className={styleClasses.Handle}
                        onClick={this.toggleStatusHandler}>
                        <FontAwesomeIcon icon={handleIcon}/>
                        <span>{handleMessage}</span>
                        <FontAwesomeIcon icon={handleIcon}/>
                    </button>
                    <div className={contentClass.join(' ')}>
                        {this.props.children}
                    </div>
                </div>
            );
        }

        return content;
    }

    toggleStatusHandler() {
        this.setState((prevState, props) => {
            return {expand: !prevState.expand};
        });
    };
}

export default CollapsiblePanel;
