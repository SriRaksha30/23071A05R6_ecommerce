import React from "react";

const Contact = () => {
    return (
        <div style={{ maxWidth: 600, margin: "40px auto", padding: 24, background: "#f9f9f9", borderRadius: 8 }}>
            <h2>Contact</h2>
            <p>
                Have questions or want to join our study circle
            </p>
            <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <label>
                    Name:
                    <input type="text" name="name" required style={{ width: "100%", padding: 8, marginTop: 4 }} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required style={{ width: "100%", padding: 8, marginTop: 4 }} />
                </label>
                <label>
                    Message:
                    <textarea name="message" rows={4} required style={{ width: "100%", padding: 8, marginTop: 4 }} />
                </label>
                <button type="submit" style={{ padding: "10px 20px", background: "#1976d2", color: "#fff", border: "none", borderRadius: 4 }}>
                    Send Message
                </button>
            </form>
            <div style={{ marginTop: 32 }}>
                <h4>Contact Details</h4>
                <p>Email: <a href="kiki@gmail.com">kiki@gmail.com</a></p>
                <p>Phone: +91 98765 43210</p>
                <p>Address: 123 Study circle, hyderabad City, India</p>
            </div>
            <footer>
                <p >23071A05R6 @copyrights</p>
            </footer>
        </div>
    );
};

export default Contact;
/*
    Modified for eCommerce website context:
    - Update headings and text to reflect eCommerce contact.
    - Update contact details to generic eCommerce info.
*/

//
// Example: No additional code needed at the placeholder for this file.
// All modifications should be made above, within the component itself.
//