import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function Create() {

  const [data, setData] = useState({
    title: "",
    author: "",
    body: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/blogs', data)
      .then(res => {
        toast.success('New blog added successfully!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        })
      })
      .catch(err => {
        toast.error('An error occurred while adding the blog', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        })
      })
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title:</Form.Label>
          <Form.Control name="title" type="text" onChange={handleChange} placeholder="Enter the title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Author:</Form.Label>
          <Form.Control name="author" type="text" onChange={handleChange} placeholder="Enter author name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" name="body" rows={3} onChange={handleChange} placeholder="Enter body" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Button variant="primary" type="submit">Submit Blog</Button>
        </Form.Group>
        <ToastContainer /> {/* Moved ToastContainer outside the form */}
      </Form>
    </div>
  );
}

export default Create;