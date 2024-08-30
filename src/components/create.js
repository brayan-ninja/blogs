import Form from 'react-bootstrap/Form';

function Create() {
  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="title" placeholder="Enter the tittle" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Author:</Form.Label>
        <Form.Control type="author" placeholder="Enter  author name" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea"  rows={3} placeholder="Enter body" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <button variant="primary" type ="submit">Save blog</button>

      </Form.Group>
    </Form>
    </div>
  );
}

export default Create;