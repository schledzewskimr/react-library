'use client';
import React, { useState, useEffect } from "react";
import "./htmlpage.css";
import LeftNav from "../UI/left-nav/left-nav";
import { htmlPageConfigs } from "../react/services/page-config.service";
import NotificationPageComponent from "./htmls/notification-page/page";
import CardPageComponent from "./htmls/card-page/page";


export default function HtmlComponent() {
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
        return <div>Example Component Placeholder</div>;
      case "Notification":
        return <NotificationPageComponent />;
      case "Accordion":
        return <div>Accordion Component Placeholder</div>;
      case "Card":
        return <CardPageComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="react-page-wrapper">
      <LeftNav
        onSelect={(selected) => {
          handleLinkClick(activeLink, selected);
        }}
        activeItem={selectedComponent}
      />
      <div className="main-content">
        {!selectedComponent ? (
          <>
            <h1>Components</h1>
            <div className="components-list">
              {htmlPageConfigs.map((item, index) => (
                <div
                  key={index}
                  className="card"
                  onClick={() => handleLinkClick(activeLink, item.name)}
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