import React from 'react';
import { AlertBody } from './AlertMessage.style';

const AlertMessage = ({ showAlert }) => (
    <AlertBody showAlert={showAlert}>Added to Library</AlertBody>
);

export { AlertMessage };
