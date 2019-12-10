import React from 'react'
import { TagProvider } from './src/components/context/TagContext'
import './src/assets/styles/main.scss'

export const wrapRootElement = ({ element }) => (
  <TagProvider>{element}</TagProvider>
)
