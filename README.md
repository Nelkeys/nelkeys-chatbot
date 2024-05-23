# Nelkeys AI Chatbot 🤖💬

Welcome to Nelkeys AI Chatbot! This is a web-based AI chatbot powered by OpenAI's GPT-3.5-turbo model, designed to provide an engaging and interactive chat experience. Whether you need assistance, have questions, or just want to chat, Nelkeys AI is here for you! 🎉

## Features 🌟

- **Interactive Chat Interface**: Engage with a responsive chat interface that provides real-time communication.
- **AI-Powered Responses**: Utilizes OpenAI's GPT-3.5-turbo model to generate intelligent and human-like responses.
- **User-Friendly Design**: Clean and modern design with easy-to-use functionalities.
- **Real-Time Communication**: Get instant responses from the AI to your queries.

## Getting Started 🚀

### Prerequisites

Ensure you have the following before starting:

- A web browser (Chrome, Firefox, Safari, etc.)
- Node.js and npm (for running a local server if needed)
- Access to the OpenAI API (an API key)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Nelkeys/nelkeys-ai-chatbot.git
   cd nelkeys-ai-chatbot
   ```

2. **Install Dependencies**

   If you are running a local server, install the required packages:

   ```bash
   npm install
   ```

3. **Set Up OpenAI API Key**

   Ensure you have your OpenAI API key ready. Replace the placeholder in the JavaScript code with your actual API key:

   ```javascript
   'Authorization': `Bearer YOUR_API_KEY_HERE`
   ```

### Running the Application

To run the application locally, you can use a simple HTTP server. For instance, using `http-server`:

```bash
npx http-server
```

Open your browser and navigate to the provided URL (usually `http://localhost:5500`).

## Usage 📚

1. **Open the Application**: Navigate to the URL where the application is hosted.
2. **Start Chatting**: Type your message in the textarea provided at the bottom and hit the send button or press `Enter`.
3. **View Responses**: The AI's responses will appear in the chat area, engaging with your inputs.

## Code Overview 🛠️

### HTML

The HTML file sets up the structure of the chat interface, including the chat area, user input form, and templates for AI and user messages.

### CSS

The CSS file styles the chat interface, ensuring that messages from both the user and AI are displayed neatly and do not overflow the screen.

### JavaScript

The JavaScript handles the interaction logic, including:

- Capturing user input
- Sending the input to the OpenAI API
- Displaying both user and AI messages in the chat area

Key functions include:
- `displayUserMessage(message)`: Displays the user's message.
- `displayAIMessage(message)`: Displays the AI's response.
- `getAIResponse(userMessage)`: Fetches the response from the OpenAI API.

## Contributing 🤝

Contributions are welcome! If you have suggestions for improvements or new features, feel free to create an issue or submit a pull request.

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements 🙌

- [OpenAI](https://www.openai.com/) for providing the powerful GPT-3.5-turbo model.
- [Boxicons](https://boxicons.com/) for the beautiful icons.
- Everyone who contributes to this project!

## Contact 📧

If you have any questions, feel free to reach out at [nelsonekoh212@gmail.com](mailto:nelsonekoh212@gmail.com).

---

Enjoy chatting with Nelkeys AI Chatbot! 🌟✨

