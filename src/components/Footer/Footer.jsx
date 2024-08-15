import "./Footer.css";

export default function Footer(){
    
    return(
        <footer id="contact-container">
            <div className="contact container-70">
                <form action="/">
                    
                    <div className="form-info" id="contact">
                        <h2 class="contact-title">LET'S TALK!</h2>
                        <div className="contact-info">
                            <p>Email: cherryliu1227@gmail.com</p>
                            <p>Phone: +1 (647) 233-2456</p>
                            <p>Github: https://github.com/cherryliu27</p>
                        </div>
                    </div>
                    <div className="form-user">
                        <div className="field-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" placeholder="Eg. Emily Thompson"/>
                        </div>
                        <div className="field-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" placeholder="Eg. emilythompson@gmail.com"/>
                        </div>
                        <div className="field-group">
                            <label htmlFor="message">Message:</label>
                            <textarea rows="4" name="message" id="message" placeholder="You message here"></textarea>
                        </div>
                        <button className="contact-btn" type="submit">Contact Me</button>

                    </div>
                </form>
            </div>
        </footer>
    )
}

