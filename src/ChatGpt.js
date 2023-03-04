import React, { useState } from 'react';
import {Configuration, OpenAIApi} from 'openai';

function ChatGpt() {
  
  // var x = 2;
  // debugger;
  // console.log(openai);
  // openai.api_key = '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';
  
  const configuration = new Configuration({apiKey: "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"}) ;
  const openai = new OpenAIApi(configuration);
  const specialties = ['cardiology', 'neurology', 'gastroenterology'];
  const [userInput, setUserInput] = useState('');
  const [suggestedSpecialty, setSuggestedSpecialty] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const modelPrompt = `Choose a medical specialty that fits the following input: ${userInput}\nSpecialties: ${specialties.join(', ')} {}`;

    try {
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: modelPrompt,
        max_tokens: 7,
        n: 1,
        temperature: 0.5,
        stream: false,
        stop: ["{}"]
      });

      const suggestedSpecialty = response.data.choices[0].text;
      setSuggestedSpecialty(suggestedSpecialty);
      var x = 0;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          What symptoms are you experiencing?
          <input type="text" value={userInput} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {suggestedSpecialty && (
        <p>
          The suggested specialty is {suggestedSpecialty}.
        </p>
      )}
    </div>
  );
}

export default ChatGpt;
