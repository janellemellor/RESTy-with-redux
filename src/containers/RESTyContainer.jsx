import React, { useState } from 'react';

const RESTyContainer = () => {
    const [url, setUrl] = useState('');
    const [method, setMethod] = useState('GET');
    const [jsonBody, setJsonBody] = useState('');
    
    const handleChange = ({ target }) => {
      const setInputsFactory = {
        url: setUrl, 
        method: setMethod, 
        jsonBody: setJsonBody
      };
      setInputsFactory[target.name](target.value);
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      fetchRequest(url, method, jsonBody);
    };
    
    return (
      <section>
        <Form 
          onSubmit={handleSubmit}
          url={url}
          method={method}
          onChange={handleChange}
          jsonBody={jsonBody} />
      </section>
    )
};

export default RESTyContainer;

