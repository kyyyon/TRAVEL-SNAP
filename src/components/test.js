import React, { useState } from "react";
import axios from "axios";

const MyForm = () => {
  // State variables to hold form data
  const [prompt, setPrompt] = useState("");

  // Handle form input change for prompt
  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/chats/create/",
        { prompt }
      );
      console.log("Response:", response.data);
      // Clear prompt field after successful submission
      setPrompt("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Prompt:</label>
        <input
          type="text"
          value={prompt}
          onChange={handlePromptChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
