import React from 'react';
import { useHistory } from 'react-router-dom';

// Material UI
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant'; 
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './Mail.css';

const Mail = () => {
    const history = useHistory(); 

    return (
        <div className="mail">

            {/* Mail Tools */}
            <div className="mail__tools">
                {/* Mail Tools Left */}
                <div className="mail__tollsleft">
                    <IconButton onClick={() => history.push("/")} >
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>

                    <IconButton>
                        <ErrorIcon />
                    </IconButton>

                    <IconButton>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton>
                        <EmailIcon />
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                {/* Mail Tools Right */}
                <div className="mail__tollsRight">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>

                    <IconButton>
                        <PrintIcon />
                    </IconButton>

                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>

            {/* Mail Body */}
            <div className="mail__body">
                {/* Mail BodyHeader */}
                <div className="mail__bodyHeader">
                    <h2>Subject</h2>
                    <LabelImportantIcon className="mail__important" />
                    <p>Title</p>
                    <p className="mail__time">Time</p>
                </div>

                {/* Mail body Message */}
                <div className="mail__bodyMessage">
                    This is a message
                </div>
            </div>
        </div>
    )
}

export default Mail;
