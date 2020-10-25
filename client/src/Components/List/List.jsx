import React from 'react';
import { Project } from 'arwes';

export const List = ({ header, list }) => {
  const getDate = (date) => {
    return new Date(date).toLocaleDateString(navigator.language, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
  return (
    <Project
      animate
      header={header}
    >
      {(list || []).map(element => (
        <div>
          {element.slug} - {element.used} - {getDate(element.createdAt)}
        </div>
      ))}
    </Project>
  )
}