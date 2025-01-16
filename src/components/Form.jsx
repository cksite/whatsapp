import React, { useState } from "react";
import "./form.css"

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "+91", // Default prefix
    address: "",
    symptoms: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocusPhone = () => {
    if (!formData.phone.startsWith("+91")) {
      setFormData((prev) => ({
        ...prev,
        phone: "+91" + prev.phone,
      }));
    }
  };

  const handleSendMessage = () => {
    const { name, age, email, phone, address, symptoms } = formData;

    // Validation
    if (!phone || phone === "+91") {
      alert("Please enter a valid phone number!");
      return;
    }

    const message = `
      Hello! Here are the details submitted:
      Name: ${name}
      Age: ${age}
      Email: ${email}
      Phone: ${phone}
      Address: ${address}
      Symptoms: ${symptoms}
    `;

    const whatsappUrl = `https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank"); // Open WhatsApp with the message
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Submit Your Details</h2>
      <div style={{ marginBottom: "10px" }}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onFocus={handleFocusPhone}
          placeholder="Enter phone number"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        ></textarea>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Symptoms:</label>
        <textarea
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          placeholder="Describe your symptoms"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        ></textarea>
      </div>
      <button
        onClick={handleSendMessage}
        style={{
          padding: "10px 20px",
          backgroundColor: "#25D366",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Send Message
      </button>
    </div>
  );
};

export default Form;
