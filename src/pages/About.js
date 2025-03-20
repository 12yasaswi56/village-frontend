import React from "react";
import "../pageCSS/About.css"; // Import CSS file

const About = () => {
    return (
        <div className="about-container">
            <h2>About Our Village Management Grievance</h2>
            <p>
                Welcome to the Complaint Management System! This platform allows users to submit complaints,
                and administrators can review and resolve them efficiently.
            </p>
            <h3>Features:</h3>
            <ul>
                <li>📩 Users can submit complaints with images.</li>
                <li>🛠️ Admin can review and update complaint status.</li>
                <li>📊 Track complaints from "Pending" to "Resolved".</li>
                <li>🔒 Secure authentication for admin access.</li>
            </ul>
            <h3>How It Works:</h3>
            <ol>
                <li>Users submit complaints with a description and image.</li>
                <li>Admins review and update the status.</li>
                <li>Users receive updates on complaint resolution.</li>
            </ol>
            <p>We are committed to providing a transparent and efficient system for issue resolution. 🚀</p>
        </div>
    );
};

export default About;
