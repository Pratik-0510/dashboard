import React, { useState } from 'react';
import axios from 'axios';
import './addpolicy.css';
const AddPolicyForm = () => {
  const [formData, setFormData] = useState({
    policyId: '',
    policyNumber: '',
    policyPeriod: '',
    policyName: '',
    sumInsured: '',
    premium: '',
    coverageType: '',
    keyFeatures: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const  handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Send form data to your backend
        const response = await axios.post('', formData);
        console.log(response.data); // Log the response from the server
        // Clear the form after successful submission
        setFormData({
          policyId: '',
          policyNumber: '',
          policyPeriod: '',
          policyName: '',
          sumInsured: '',
          premium: '',
          coverageType: '',
          keyFeatures: '',
          description: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    setFormData({
      policyId: '',
      policyNumber: '',
      policyPeriod: '',
      policyName: '',
      sumInsured: '',
      premium: '',
      coverageType: '',
      keyFeatures: '',
      description: ''
    });
  };

  return (
    <div className="form-container">
      <h2>Add New Policy</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Policy ID:</label>
          <input type="text" name="policyId" value={formData.policyId} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Policy Number:</label>
          <input type="text" name="policyNumber" value={formData.policyNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Policy Period:</label>
          <input type="text" name="policyPeriod" value={formData.policyPeriod} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Policy Name:</label>
          <input type="text" name="policyName" value={formData.policyName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Sum Insured:</label>
          <input type="text" name="sumInsured" value={formData.sumInsured} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Premium:</label>
          <input type="text" name="premium" value={formData.premium} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Coverage Type:</label>
          <input type="text" name="coverageType" value={formData.coverageType} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Key Features:</label>
          <textarea name="keyFeatures" value={formData.keyFeatures} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AddPolicyForm;
