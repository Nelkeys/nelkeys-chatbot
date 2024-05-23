
    
        // Replace 'YOUR_GEMINI_API_KEY' with your actual Gemini API key
        const apiKey = 'YOUR_GEMINI_API_KEY';

        document.getElementById('chat-form').addEventListener('submit', async function (event) {
            event.preventDefault();

            const userMessage = document.getElementById('user-prompt').value;
            if (userMessage.trim() === '') return;

            displayUserMessage(userMessage);
            document.getElementById('user-prompt').value = '';

            const aiMessage = await getAIResponse(userMessage);
            displayAIMessage(aiMessage);
        });

        function displayUserMessage(message) {
            const userChatTemplate = document.getElementById('user-chat-template').cloneNode(true);
            userChatTemplate.style.display = 'block';
            userChatTemplate.querySelector('.user-message').textContent = message;
            document.getElementById('chat').appendChild(userChatTemplate);
        }

        function displayAIMessage(message) {
            const aiChatTemplate = document.getElementById('ai-chat-template').cloneNode(true);
            aiChatTemplate.style.display = 'block';
            aiChatTemplate.querySelector('.ai-message').textContent = message;
            document.getElementById('chat').appendChild(aiChatTemplate);
        }

        async function getAIResponse(userMessage) {
            try {
                const response = await fetch('https://ai.google.dev/api/ai-chat/v1/complete', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        "prompt": userMessage,
                        "model": "gemini-pro" // Choose the appropriate model for your needs
                    })
                });
                if (!response.ok) {
                    const data = await response.json();
                    //console.error(`Network response was not ok: ${JSON.stringify(data)}`);
                }
            }
        }
    

