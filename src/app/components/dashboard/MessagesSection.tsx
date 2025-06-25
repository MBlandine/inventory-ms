'use client';

import { Trash2} from 'lucide-react';

export default function MessagesSection (){
    const messages: Message[] = [
        {
            id: 1,
            name: 'John Doe',
            message:'Hello this is the text'
        },
        {
            id: 2,
            name: 'John Smith',
            message:'Hello this is the text'
        },
        {
            id: 3,
            name: 'Mike Johnson',
            message:'Hello this is the text'
        }
    ];


    return(
        <div className="messages-section">
            <h2>Queries</h2>
            <div className="message-container">
                {messages.map((message) => (
                    <div key={message.id} className="message-item" style={{display: 'flex', alignItems: 'center', justifyContent:'space-between' }}>
                    <div className="message-details">
                        <h3>{message.name}</h3>
                        <p>{message.message}</p>
                    </div> 
                    <Trash2 className="delete-icon" size={20}/>
                    </div>
                    ))}

            </div>
        </div>
    );
}