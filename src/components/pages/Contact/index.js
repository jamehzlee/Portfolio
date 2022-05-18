import './index.css';
import { Form, Button } from 'react-bootstrap';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [valid, setValid] = useState(false);
  const refForm = useRef();
  
  const sendEmail = (e) => {
    emailjs
      .sendForm('service_b32cnvg', 'template_kz0n9wn', refForm.current, '0DQLz8bRtTvmQgTKL')
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    setValid(true);
    console.log(form);
    sendEmail(form)
  };


  return (
    <div className="row">
      <Form ref={refForm} noValidate validated={valid} onSubmit={handleSubmit} className='col-4'>
        <Form.Group className="mb-3">
          <Form.Control required type="email" name='user_email' placeholder="Email" />
          <Form.Control.Feedback type="invalid">
            Please provide a email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Control required type='text' name='subject' placeholder="Subject" />
          <Form.Control.Feedback type="invalid">
            Please add a subject.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-5">
          <Form.Control required as='textarea' rows={5} name='message' placeholder="Message" />
          <Form.Control.Feedback type="invalid">
            Please do not leave the message blank.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="light" type="submit" value="Send">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
