// import React, { useEffect, useState } from "react";
// import "../pageCSS/Complaints.css";
// const Complaints = () => {
//     const [complaints, setComplaints] = useState([]);

//     useEffect(() => {
//         fetch("http://localhost:5000/complaints/pending")
//             .then(res => res.json())
//             .then(data => setComplaints(data))
//             .catch(error => console.error("Error fetching complaints:", error));
//     }, []);

//     return (
//         <div>
//             <h2>Pending Complaints</h2>
//             <ul>
//                 {complaints.length === 0 ? (
//                     <p>No pending complaints.</p>
//                 ) : (
//                     complaints.map(complaint => (
//                         <li key={complaint._id}>
//                             <p><strong>Complaint:</strong> {complaint.text}</p>
//                             {complaint.imageUrl && (
//                                 <img src={`http://localhost:5000${complaint.imageUrl}`} alt="Complaint" width="100" />
//                             )}
//                             <p><strong>Status:</strong> {complaint.status}</p>
//                         </li>
//                     ))
//                 )}
//             </ul>
//         </div>
//     );
// };

// export default Complaints;


import React, { useEffect, useState } from "react";
import "../pageCSS/Complaints.css"; // Importing external CSS file

const Complaints = () => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        fetch("https://village-backend-16uk.onrender.com/complaints/pending")
            .then(res => res.json())
            .then(data => setComplaints(data))
            .catch(error => console.error("Error fetching complaints:", error));
    }, []);

    return (
        <div className="container">
            {/* <h2>Pending Complaints</h2> */}
            <div className="complaint-list">
                {complaints.length === 0 ? (
                    <p>No pending complaints.</p>
                ) : (
                    complaints.map(complaint => (
                        <div key={complaint._id} className="complaint-item">
                            {complaint.imageUrl && (
                                <img
                                    className="complaint-image"
                                    src={`https://village-backend-16uk.onrender.com/${complaint.imageUrl}`}
                                    alt="Complaint"
                                />
                            )}
                            <div className="complaint-text">
                                <p><strong>Complaint:</strong> {complaint.text}</p>
                                <p className="status">Status: {complaint.status}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Complaints;
