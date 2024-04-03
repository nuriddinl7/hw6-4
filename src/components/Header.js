import { useState } from "react"
import Form from "./Form"

const Header = () => {
    const [modal, setModal] = useState(false)
    return (
        <header className="header">
            <nav className="main_nav">
                <div>Logo</div>
                <div>
                    <ul>
                        <li>home</li>
                        <li>about us</li>
                        <li>login</li>
                        <li>contact</li>
                        <li>partners</li>
                        <li>profile</li>
                    </ul>
                </div>
                <button onClick={() => setModal(true)}>add produckt</button>
            </nav>
            {modal && <Form />}

        </header>
    )
}
export default Header