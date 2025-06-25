import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import {
  FROM,
  TO,
  MovementType,
  ConsignorsName,
  ConsigneesName,
  VehicleType,
  MaterialType
} from './data/dropdowndata';

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
              <Form.Select name="from" value={formData.from} onChange={handleChange} required>
                <option value="">Select</option>
                {FROM.map((place, idx) => (
                  <option key={idx} value={place}>{place}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>TO *</Form.Label>
              <Form.Select name="to" value={formData.to} onChange={handleChange} required>
                <option value="">Select</option>
                {TO.map((place, idx) => (
                  <option key={idx} value={place}>{place}</option>
                ))}
              </Form.Select>
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
              <Form.Select name="consignorName" value={formData.consignorName} onChange={handleChange} required>
                <option value="">Select</option>
                {ConsignorsName.map((name, idx) => (
                  <option key={idx} value={name}>{name}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Consignor's GST No</Form.Label>
              <Form.Control name="consignorGST" value={formData.consignorGST} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Consignee's Name *</Form.Label>
              <Form.Select name="consigneeName" value={formData.consigneeName} onChange={handleChange} required>
                <option value="">Select</option>
                {ConsigneesName.map((name, idx) => (
                  <option key={idx} value={name}>{name}</option>
                ))}
              </Form.Select>
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
