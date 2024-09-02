import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Create() {

  const [data, setData]= useState({
    title: "",
    author: "",
    body: ""
  })

  const handlechange = (e)=> {
    const {name, value} = e.target;
    setData ((prev) => {
      return {...prev, [name]:value}
  })

  }

  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title:</Form.Label>
        <Form.Control  name="title" type="title" onChange={handlechange} placeholder="Enter the tittle" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Author:</Form.Label>
        <Form.Control name="author" type="author" onChange={handlechange} placeholder="Enter  author name" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea"  name="body" rows={3} onChange={handlechange} placeholder="Enter body" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <button variant="primary" type ="submit">Save blog</button>
        <p>{data.title}</p>
        <p>{data.author}</p>
        <p>{data.body}</p>

      </Form.Group>
    </Form>
    </div>
  );
}

export default Create;
