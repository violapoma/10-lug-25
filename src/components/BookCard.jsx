import { useState, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
import "../assets/styles.css";
import MovingTitle from "./MovingTitle";

function BookCard({ book }) {
  const [selected, setSelected] = useState(false);
  const handleSelected = () => {
    setSelected(!selected);
  };

  // per testo che si muove; useRef non causa rendering al cambiamento, qui serve per misurare
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [shouldScroll, setShouldScroll] = useState(false);
  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;

    if (container && textEl) {
      if (textEl.scrollWidth > container.clientWidth) {
        setShouldScroll(true);
      }
    }
  }, [book.title]);

  return (
    <Card
      className={`cardStyle h-100 flex-row justify-content-between flex-md-column align-items-center p-2 ${
        selected && "selected"
      }`}
    >
      <Card.Img
        variant="top"
        src={book.img}
        className={`cardImg rounded-2 ${selected && "borderSelected"}`
      }
        onClick={handleSelected}
      />
      <Card.Body className="d-flex flex-column justify-content-around">
        <div>
          <MovingTitle title={book.title}/>
          {/* <Card.Title >
            <span >{book.title}</span>
          </Card.Title> */}
          <Card.Text className={`${selected && "text-end"}`}>
            Price: {book.price}€
          </Card.Text>
        </div>
        {selected && <CommentArea asin={book.asin} />}
      </Card.Body>
    </Card>
  );
}

export default BookCard;
