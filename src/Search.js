import React from "react";
import { Form, Col } from "react-bootstrap";

export default function Search({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            onChange={onParamChange}
            name="description"
            value={params.description}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            onChange={onParamChange}
            name="location"
            value={params.location}
          />
        </Form.Group>
        <Form.Group as={Col} xs="auto">
          <Form.Check
            id="full-time"
            className="mb-2"
            label="Only Full Time Jobs"
            type="checkbox"
            onChange={onParamChange}
            name="full_time"
            value={params.full_time}
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
