import io from 'socket.io-client';
import React, {useState, useEffect} from 'react';

const Chat = (props) => {
    const [socket] = useState(()=>io(':8000'));
    useEffect(() =>{
        console.log('is this running?');
        socket.on('Welcome', data => console.log(data));

        return () => socket.disconnect(true);
    }, []);

    return(
        <div>
            <h2>Socket test</h2>
        </div>

    );

}

export default Chat;