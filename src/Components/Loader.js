import React from 'react';

const Loader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.textMsg}</div>
     </div>

    )
}

Loader.defaultProps = {
    textMsg:'Loading....'
}

export default Loader;