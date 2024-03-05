import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { defineCustomElements } from '@innomotics/ix-react-lib';

defineCustomElements();

export default {
  ...MDXComponents,
};