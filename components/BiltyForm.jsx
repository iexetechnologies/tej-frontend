import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import Select from 'react-select';
import { FaSearch } from 'react-icons/fa';
import { components } from 'react-select';
import './biltyform.css'; // Import the CSS file

import {
  FROM,
  TO,
  MovementType,
  ConsignorsName,
  ConsigneesName,
  VehicleType,
  MaterialType
} from '../assets/dropdowndata';

// 🔍 Custom Dropdown Indicator with Search Icon
const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <FaSearch style={{ fontSize: '14px', marginRight: 4 }} />
  </components.DropdownIndicator>
);

// 🎨 Slim Single-Line Custom Styles
const customSelectStyle = {
  control: (base) => ({
    ...base,
    backgroundColor: '#e8f0fe',
    border: '1px solid #ced4da',
    boxShadow: 'none',
    borderRadius: '5px',
    minHeight: '30px',
    fontSize: '13px',
    fontFamily: 'Times New Roman, serif',
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0 6px',
  }),
  indicatorsContainer: (base) => ({
    ...base,
    padding: '0 6px',
  }),
  placeholder: (base) => ({
    ...base,
    color: '#6c757d',
  }),
  singleValue: (base) => ({
    ...base,
    color: '#212529',
  }),
  menu: (base) => ({
    ...base,
    zIndex: 5,
  }),
};

const BiltyForm = () => {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    consignmentNo: '',
    consignmentDate: today,
    from: '',
    to: '',
    movementType: '',
    consignorName: '',
    consignorGST: '',
    consigneeName: '',
    consigneeGST: '',
    vehicleType: '',
    vehicleNo: '',
    quantity: '',
    materialType: '',
    invoiceNo: '',
    ewayBillNo: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (formData.consignmentNo === 'EXIST123') {
      setShowPopup(true);
    }
  }, [formData.consignmentNo]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name, selectedOption) => {
    setFormData({ ...formData, [name]: selectedOption ? selectedOption.value : '' });
  };

  const handleClose = () => setShowPopup(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted!');
  };

  return (
    <div className="bilty-page-container">
      <h3 className="mb-4 text-dark fw-bold  bg-white p-2 rounded shadow-sm text-center"> Create Bilty</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          {[
            ['Consignment No *', 'consignmentNo', 'text'],
            ['Consignment Date *', 'consignmentDate', 'date'],
            ['Movement Type *', 'movementType', 'select', MovementType],
            ['FROM *', 'from', 'selectSearch', FROM],
            ['TO *', 'to', 'selectSearch', TO],
            ['Vehicle Type *', 'vehicleType', 'select', VehicleType],
            ['Vehicle No *', 'vehicleNo', 'text'],
            ['Consignor\'s Name *', 'consignorName', 'selectSearch', ConsignorsName],
            ['Consignor\'s GST No', 'consignorGST', 'text'],
            ['Consignee\'s Name *', 'consigneeName', 'selectSearch', ConsigneesName],
            ['Consignee\'s GST No', 'consigneeGST', 'text'],
            ['Quantity', 'quantity', 'text'],
            ['Material Type *', 'materialType', 'select', MaterialType],
            ['Invoice No (Tata Invoice No)', 'invoiceNo', 'text'],
            ['E-Way Bill No', 'ewayBillNo', 'text']
          ].map(([label, name, type, options], idx) => (
            <Col md={4} key={name} className="mb-3">
              <Form.Group>
                <Form.Label className="label-bg">{label}</Form.Label>
                {type === 'text' || type === 'date' ? (
                  <Form.Control
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required={label.includes('*')}
                    className="form-control-sm bg-light"
                  />
                ) : type === 'select' ? (
                  <Form.Select
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required={label.includes('*')}
                    className="form-select-sm bg-light"
                  >
                    <option value="">Select</option>
                    {options.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </Form.Select>
                ) : (
                  <Select
                    name={name}
                    options={options.map((item) => ({ label: item, value: item }))}
                    value={formData[name] ? { label: formData[name], value: formData[name] } : null}
                    onChange={(selected) => handleSelectChange(name, selected)}
                    isClearable
                    components={{ DropdownIndicator }}
                    styles={customSelectStyle}
                    placeholder="Select"
                  />
                )}
              </Form.Group>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-3">
          <Button
            variant="primary"
            size="sm"
            className="fw-bold"
            style={{ width: '150px', fontSize: '15px' }}
          >
          Submit
          </Button>
        </div>

      </Form>

      <Modal show={showPopup} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">⚠ Duplicate LR No.</Modal.Title>
        </Modal.Header>
        <Modal.Body>This consignment number already exists. Please verify before submitting.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Okay</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BiltyForm;
