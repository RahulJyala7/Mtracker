import React from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';


//Toster Messages 
export  function showToster(type, message) {
    switch (type) {
        case 'info':
            return NotificationManager.info(message, "", 3000);
            break;
        case 'success':
            return NotificationManager.success(message, "" , 3000);
            break;
        case 'warning':
            return NotificationManager.warning(message, ""  , 3000);
            break;
        case 'error':
            return NotificationManager.error(message, "" , 3000);
            break;
    }
}



//Toster Container
export function Toster() {
    return (<div><NotificationContainer /></div>)
}

