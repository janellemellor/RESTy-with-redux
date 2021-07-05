import React from 'react';

const Response = () => {
  
    return (
      <pre>
        {JSON.stringify(response, null, 2)}
      </pre>
    );
};

export default Response;
