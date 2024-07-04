/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
export default function Single_Post(props) {

  return (
    <div className="single-post">
      <Link href={props.url}>
        <a>
          <img src={props.imageUrl} alt="" />
          <p>{props.from}</p>
          <h4>{props.title}</h4>
          <h4><span>Posted By:{" "}<span className="author-name">{props.author}</span></span></h4>
          <p>{props.desc}</p>
          <h4><span>{props.date}</span></h4>
        </a>
      </Link>
    </div>
  )
}
