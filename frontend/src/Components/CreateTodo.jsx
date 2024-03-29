import React, { useState } from 'react';

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
            /><br />
            <input
                type="text"
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
            /><br />
            <button onClick={() => {
                fetch("http://localhost:3000/todos", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-Type": "application/json" // Corrected typo here
                    }
                })
                .then(response => response.json())
                .then(data => {
                    // Handle the response data if needed
                    console.log(data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }}>Add Todo</button>
        </div>
    );
}
