class ContactUs extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="contact" id="contact">
            <div class="container">
                <h2>Contact Us</h2>
                <div class="row">
                <div class="col-md-8">
                    <h3>Contact Form</h3>
                    <form>
                    <div class="form-group">
                        <input type="text" class="form-control" id="nama" placeholder="Your Name">
                        <input type="email" class="form-control" id="email" placeholder="Email@example.com">
                        <input type="text" class="form-control" id="subject" placeholder="Subject">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" placeholder="Your Message"></textarea>
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </div>
                    </form>
                </div>
                <div class="col-md-3 offset-md-1 info">
                    
                    <ul>
                    <h3>Info</h3>
                    <li>
                        <i class="fab fa-whatsapp"></i>
                        <strong>Whatsapp :</strong><br>
                        <span>+628335630785</span>
                    </li>
                    <li>
                        <i class="far fa-paper-plane"></i>
                        <strong>Email :</strong><br>
                        <span>rofiqurrohman93@gmail.com</span>
                    </li>
                    <li>
                        <i class="fas fa-globe"></i>
                        <strong>Website :</strong><br>
                        <span>www.rofiqurrohman.com</span>
                    </li>
                    </ul>
                    <h3>Location </h3>
                    <p>Ngawi, Jawa Timur, Indonesia</p>
                </div>
                </div>
            </div>
        </div>
        `;
    }
 }
  
 customElements.define("contact-us", ContactUs);