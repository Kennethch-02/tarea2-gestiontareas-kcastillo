import React from 'react';

function Task({ number, title, completed }) {
    const cardStyle = {
        backgroundColor: completed ? '#e0f7fa' : '#f5f5f5',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease',
        width: '300px'
    };

    const titleStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '8px',
        color: completed ? '#00838f' : '#333',
    };

    const footerStyle = {
        fontSize: '14px',
        color: completed ? '#00838f' : '#999',
        fontStyle: 'italic',
    };

    return (
        <div style={cardStyle}>
            <p>Task #{number}</p>
            <h2 style={titleStyle}>{title}</h2>
            <p style={footerStyle}>{completed ? 'Completed' : 'Not Completed'}</p>
        </div>
    );
}

export default Task;