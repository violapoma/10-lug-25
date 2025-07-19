import SingleComment from "./SingleComment";

function CommentList({ asin, comments }) {
  return (
    <div className="commentList overflow-y-scroll mt-3">
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            <SingleComment comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
