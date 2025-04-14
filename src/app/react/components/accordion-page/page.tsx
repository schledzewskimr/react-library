'use client';
import React from "react";
import "./accordion.css";
import SnippetViewer from "@/app/UI/snippet-viewer/snippet-viewer";
import { AccordionComponent } from "../../../../../library/src";

export default function AccordionPage() {
  return (
    <div>
          <AccordionComponent title="Sample Title" content="Sample Content"></AccordionComponent>

          <SnippetViewer
            snippet="<div>"></SnippetViewer>
    </div>
  );
}