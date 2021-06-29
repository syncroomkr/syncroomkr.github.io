import React from "react";


import makeJoinURI from "../util/makeJoinURI";
import {Redirect} from "react-router-dom";

function Join({location:{search}, history}) {
    /**
     * @param params.room
     * @param params.pw
     */
    const {room, pw = ""} = Object.fromEntries(
        decodeURI(search).slice(1).split('&').map(s => s.split('='))
    );
    const joinURI = makeJoinURI(room, pw, 4, 2);

    if (!room) {
        history.push('./notfound');
    } else {
        window.location.href = joinURI;
    }

    return (
        <div>
            <span>redirect page</span>
            <br/>
            <a href={joinURI}>수동 입장</a>
        </div>
    )
}

export default Join;