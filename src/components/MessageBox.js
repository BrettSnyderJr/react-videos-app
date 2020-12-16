import './css/MessageBox.css';
import React from 'react';

const messageBoxConfig = {

    default: {
        header: "Attention"
    },
    success: {
        header: "Success!"
    },
    error: {
        header: "Error!"
    }
};

const getMessageBoxConfig = (type) => {

    if (!type) type = "default";
    return messageBoxConfig[type];
};

const MessageBox = (props) => { 
 
    const config = getMessageBoxConfig(props.type);

    return (
        <div className='message-box-center'>
            <div className={`ui compact ${props.type} message`}>
                <div className="header centered">
                    { config.header }
                </div>
                <p>{props.message}</p>
            </div>
        </div>
     );
};

export default MessageBox;