import React from 'react';

export const OpenContext = React.createContext({
  openContext: true,
  setOpenContext: (isOpen: boolean) => {}
})