import React from 'react';
import { useForm } from 'react-hook-form';

// FireBase 
import { db } from '../../Service/firebase';
import firebase from 'firebase';

// Redux
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/MailSlice';

// Material UI
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import './SendMail.css';

const SendMail = () => {
    // React Form Hook
    const { register, handleSubmit, watch, errors } = useForm(); 

    // OnSubmit 
    const onSubmit = (formData) => {
        db.collection('emails').add({
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        dispatch(closeSendMessage());
    }   

    // Dispatch Close Mail
    const dispatch = useDispatch();

    return (
        <div className="sendMail">
            {/* SendMail Header */}
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon 
                    className="sendMail__close" 
                    // Close Send Mail
                    onClick={() => dispatch(closeSendMessage())}
                />
            </div>

            {/* SendMail Form */}
            <form onSubmit={ handleSubmit(onSubmit) } >
                <input 
                    name="to" 
                    placeholder="To" 
                    type="email" 
                    ref={register({ required: true })} 
                />
                { errors.to && <p className="sendMail__error">To is required</p> }

                <input 
                    name="subject" 
                    placeholder="Subject"  
                    type="text" 
                    ref={register({ required: true })} 
                />
                { errors.subject && <p className="sendMail__error">Subject is required</p> }

                <input 
                    className="sendMail__message" 
                    name="message" 
                    placeholder="Message..."  
                    type="text"
                    ref={register({ required: true })} 
                />
                { errors.message && <p className="sendMail__error">Message is required</p> }

                {/* SendMail Options */}
                <div className="sendMail__options">
                    <Button 
                        className="sendMail__send"
                        variant="contained" 
                        type="submit "
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail;
