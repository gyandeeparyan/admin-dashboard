"use client"
import React from 'react';

const Button = ({ className, children, ...props }) => (
  <button className={`${className} px-6 py-2 rounded-lg`} {...props}>
    {children}
  </button>
);

export default Button;
