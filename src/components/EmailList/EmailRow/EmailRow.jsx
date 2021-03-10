import React from 'react';
import { useHistory } from 'react-router-dom';

// Material UI 
import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportanOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';


import './EmailRow.css';

const EmailRow = ({ id, title, subject, description, time }) => {
    const history = useHistory();

    return (
        <div onClick={() => history.push("/mail")} className="emailRow">
            {/* EMailRow  Options */}
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportanOutlinedIcon />
                </IconButton>
            </div>

            {/* EMailRow Title */}
            <h3 className="emailRow__title">{ title }</h3>

            {/* EMailRow Message */}
            <div className="emailRow__message">
                <h4>
                    { subject } {""}
                    <span className="emailRow__description">
                        -{ description }
                    </span>
                </h4>
            </div>

            {/* EMailRow Description */}
            <p className="emailRow__time">
                { time }
            </p>
        </div>
    )
}

export default EmailRow;
