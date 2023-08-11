import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormSelectRegion() {
  return (
    <FloatingLabel className='form-region ' controlId="floatingSelect" label="Select region">
      <Form.Select className='bg-dark text-white'>
        <option>All cities</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </FloatingLabel>
  );
}

export default FormSelectRegion;