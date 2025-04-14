"use client";

import React, { useEffect, useState } from "react";
import Header from "../header/header"
import "./hostpage.css";
import AboutComponent from "@/app/about/page";
import HomeComponent from "@/app/home/page";
import IconsComponent from "@/app/icons/page";
import ReactComponent from "@/app/react/page";
import { useRouter } from "next/navigation";

export default function HostPage() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<string>("home");

  // Update the active link based on the URL path
  useEffect(() => {
    const path = window.location.pathname.split("/").filter(Boolean)[0] || "home";
    setActiveLink(path);
  }, []);

  // Handle link clicks
  const handleLinkClick = (link: string) => {
    window.history.pushState({}, "", `/${link}`); // Update the URL without reloading
    setActiveLink(link);
  };

  const renderPage = () => {
    switch (activeLink) {
      case "home":
        return <HomeComponent />;
      case "about":
        return <AboutComponent />;
      case "react":
        return <ReactComponent />;
      case "icons":
        return <IconsComponent />;
      default:
        return <HomeComponent />;
    }
  };

  return (
    <div className="host-wrapper">
      <Header onLinkClick={handleLinkClick} />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content">{renderPage()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}