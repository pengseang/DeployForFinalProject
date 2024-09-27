import React, { useState } from "react";
import axios from "axios";

export const GeminiChat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = "AIzaSyCkuBenJW08baQjauq1tky_bKDPZp3CtIU"; // Replace with your actual API key
  const API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await axios.post(
        `${API_URL}?key=${API_KEY}`,
        {
          contents: [{ parts: [{ text: message }] }],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setResponse(result.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error:", error);
      setResponse("An error occurred while fetching the response.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl p-6 mx-auto mt-10 bg-white shadow-lg gemini-chat dark:bg-gray-900 rounded-3xl">
      {/* Chat header */}
      <div className="flex items-center justify-center mb-6">
        <img
          className="w-12 h-12 rounded-full"
          src="http://dealkh-api.istad.co:80/images/9f9e1a2c-1392-4b1f-ac96-50f71cc16a51.png"
          alt="Gemini"
        />
        <h3 className="ml-4 text-2xl font-semibold text-gray-800 dark:text-white">
          Ask Gemini AI
        </h3>
      </div>

      {/* Chat form */}
      <div className="p-4 border dark:border-gray-700 rounded-2xl bg-gray-50 dark:bg-gray-800">
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full px-4 py-2 mb-4 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask something..."
            rows="4"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-xl text-white font-semibold transition-colors ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600"
            }`}
          >
            {isLoading ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>

      {/* Response display */}
      {response && (
        <div className="mt-6">
          <div className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
            AI Response:
          </div>
          <div className="p-4 overflow-y-auto text-gray-800 bg-white border border-gray-300 shadow-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 rounded-2xl max-h-60">
            <p>{response}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiChat;
