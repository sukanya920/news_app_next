import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
export default function Single_Post_Big(props) {
  return (
    <div className="single-post-big">
      <Link href={props.url}>
        <a>
          <div className="big-image">
            <img src={props.imageUrl} alt="" />
          </div>
          <div className="big-text">
            <div className="title-text">
              <p>{props.from}</p>
              <h3>{props.title}</h3>
              <p>{props.desc}</p>
            </div>
            <h4><span className="date">{props.date}</span><span className="author">Posted By: <span className="author-name">{props.author}</span></span></h4>
          </div>
        </a>
      </Link>
    </div>
  );
}
