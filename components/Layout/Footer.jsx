import Link from "next/link"
import { useRouter } from "next/router";
export default function Footer() {
    const router = useRouter();
  return (
    <footer className="footer">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 col-12">
                    <div className="footer-menu">
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
                <div className="col-md-6 col-12">
                    <div className="footer-right">
                        <h4>Developed by Sukanya</h4>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
