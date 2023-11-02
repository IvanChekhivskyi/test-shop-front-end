import React from "react";
import Link from "next/link";
const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <text className={"label"}>TEST SHOP</text>
                <li>
                    <Link href="/">Category</Link>
                </li>
                <li>
                    <Link href="/products">Products</Link>
                </li>
            </ul>
        </div>
    );
};
export default Navbar;