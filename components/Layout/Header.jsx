import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();
  return (
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-4">
                    <div className="logo">
                        <h2><Link href={"/"}><a>News Live</a></Link></h2>
                    </div>
                </div>
                <div className="col-md-8 col-8">
                    <div className="menu">
                        <ul>
                            <li className={router.pathname == "/" ? "active" : ""}>
                                <Link href={"/"}><a>Home</a></Link>
                            </li>
                            <li className={router.pathname == "/about" ? "active" : ""}>
                                <Link href={"/about"}><a>About</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
