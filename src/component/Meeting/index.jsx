import React, { useEffect, useState }  from "react";

function Meeting(){
    const [domain,setdomain]=useState('meet.jit.si')
    // const [connection,setconnection]=useState('')
    /* global $, JitsiMeetJS */
    
    const startMeetingHandler=()=>{
        var options = {
            roomName: "vaibhavTest",
            width: 1200,
            height: 500,
            parentNode: undefined,
            configOverwrite: {},
            interfaceConfigOverwrite: {
                // DEFAULT_LOGO_URL:'/images/watermark.svg',
                // SHOW_JITSI_WATERMARK: false,
            TOOLBAR_BUTTONS: 
                [ 
                'camera',
                'chat',
                'closedcaptions',       
                'fullscreen',
                'microphone',
                'participants-pane',
                'hangup',
                'security',
                'select-background',
                'tileview',
                'security',
                'select-background',
                'mute-everyone',
            ]}
        }
        let connection= new window.JitsiMeetExternalAPI(domain, options);

        connection.addEventListeners({
            readyToClose: readyClosehandler(),
            participantLeft:participantLeftHandler(),
            participantJoined:joinHandler(),
            videoConferenceJoined:conferenceJoinHandler(),
            videoConferenceLeft:conferenceLefHandler(),
            audioMuteStatusChanged:audioMuteStatusChanged(),
            videoMuteStatusChanged:videoMuteStatusChangedHandler()
        })      
    }
    useEffect(()=>{
        if(window.JitsiMeetExternalAPI){
            startMeetingHandler();
        }
        else{
            alert("something went wrong")
        }
    })

    const readyClosehandler=()=>{
        console.log("readyClosehandler")
    }
    
    const participantLeftHandler=()=>{
        console.log("participantLeftHandler")
    }

    const joinHandler=()=>{
        console.log("joinHandler");
    }

    const conferenceJoinHandler=()=>{
        console.log("conferenceJoinHandler");
    }

    const conferenceLefHandler=()=>{
        console.log("conferenceLefHandler");
    }

    const audioMuteStatusChanged=()=>{
        console.log("audioMuteStatusChanged");
    }

    const videoMuteStatusChangedHandler=()=>{
        console.log("videoMuteStatusChangedHandler")
    }
    return(
        <>
        
        </> 
    )
}


export default Meeting