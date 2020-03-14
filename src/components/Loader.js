import React from 'react';


const Loader = (props)=>{
    return (
        <div>
             <div className="ui active  dimmer">
                <div className="ui big text loader">{props.loadingText}</div>
            </div>
        </div>
    );
}

Loader.defaultProps={
    loadingText:"loading"
}

export default Loader;