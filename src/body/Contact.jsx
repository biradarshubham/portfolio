import '../App.css'

const Contact = () => {
  return (
    <div className="contact-container">
        <div className='contact-content'>
        <h1>Connect with me</h1>
      <h2>Get in touch</h2>
      <p>
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>
        </div>
      <form action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="b5c742a5-505f-4c55-901f-5045e5d20363"></input>
        <input type="text" placeholder="Enter your name" required/>
        <input type="email" placeholder="Enter your email"required />
        <textarea name="message" placeholder="Enter your message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
