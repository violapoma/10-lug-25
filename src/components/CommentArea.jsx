import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

function CommentArea({ asin }) {
  const commentsEP = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments`;
  // const EPCommentsEnd = '';
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhOThmNDRlZjFiYzAwMTVkZjViMDciLCJpYXQiOjE3NTI4NTg3OTcsImV4cCI6MTc1NDA2ODM5N30.Iexw1r0IgvrJPt8gS77eGTcWAPRBZrGO-PR78v0dy3o";

  const [comments, setComments] = useState([]);

  const [average, setAverage] = useState(0);

  function fetchComments() {
    fetch(commentsEP, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((comments) => {
        setComments(comments);
        setAverage(averageRating(comments));
      });
  }

  useEffect(() => {
    fetchComments()
  }, []);

  function averageRating(comments){
    const howMany = comments.length; 
    const ratingsSum = comments.reduce((acc, comment) => acc+comment.rate, 0);
    return ratingsSum / howMany; 
  }


  return (
    <>
      {comments.length > 0 && <p>⭐️ {average.toFixed(1)} / 5</p>}
      <AddComment asin={asin} token={token} />

      {comments.length == 0 ? (
        <h2>🤷‍♀️ Still no comments 🤷‍♀️</h2>
      ) : (
        
        <CommentList asin={asin} comments={comments} />
      )}
    </>
  );
}

export default CommentArea;
