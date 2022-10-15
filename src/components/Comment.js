import "./Comment.css";
import CommentDate from "./CommentDate";
import CommentUserInfo from "./CommentUserInfo";
import CommentWrapper from "./CommentWrapper";

function Comment({ date, author, text }) {
  return (
    <div className="Container">
      <CommentWrapper className="comment-first">
        <CommentUserInfo avatarUrl={author.avatarUrl} name={author.name} />
      </CommentWrapper>
      <CommentWrapper>
        <div className="Comment-text">
          {text}
          <CommentDate date={date} />
        </div>
      </CommentWrapper>
    </div>
  );
}
export default Comment;
