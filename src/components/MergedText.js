import React from 'react'
import './MergedText.css'

export default function MergedText({backText, frontText}) {
  return (
    <div className="merged-text">
      <p className="back">{backText}</p>
      <p className="front">{frontText}</p>
    </div>
  );
}
