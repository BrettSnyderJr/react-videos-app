import '../css/Loader.css';
import React from 'react';

const Loader = (props) => { 
 
    return (
        <div className="ui massive active centered inline text loader">{props.message}</div>
     );
};

Loader.defaultProps = {
    message: 'Loading...'
}

export default Loader;