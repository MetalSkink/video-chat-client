import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { SocketContext } from '../SocketContext';


export const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext)
    return (
        <>
            { call.isReceivedCall && !callAccepted && (
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1 style={{fontFamily: "sans-serif"}}> {call.name} esta llamandote: </h1>
                    <Button variant="contained" color="primary" onClick={answerCall}>
                        Contestar
                    </Button>
                </div>
            )}
        </>
    )
}
