'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import pageConfigs from "./services/page-config.service";
import "./react.css";
import LeftNav from "../UI/left-nav/left-nav";
import ExampleComponent from "./components/example/page";
import NotificationComponent from "./components/notification-page/page";
import AccordionPage from "./components/accordion-page/page";

export default function ReactComponent() {
  const router = useRouter(); // Initialize the router
  const [activeLink, setActiveLink] = useState<string>("react");
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  // Update the active link and selected component based on the URL
  useEffect(() => {
    const updateActiveLink = () => {
      const path = window.location.pathname.split("/").filter(Boolean);
      const mainLink = path[0] || "react";
      const component = path[1] || null;
      setActiveLink(mainLink);
      setSelectedComponent(component);
    };

    updateActiveLink();

    window.addEventListener("popstate", updateActiveLink); // Listen for browser navigation
    return () => {
      window.removeEventListener("popstate", updateActiveLink);
    };
  }, []);

  // Update the URL and state when a link is clicked
  const handleLinkClick = (link: string, component?: string) => {
    const newPath = component ? `/${link}/${component}` : `/${link}`;
    window.history.pushState({}, "", newPath); // Update the URL without triggering navigation
    setActiveLink(link);
    setSelectedComponent(component || null);
    console.log("Selected component:", component);
  };

  const renderPage = () => {
    switch (selectedComponent) {
      case "ExampleComponent":
        return <ExampleComponent />;
      case "Notification":
        return <NotificationComponent />;
      case "Accordion":
        return <AccordionPage />
      default:
        return null;
    }
  };

  return (
    <div className="react-page-wrapper">
      <LeftNav
        onSelect={(selected) => {
          handleLinkClick("react", selected);
        }}
        activeItem={selectedComponent}
      />
      <div className="main-content">
        {!selectedComponent ? (
          <>
            <h1>Components</h1>
            <div className="components-list">
              {pageConfigs.map((item, index) => (
                <div
                  key={index}
                  className="card"
                  onClick={() => handleLinkClick("react", item.name)}
                >
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
          <header className="component-header">
            <h1>{selectedComponent}</h1>
          </header>
          <div className="component-preview col-9">
            {renderPage()}
          </div>
          </>
          
        )}
      </div>
    </div>
  );
}