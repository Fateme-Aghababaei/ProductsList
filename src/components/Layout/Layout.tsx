import { Link, Outlet } from "react-router-dom";
import styles from './layout.module.css';

export default function Layout() {
    return (
        <div className={styles.container}>
            <div>
                <nav style={{ borderBottom: "1px solid black" }}>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li style={{ display: "inline-block", marginRight: "16px" }}>
                            <Link to={"/"}>Home</Link>
                        </li>

                        <li style={{ display: "inline-block", marginRight: "16px" }}>
                            <Link to={"/categories"}>Categories</Link>
                        </li>

                        <li style={{ display: "inline-block", marginRight: "16px" }}>
                            <Link to={"/add-product"}>Add Product</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={styles.children}>
                <Outlet />
            </div>


            <footer>
                <p>&copy; 2024 Products Website</p>
            </footer>
        </div>
    );
}