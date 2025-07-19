import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function SingleComment({ comment }) {
  return (
    <div >
      <div className="d-flex">
        <FontAwesomeIcon icon={faCircleUser} className="authorIcon" />
        <h2 className="commentAuthor fw-bold">{comment.author}</h2>
      </div>
      <div className="commentBody">
        <p >{comment.rate} ⭐️</p>
        <p >{comment.comment}</p>
      </div>
    </div>
  );
}

export default SingleComment;
