'use client';
import Link from "next/link";
import "./header.css";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface HeaderProps {
    onLinkClick: (link: string) => void;
}

/**
 * Header component for the application.
 * @param {HeaderProps} props - The props for the Header component.
 * @returns {JSX.Element} - The rendered Header component.
 */
export default function Header({ onLinkClick }: HeaderProps) {

    const router = useRouter();
    const [activeLink, setActiveLink] = useState<string>("home");


    const handleLinkClick = (link: string) => {
        router.push(`/${link}`); // Update the URL path
        setActiveLink(link);
        onLinkClick(link);
    };

    return (
        <nav className="header">
            <div className="header-title">Marks Fun Library</div>
            <ul className="header-nav">
                <li><a href="#" className={activeLink === "home" ? "active" : ""} onClick={(e) => { e.preventDefault(); handleLinkClick('home') }}>Home</a></li>
                <li><a href="#" className={activeLink === "about" ? "active" : ""} onClick={(e) => { e.preventDefault(); handleLinkClick('about') }}>About</a></li>
                <li><a href="#" className={activeLink === "react" ? "active" : ""} onClick={(e) => { e.preventDefault(); handleLinkClick('react') }}>React</a></li>
                <li><a href="#" className={activeLink === "icons" ? "active" : ""} onClick={(e) => { e.preventDefault(); handleLinkClick('icons') }}>Icons</a></li>
            </ul>
            <div className="d-flex items-center space-x-4">
                <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Login</a>
                <a href="/signup" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Sign Up</a>
            </div>
        </nav>
    );
}