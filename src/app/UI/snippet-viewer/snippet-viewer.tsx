'use client';

import React, { useState } from "react";
import "./snippet-viewer.css";

interface SnippetViewerProps {
  snippet: string; // The HTML snippet to display
}

export default function SnippetViewer({ snippet }: SnippetViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  };

  // Escape HTML characters to display raw HTML
  const escapeHtml = (html: string) => {
    return html
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  // Add line numbers and basic syntax highlighting
  const formatSnippet = (code: string) => {
    const lines = code.split("\n");
    return lines.map((line, index) => (
      <div key={index}>
        <span className="line-number">{index + 1}</span>
        <code
          dangerouslySetInnerHTML={{
            __html: escapeHtml(line)
              .replace(/(\/\/.*)/g, '<span class="comment">$1</span>') // Highlight comments
              .replace(/(".*?")/g, '<span class="string">$1</span>') // Highlight strings
              .replace(/\b(const|let|var|function|return|if|else|for|while|import|export)\b/g, '<span class="keyword">$1</span>'), // Highlight keywords
          }}
        />
      </div>
    ));
  };

  return (
    <div className="snippet-viewer">
      <div className="snippet-controls">
        <button className="copy-button" onClick={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="snippet-code">{formatSnippet(snippet)}</div>
    </div>
  );
}