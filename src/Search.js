import React from "react";
import { Form, Col } from "react-bootstrap";

export default function Search({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            onChange={onParamChange}
            name="description"
            value={params.description}
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
