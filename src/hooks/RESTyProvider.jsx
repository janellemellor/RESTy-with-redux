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

  const context = {
    url,
    method, 
    jsonBody, 
    onChange
  };

  return (
    <RESTyContext.Provider value={context} >
      {children}
    </RESTyContext.Provider>
  );
};

export const useRESTy = () => {
  const context = useContext(RESTyContext);
  return context;
};
