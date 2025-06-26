import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import Select from 'react-select';
import { FaSearch } from 'react-icons/fa';
import { components } from 'react-select';
import {
  FROM,
  TO,
  MovementType,
  ConsignorsName,
  ConsigneesName,
  VehicleType,
  MaterialType
} from './data/dropdowndata';

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
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid #ced4da',
    boxShadow: 'none',
    borderRadius: 0,
    minHeight: '30px',
    fontSize: '14px',
    paddingLeft: 0,
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0 0 2px 0',
  }),
  indicatorsContainer: (base) => ({
    ...base,
    padding: '0 4px',
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
    <>
      <h3 className="mb-4">Create Bilty</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Consignment No *</Form.Label>
              <Form.Control name="consignmentNo" value={formData.consignmentNo} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Consignment Date *</Form.Label>
              <Form.Control type="date" name="consignmentDate" value={formData.consignmentDate} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Movement type *</Form.Label>
              <Form.Select name="movementType" value={formData.movementType} onChange={handleChange} required>
                <option value="">Select</option>
                {MovementType.map((type, idx) => (
                  <option key={idx} value={type}>{type}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>FROM *</Form.Label>
              <Select
                name="from"
                options={FROM.map((place) => ({ label: place, value: place }))}
                value={formData.from ? { label: formData.from, value: formData.from } : null}
                onChange={(selected) => handleSelectChange('from', selected)}
                isClearable
                components={{ DropdownIndicator }}
                styles={customSelectStyle}
                placeholder="Select location"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>TO *</Form.Label>
              <Select
                name="to"
                options={TO.map((place) => ({ label: place, value: place }))}
                value={formData.to ? { label: formData.to, value: formData.to } : null}
                onChange={(selected) => handleSelectChange('to', selected)}
                isClearable
                components={{ DropdownIndicator }}
                styles={customSelectStyle}
                placeholder="Select location"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Vehicle Type *</Form.Label>
              <Form.Select name="vehicleType" value={formData.vehicleType} onChange={handleChange} required>
                <option value="">Select</option>
                {VehicleType.map((type, idx) => (
                  <option key={idx} value={type}>{type}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Vehicle No *</Form.Label>
              <Form.Control name="vehicleNo" value={formData.vehicleNo} onChange={handleChange} required />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Consignor's Name *</Form.Label>
              <Select
                name="consignorName"
                options={ConsignorsName.map((name) => ({ label: name, value: name }))}
                value={formData.consignorName ? { label: formData.consignorName, value: formData.consignorName } : null}
                onChange={(selected) => handleSelectChange('consignorName', selected)}
                isClearable
                components={{ DropdownIndicator }}
                styles={customSelectStyle}
                placeholder="Select name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Consignor's GST No</Form.Label>
              <Form.Control name="consignorGST" value={formData.consignorGST} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Consignee's Name *</Form.Label>
              <Select
                name="consigneeName"
                options={ConsigneesName.map((name) => ({ label: name, value: name }))}
                value={formData.consigneeName ? { label: formData.consigneeName, value: formData.consigneeName } : null}
                onChange={(selected) => handleSelectChange('consigneeName', selected)}
                isClearable
                components={{ DropdownIndicator }}
                styles={customSelectStyle}
                placeholder="Select name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Consignee's GST No</Form.Label>
              <Form.Control name="consigneeGST" value={formData.consigneeGST} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control name="quantity" value={formData.quantity} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Material Type *</Form.Label>
              <Form.Select name="materialType" value={formData.materialType} onChange={handleChange} required>
                <option value="">Select</option>
                {MaterialType.map((type, idx) => (
                  <option key={idx} value={type}>{type}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Invoice No (Tata Invoice No)</Form.Label>
              <Form.Control name="invoiceNo" value={formData.invoiceNo} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>E-Way Bill No</Form.Label>
              <Form.Control name="ewayBillNo" value={formData.ewayBillNo} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>

      <Modal show={showPopup} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Duplicate LR No.</Modal.Title>
        </Modal.Header>
        <Modal.Body>This consignment number already exists. Please verify before submitting.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Okay</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BiltyForm;
