import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { CloseButtonIcon } from './CloseButton.styles';

const CloseButton = ({ toggleSidebar }) => (
  <CloseButtonIcon onClick={toggleSidebar}><FaTimes style={{ background: 'transparent' }} /></CloseButtonIcon>
  );

export { CloseButton };
