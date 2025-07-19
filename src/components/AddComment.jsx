import { useState } from "react";
import { Button, Form, Accordion} from "react-bootstrap";

function AddComment({ asin, token }) {
  const postEP = "https://striveschool-api.herokuapp.com/api/comments/";
  const [formData, setFormData] = useState({ elementId: asin });
  const [validated, setValidated] = useState(false);

  function postComment() {
    fetch(postEP, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((comment) => {
        console.log(comment);
      });
  }

  function clearFields() {}

  function submitData(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    const form = evt.currentTarget;

    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    setValidated(true);
    console.log(formData);

    postComment();

    // setTimeout(
    //   clearFields, 3000
    // );
  }

  function handleChanges(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  }

  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Leave a comment 📝</Accordion.Header>
          <Accordion.Body>
            <Form noValidate validated={validated} onSubmit={submitData}>
              <Form.Select
                aria-label="Rating"
                className="mb-3"
                name="rate"
                defaultValue=""
                onChange={handleChanges}
                required
              >
                <option disabled hidden value="">
                  Rating
                </option>
                <option value="1">1 ⭐️</option>
                <option value="2">2 ⭐️</option>
                <option value="3">3 ⭐️</option>
                <option value="4">4 ⭐️</option>
                <option value="5">5 ⭐️</option>
              </Form.Select>

              <Form.Group>
                <Form.Control
                  as="textarea"
                  aria-label="comment"
                  name="comment"
                  placeholder="Your Comment Here"
                  onChange={handleChanges}
                  required
                />
              </Form.Group>

              <Button type="submit" className="mt-2 submitBtn">
                Submit
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default AddComment;
