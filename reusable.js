
        /*
        async function getAIResponse(userMessage) {
            try {
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer sk-proj-Rdd9L7FzJMqCYO6KQye2T3BlbkFJeSg4b0vq2f7PcBKVMSUc`
                    },
                    body: JSON.stringify({
                        "model": "gpt-3.5-turbo",
                        "messages": [{ "role": "user", "content": userMessage }],
                        "temperature": 0.7
                    })
                });
                if (!response.ok) {
                    const data = await response.json();
                    //console.error(`Network response was not ok: ${JSON.stringify(data)}`);
                    return data.error.message
                }

                const data = await response.json();
                return data.choices[0].text.trim();
            } catch (error) {
                console.error('Error:', error);
                return 'Sorry, something went wrong. Please try again later.';
            }
        } */