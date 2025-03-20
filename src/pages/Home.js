import React, { useState } from "react";
import axios from "axios";
import "../pageCSS/Home.css"; // Import the CSS file

const Home = () => {
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("text", text);
        if (image) formData.append("image", image);

        try {
            const response = await axios.post("https://village-backend-16uk.onrender.com/complaints", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("complaint submitted succesfully !!");
            console.log("Complaint submitted:", response.data);
            setText("");
            setImage(null);
        } catch (error) {
            console.error("Error submitting complaint", error);
        }
    };

    return (
        <div className="container">
            <div className="form-card">
                <h2>Submit a Complaint</h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter your complaint..."
                        required
                    />
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Home;
