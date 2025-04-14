import React from 'react';

interface NotificationProps {
    show: boolean;
    type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    heading: string | React.ReactNode;
    message: string | React.ReactNode;
    dismissible?: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
}

const NotificationComponent: React.FC<NotificationProps> = ({ show, type, heading, message, children, dismissible, onClose }) => {
    return (
        <>
            {show && (
            <div className={`alert alert-${type} ${dismissible ? 'alert-dismissible fade show' : ''}`} role="alert">
                <h4 className="alert-heading">{heading}</h4>
                <p>{message}</p>
                {children && <div>{children}</div>}
                {dismissible && onClose && (
                <button type="button" className="btn-close" aria-label="Close" data-dismiss="alert"
                    onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    }}>
                </button>
                )}
            </div>)}
        </>

    );
};

export default NotificationComponent;