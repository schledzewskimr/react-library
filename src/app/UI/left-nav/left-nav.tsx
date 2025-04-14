'use client';
import pageConfigs from "@/app/react/services/page-config.service";
import React, { useEffect, useRef, useState } from "react";
import "./left-nav.css";

interface LeftNavProps {
  onSelect: (selected: string) => void;
  activeItem: string | null;
}

/**
 * LeftNav component renders a navigation menu with selectable items.
 * 
 * @param {Object} props - The props for the component.
 * @param {(selected: string) => void} props.onSelect - Callback function triggered when an item is selected.
 * @param {string | null} props.activeItem - The currently active item.
 * @returns {JSX.Element} The rendered LeftNav component.
 */
export default function LeftNav({ onSelect, activeItem }: LeftNavProps) {
  const listRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = pageConfigs.findIndex((item) => item.name === selected);
      if (event.key === "ArrowDown") {
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % pageConfigs.length;
        setSelected(pageConfigs[nextIndex].name);
        listRefs.current[nextIndex]?.focus();
        onSelect(pageConfigs[nextIndex].name); // Notify parent of the selection
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        const prevIndex = (currentIndex - 1 + pageConfigs.length) % pageConfigs.length;
        setSelected(pageConfigs[prevIndex].name);
        listRefs.current[prevIndex]?.focus();
        onSelect(pageConfigs[prevIndex].name); // Notify parent of the selection
      }
    };

    if (activeItem) {
      setSelected(activeItem);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

  }, [activeItem, selected, onSelect]);

  const handleSelect = (selected: string) => {
    setSelected(selected);
    const newPath = `/react/${selected}`;
    window.history.pushState({}, "", newPath); // Update the URL without triggering navigation
    onSelect(selected);
  };

  return (
    <div className="left-nav">
      <ul className="nav-list">
        {pageConfigs.map((item, index) => (
          <li
            key={item.name}
            data-index={index}
            tabIndex={0}
            ref={(el) => {
              listRefs.current[index] = el;
            }}
            className={selected === item.name ? "active" : ""}
            onClick={() => handleSelect(item.name)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSelect(item.name);
              }
            }}
          >
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </li>
        ))}
      </ul>
      <div className="nav-footer">
        <p>Marks Fun Library</p>
        <p>Version 1.0.0</p>
        <p>2025 Marks</p>
      </div>
    </div>
  );
}