import React from 'react';
import PropTypes from 'prop-types';
import { RadioButtonGroup, RadioButton } from './RadioButton';

const Form = ({ onSubmit, onChange, url, jsonBody }) => (
    <form onSubmit={onSubmit}>
      <fieldset>
        <input name="url" type="text" value={url} onChange={onChange} />
        <RadioButtonGroup name="method" onChange={onChange} >
          <RadioButton value="GET" />
          <RadioButton value="POST" />
          <RadioButton value="PUT" />
          <RadioButton value="PATCH" />
          <RadioButton value="DELETE" />
        </RadioButtonGroup>
        <button>Go!</button>
        <textarea name="jsonBody" value={jsonBody} onChange={onChange}> </textarea>
      </fieldset>
    </form>
  );
 
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
  onChange: PropTypes.func.isRequired, 
  url: PropTypes.string.isRequired, 
  jsonBody: PropTypes.string
};  

export default Form;
