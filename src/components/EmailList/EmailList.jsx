import React from 'react';
import Section from './Section/Section';
import EmailRow from './EmailRow/EmailRow';

// Material UI
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

import './EmailList.css';

const EmailList = () => {

    return (
        <div className="emailList">
            <div className="emailList__settings">
                {/* Email Settings Left */}
                <div className="emailList__settingsLeft">
                    <Checkbox /> 
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                {/* Email Settings Right */}
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>

            {/* EmailList Sections */}
            <div className="emailList__sections">
                <Section Icon={ InboxIcon } title="Primary" color="red" selected />
                <Section Icon={ PeopleIcon } title="Social" color="#1A73E8" />
                <Section Icon={ LocalOfferIcon } title="Promotions" color="green" />
            </div>

            {/* EmailList List */}
            <div className="emailList__list">
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />   
                  <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                  <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                  <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
                <EmailRow 
                    title="Test"
                    subject="Hey nOOgler"
                    description="This is a Test!!!!"
                    time="10pm"
                />
            </div>
        </div>
    )
}

export default EmailList;
