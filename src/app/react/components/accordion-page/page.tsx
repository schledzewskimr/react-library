'use client';
import React, { useState } from "react";
import "./accordion.css";
import SnippetViewer from "@/app/UI/snippet-viewer/snippet-viewer";
import { AccordionComponent } from "../../../../../library/src";

interface BuilderAccordionItem {
  title?: string;
  content?: string;
  titleTemplate?: string;
  contentTemplate?: string;
}

export default function AccordionPage() {
  // Accordion Builder State
  const [builderItems, setBuilderItems] = useState<BuilderAccordionItem[]>([
    { title: "Accordion Item #1", content: "This is the first item's accordion body."},
    // { title: "Accordion Item #2", content: "This is the second item's accordion body.", header: undefined, body: undefined },
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newHeaderTemplate, setNewHeaderTemplate] = useState("");
  const [newContentTemplate, setNewBodyTemplate] = useState("");

  const handleAddItem = () => {
  if (!newTitle.trim() && !newContent.trim() && !newHeaderTemplate.trim() && !newContentTemplate.trim()) return;
  setBuilderItems([
    ...builderItems,
    {
      title: newTitle,
      content: newContent,
      titleTemplate: newHeaderTemplate,
      contentTemplate: newContentTemplate
    }
  ]);
  setNewTitle("");
  setNewContent("");
  setNewHeaderTemplate("");
  setNewBodyTemplate("");
};

  const handleRemoveItem = (idx: number) => {
    setBuilderItems(builderItems.filter((_, i) => i !== idx));
  };

  const builderSnippet = `<AccordionComponent
  items={[
${builderItems.map(item => {
  const title = item.title ? `title: "${item.title}"` : "";
  const content = item.content ? `content: "${item.content}"` : "";
  const titleTemplate = item.titleTemplate
    ? `titleTemplate: <>${item.titleTemplate}</>`
    : "";
  const contentTemplate = item.contentTemplate
    ? `contentTemplate: <>${item.contentTemplate}</>`
    : "";
  return `    { ${[title, content, titleTemplate, contentTemplate].filter(Boolean).join(", ")} }`;
}).join(",\n")}
  ]}
/>`;
  return (

    <div>

      <p>Click on the items below to expand or collapse them.</p>
      <p>Use the <code>expanded</code> property to control the initial state of each item.</p>
      <p>Use the <code>titleTemplate</code> and <code>contentTemplate</code> properties to customize the header and body of each item.</p>
      <p>Use the <code>items</code> property to pass an array of items to the accordion.</p>
      <p>Each item can have a <code>title</code>, <code>content</code>, <code>expanded</code>, <code>titleTemplate</code>, and <code>contentTemplate</code>.</p>
      <p>Here&apos;s an example:</p>

      <h3>Simple Accordion</h3>

          <AccordionComponent
            items={[
              { title: "Accordion Item #1", content: "This is the first item's accordion body." },
              { title: "Accordion Item #2", content: "This is the second item's accordion body." },
              { title: "Accordion Item #3", content: "This is the third item's accordion body." },
            ]}
          />

          <br/>

          <SnippetViewer
            snippet={`<AccordionComponent
  items={[
    { title: "Accordion Item #1", content: "This is the first item's accordion body." },
    { title: "Accordion Item #2", content: "This is the second item's accordion body." },
    { title: "Accordion Item #3", content: "This is the third item's accordion body." },
  ]}
/>`}
          />

          <br/>

          <h3>Accordion with Custom Templates</h3>
          <AccordionComponent
            items={[
              {
                titleTemplate: <strong>Custom Header #1</strong>,
                contentTemplate: <em>This is the first item&apos;s accordion body with a custom header.</em>,
              },
              {
                titleTemplate: <strong>Custom Header #2</strong>,
                contentTemplate: <em>This is the second item&apos;s accordion body with a custom header.</em>,
              },
            ]}></AccordionComponent>

            <br/>
          <SnippetViewer
            snippet={`<AccordionComponent
  items={[
    {
      titleTemplate: <strong>Custom Header #1</strong>,
      contentTemplate: <em>This is the first item's accordion body with a custom header.</em>,
    },
    {
      titleTemplate: <strong>Custom Header #2</strong>,
      contentTemplate: <em>This is the second item's accordion body with a custom header.</em>,
    },
  ]}
/>`}
          />

          <br/>

          <h3>Accordion with Initial Expanded Item</h3>
          <AccordionComponent
            items={[
              { title: "Accordion Item #1", content: "This is the first item's accordion body.", expanded: true },
              { title: "Accordion Item #2", content: "This is the second item's accordion body." },
              { title: "Accordion Item #3", content: "This is the third item's accordion body." },
            ]}
          />

          <br/>

          <SnippetViewer
            snippet={`<AccordionComponent
  items={[
    { title: "Accordion Item #1", content: "This is the first item's accordion body.", expanded: true },
    { title: "Accordion Item #2", content: "This is the second item's accordion body." },
    { title: "Accordion Item #3", content: "This is the third item's accordion body." },
  ]}
/>`}
          />

          <br/>

          <h3>Accordion with Mixed Content</h3>
          <AccordionComponent
            items={[
              {
                title: "Accordion Item #1",
                content: "This is the first item's accordion body.",
                expanded: true,
                titleTemplate: <strong>Custom Header #1</strong>,
                contentTemplate: <em>This is the first item&apos;s accordion body with a custom header.</em>,
              },
              {
                title: "Accordion Item #2",
                content: "This is the second item's accordion body.",
              },
            ]}
          />

          <br/>

          <SnippetViewer
            snippet={`<AccordionComponent
  items={[
    {
      expanded: true,
      titleTemplate: <strong>Custom Header #1</strong>,
      contentTemplate: <em>This is the first item's accordion body with a custom header.</em>,
    },
    {
      title: "Accordion Item #2",
      content: "This is the second item's accordion body.",
    },
  ]}
/>`}
          />

          <br/>

          <h3>Accordion Builder</h3>
      <p>Use the Accordion Builder to create your own accordion items.</p>
      <div className="accordion-builder-container">
        <div className="accordion-builder-form">
          <input
            type="text"
            className="accordion-builder-input"
            placeholder="Title"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            style={{ flex: 1 }}
          />
          <input
            type="text"
            className="accordion-builder-input"
            placeholder="Content"
            value={newContent}
            onChange={e => setNewContent(e.target.value)}
            style={{ flex: 2 }}
          />
        </div>
        <div className="accordion-builder-form">
          <textarea
            className="accordion-builder-input"
            placeholder="Header Template (HTML/JSX)"
            value={newHeaderTemplate}
            onChange={e => setNewHeaderTemplate(e.target.value)}
            rows={2}
            style={{ flex: 1 }}
          />
          <textarea
            className="accordion-builder-input"
            placeholder="Body Template (HTML/JSX)"
            value={newContentTemplate}
            onChange={e => setNewBodyTemplate(e.target.value)}
            rows={2}
            style={{ flex: 2 }}
          />
          <button className="accordion-builder-add-btn" onClick={handleAddItem}>Add</button>
        </div>
        <ul className="accordion-builder-list">
          {builderItems.map((item, idx) => (
            <li className="accordion-builder-list-item" key={idx}>
              <strong>{item.title}</strong>
              <button
                className="accordion-builder-remove-btn"
                onClick={() => handleRemoveItem(idx)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <AccordionComponent items={builderItems.map(item => ({
    ...item,
    titleTemplate: item.titleTemplate
      ? <span dangerouslySetInnerHTML={{ __html: item.titleTemplate }} />
      : undefined,
    contentTemplate: item.contentTemplate
      ? <span dangerouslySetInnerHTML={{ __html: item.contentTemplate }} />
      : undefined,
  }))} />
      <br/>
      <SnippetViewer snippet={builderSnippet} />
          
    </div>
  );
}