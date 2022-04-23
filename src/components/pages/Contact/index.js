import './index.css';
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';

function Contact() {
  const [valid, setValid] = useState(false);

  // const handleChange = (e) => {
  //   setValid({email: e.target.value});
  // };
  
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValid(true);
  };

  return (
    <div className="row">
      <Form noValidate validated={valid} onSubmit={handleSubmit} className='col-4'>
        <Form.Group className="mb-3" controlId="">
          <Form.Control required type="email" placeholder="Email" />
          <Form.Control.Feedback type="invalid">
            Please provide a email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" controlId="">
          <Form.Control required type='text' placeholder="Subject" />
          <Form.Control.Feedback type="invalid">
            Please add a subject.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-5" controlId="">
          <Form.Control required as='textarea' rows={5} placeholder="Message" />
          <Form.Control.Feedback type="invalid">
            Please do not leave the message blank.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="light" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
