'use client';
import React, { useState } from "react";
import "./notification.css";
import SnippetViewer from "@/app/UI/snippet-viewer/snippet-viewer";
import { NotificationComponent } from "../../../../../library/src";

export default function NotificationPageComponent() {
  const [notificationType, setNotificationType] = useState<'info' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark'>("info");
  const [notificationMessage, setNotificationMessage] = useState<string>("This is a notification message.");
  const [notificationHeading, setNotificationHeading] = useState<string>("Notification Title");
  const [notificationDismissible, setNotificationDismissible] = useState<boolean>(true);
  const [notificationShow, setNotificationShow] = useState<boolean>(true);

  const notificationSnippet = `
  <NotificationComponent
      show="${notificationShow}"
      type="${notificationType}"
      heading="${notificationHeading}" 
      message="${notificationMessage}"
      dismissible="${notificationDismissible}"
      onClose={() => setNotificationShow(false)}>
  </NotificationComponent>`;

  return (
    <div>

      <NotificationComponent
        show={notificationShow}
        type={notificationType}
        heading={notificationHeading}
        message={notificationMessage}
        dismissible={notificationDismissible}
        onClose={() => setNotificationShow(false)}>
      </NotificationComponent>

      {!notificationShow && (
        <button onClick={() => setNotificationShow(true)} className="btn btn-primary mt-2">
          Show Notification
        </button>
      )}

      <div className="notification-controls">
        <div className="form-group">
          <label htmlFor="notificationType">Notification Type</label>
          <select
            id="notificationType"
            className="form-control custom-select"
            value={notificationType}
            onChange={(e) => setNotificationType(e.target.value as 'info' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark')}
          >
            <option value="info">Info</option>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="success">Success</option>
            <option value="danger">Danger</option>
            <option value="warning">Warning</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="notificationMessage">Notification Message</label>
          <input
            type="text"
            id="notificationMessage"
            className="form-control"
            value={notificationMessage}
            onChange={(e) => setNotificationMessage(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="notificationHeading">Notification Heading</label>
          <input
            type="text"
            id="notificationHeading"
            className="form-control"
            value={notificationHeading}
            onChange={(e) => setNotificationHeading(e.target.value)}
          />
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            id="notificationDismissible"
            className="form-check-input"
            checked={notificationDismissible}
            onChange={(e) => setNotificationDismissible(e.target.checked)}
          />
          <label htmlFor="notificationDismissible" className="form-check-label">
            Dismissible
          </label>
        </div>
      </div>



      <SnippetViewer snippet={notificationSnippet} />
    </div>
  );
}