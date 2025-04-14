'use client';

import React, { useEffect, useState } from "react";

export default function ExampleComponent() {
  const [activeLink, setActiveLink] = useState<string>("/react");

  useEffect(() => {
    const updateActiveLink = () => {
        const hash = window.location.hash.replace("#", "") || "home";
        setActiveLink(hash);
      };

  }, []);

  return (
    <div>
        <h1>Hello, this is an example component!</h1>
        <p>This is the Example component.</p>
    </div>
  );
}