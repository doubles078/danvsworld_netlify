import React from 'react'
import { TagProvider } from './src/components/context/TagContext'
export const wrapRootElement = ({ element }) => (
  <TagProvider>{element}</TagProvider>
)
