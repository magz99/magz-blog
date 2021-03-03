import * as React from "react"
import { Link } from "gatsby"



// markup
const Layout = (props) => {
    return (
        <>
            <header>
                <nav><Link to="/">Home</Link></nav>
            </header>
            <main>
                {props.children}
            </main>
            <footer><p>A footer!!!</p></footer>
        </>
    )
}

export default Layout
