import React from 'react';
import Form from '../Form/Form';
import { RESTyProvider } from '../../hooks/RESTyProvider';

export default function App() {
  return (
    <RESTyProvider>
      <Form />
    </RESTyProvider>
  )
}
  