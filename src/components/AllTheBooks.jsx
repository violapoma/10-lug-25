import { Col, Container, Row, Form } from "react-bootstrap";

import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

import BookCard from "./BookCard";
import { useEffect, useState } from "react";

import '../assets/styles.css'

const booksByCategory = {
  fantasy,
  horror,
  history,
  romance,
  scifi,
};

function AllTheBooks() {

  // const category = horror;
  const [category, setCategory] = useState("horror");
  const [searchValue, setSearchValue] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(booksByCategory['horror'] || []); //libri da renderizzare a schermo

  if(!category)
    console.log('not found')

  useEffect(() => {
    const books = booksByCategory[category] || [];
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [category, searchValue]);

  const handleSelection = (evt) => {
    setCategory(evt.target.value);
  };

  const handleSearch = (evt) => {
    setSearchValue(evt.target.value);
  };

  return (
    <Container className="mt-4 py-2">
      <Form.Select
        aria-label="genre"
        value={category}
        onChange={handleSelection}
      >
        <option disabled hidden value="">
          Genres
        </option>
        <option value="fantasy">Fantasy 🧚‍♂️</option>
        <option value="history">History 🪖</option>
        <option value="horror">Horror 🧛‍♀️</option>
        <option value="romance">Romance 👩‍❤️‍💋‍👩</option>
        <option value="scifi">Sci-fi 👽</option>
      </Form.Select>

      <Form.Control
        className="my-3"
        type="text"
        placeholder="🕵️‍♀️ Search title here..."
        onChange={handleSearch}
      />

      <Row className="g-3 align-items-center">
        {filteredBooks.map((book) => (
          <Col xs={12} md={6} lg={4} key={book.asin}>
            <BookCard key={book.asin} book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
