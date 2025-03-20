import React, { useEffect, useState } from "react";
import "../pageCSS/AdminComplaints.css"; // Import CSS file

const adminEmail = "yasaswikopparapu624@gmail.com"; // Change this to your admin's email

const AdminComplaints = () => {
    const [complaints, setComplaints] = useState([]);
    const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail") || ""); // Simulating user login
    const [loggedIn, setLoggedIn] = useState(!!userEmail);

    useEffect(() => {
        fetch("https://village-backend-16uk.onrender.com/complaints/pending")
            .then(res => res.json())
            .then(data => setComplaints(data))
            .catch(error => console.error("Error fetching complaints:", error));
    }, []);

    const handleLogin = () => {
        localStorage.setItem("userEmail", userEmail);
        setLoggedIn(true);
    };

    const updateStatus = (id, newStatus) => {
        if (userEmail !== adminEmail) {
            alert("Access Denied: Only Admin can update complaints!");
            return;
        }

        fetch(`https://village-backend-16uk.onrender.com/complaints/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: newStatus }),
        })
        .then(res => res.json())
        .then(updatedComplaint => {
            setComplaints(complaints.map(c => 
                c._id === updatedComplaint._id ? updatedComplaint : c
            ));
            alert("Complaint Status Updated!");
        })
        .catch(error => console.error("Error updating complaint:", error));
    };

    return (
        <div className="admin-container">
            <h2>Admin Dashboard</h2>

            {!loggedIn ? (
                <div className="login-container">
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            ) : (
                <>
                    <p>Logged in as: <strong>{userEmail}</strong></p>
                    {complaints.length === 0 ? (
                        <p>No pending complaints</p>
                    ) : (
                        <div className="complaints-grid">
                            {complaints.map((complaint) => (
                                <div key={complaint._id} className="complaint-box">
                                    <img src={`https://village-backend-16uk.onrender.com${complaint.imageUrl}`} alt="Complaint" />
                                    <p><strong>Complaint:</strong> {complaint.text}</p>
                                    <p><strong>Status:</strong> {complaint.status}</p>
                                    
                                    {userEmail === adminEmail && (
                                        <button onClick={() => updateStatus(complaint._id, "Resolved")}>
                                            Mark as Resolved
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default AdminComplaints;
