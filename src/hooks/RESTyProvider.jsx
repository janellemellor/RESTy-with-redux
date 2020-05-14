import React, { createContext, useState, useContext } from 'react';

const RESTyContext = createContext();

export const RESTyProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [jsonBody, setJsonBody] = useState('');
  
  const onChange = ({ target }) => {
    const setInputsFactory = {
      url: setUrl, 
      method: setMethod, 
      jsonBody: setJsonBody
    };
    setInputsFactory[target.name](target.value);
  };

  

  return (
    <RESTyContext.Provider >
      {children}
    </RESTyContext.Provider>
  );
};

