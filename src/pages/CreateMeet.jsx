
import React, { useState } from "react";
import Header from "../components/Header";

const CreateMeet = () => {
  const [formData, setFormData] = useState({
    title: "",
    host: "",
    details: "",
    tags: [],
    started: "",
    ended: "",
    address: "",
    type: "Offline",
    price: 0,
    speakers: [{ name: "", image: "" }],
    dressCode: "None",
    ageRestrictions: "No age restriction",
    coverImage: "",
  });

  const tagOptions = [
    "Workshop",
    "Lecture",
    "Hackathon",
    "Tech Talk",
    "Creative Writing",
    "Photography",
    "Video Editing",
    "Art Jam",
    "Yoga",
    "Meditation",
    "Life Coaching",
    "Trivia",
    "Outdoor Adventure",
    "Volunteering",
    "Community Cleanup",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "price") {
      setFormData((prev) => ({ ...prev, [name]: parseInt(value) || 0 }));
    } else if (name === "tags") {
      const selected = Array.from(e.target.selectedOptions, (opt) => opt.value);
      setFormData((prev) => ({ ...prev, tags: selected }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSpeakerChange = (index, field, value) => {
    const updated = [...formData.speakers];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, speakers: updated }));
  };

  const addSpeaker = () => {
    setFormData((prev) => ({
      ...prev,
      speakers: [...prev.speakers, { name: "", image: "" }],
    }));
  };

  const removeSpeaker = (index) => {
    if (formData.speakers.length <= 1) return;
    setFormData((prev) => ({
      ...prev,
      speakers: prev.speakers.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 🔁 Replace with your actual API endpoint
      const response = await fetch("https://bi-assignment-1-backend-one.vercel.app/meets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to create meeting");

      const data = await response.json();
      console.log("Success:", data);
      alert("Meeting created successfully!");
      // Optional: reset form or redirect
    } catch (err) {
      console.error(err);
      alert("Error creating meeting. Please try again.");
    }
  };

  return (
    <>
    <Header/>
    <main className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-danger text-white">
              <h2 className="h4 mb-0">Create New Meeting</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Host */}
                <div className="mb-3">
                  <label htmlFor="host" className="form-label">Host *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="host"
                    name="host"
                    value={formData.host}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Details */}
                <div className="mb-3">
                  <label htmlFor="details" className="form-label">Details *</label>
                  <textarea
                    className="form-control"
                    id="details"
                    name="details"
                    rows="3"
                    value={formData.details}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Tags */}
                <div className="mb-3">
                  <label htmlFor="tags" className="form-label">
                    Tags * <small className="text-muted">(Hold Ctrl/Cmd to select multiple)</small>
                  </label>
                  <select
                    className="form-select"
                    id="tags"
                    name="tags"
                    multiple
                    value={formData.tags}
                    onChange={handleInputChange}
                    required
                    size="5"
                  >
                    {tagOptions.map((tag) => (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Start & End Time */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="started" className="form-label">Start Time *</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="started"
                      name="started"
                      value={formData.started}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="ended" className="form-label">End Time *</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="ended"
                      name="ended"
                      value={formData.ended}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Type */}
                <div className="mb-3">
                  <label htmlFor="type" className="form-label">Type *</label>
                  <select
                    className="form-select"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                  </select>
                </div>

                {/* Price */}
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Price ($)*</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    min="0"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Speakers */}
                <div className="mb-4">
                  <label className="form-label">Speakers *</label>
                  {formData.speakers.map((speaker, index) => (
                    <div key={index} className="border rounded p-3 mb-3 bg-light">
                      <div className="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Speaker Name"
                          value={speaker.name}
                          onChange={(e) => handleSpeakerChange(index, "name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          type="url"
                          className="form-control"
                          placeholder="Image URL"
                          value={speaker.image}
                          onChange={(e) => handleSpeakerChange(index, "image", e.target.value)}
                          required
                        />
                      </div>
                      {formData.speakers.length > 1 && (
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => removeSpeaker(index)}
                        >
                          Remove Speaker
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn btn-outline-success btn-sm"
                    onClick={addSpeaker}
                  >
                    + Add Speaker
                  </button>
                </div>

                {/* Dress Code */}
                <div className="mb-3">
                  <label htmlFor="dressCode" className="form-label">Dress Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="dressCode"
                    name="dressCode"
                    value={formData.dressCode}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Age Restrictions */}
                <div className="mb-3">
                  <label htmlFor="ageRestrictions" className="form-label">Age Restrictions</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ageRestrictions"
                    name="ageRestrictions"
                    value={formData.ageRestrictions}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Cover Image */}
                <div className="mb-3">
                  <label htmlFor="coverImage" className="form-label">Cover Image URL *</label>
                  <input
                    type="url"
                    className="form-control"
                    id="coverImage"
                    name="coverImage"
                    value={formData.coverImage}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-danger btn-lg">
                    Create Meeting
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default CreateMeet;