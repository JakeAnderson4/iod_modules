import './App.css'

function App() {
  return (
    <>
      <div className="page">
        <header>
          <h1>My Awesome Website</h1>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>

        <section className="hero">
          <h2>Welcome to My Awesome Website</h2>
          <p>Your one-stop solution for all your needs.</p>
          <button>Get Started</button>
        </section>

        <section className="features" id="features">
          <h2>Features</h2>
          <ul>
            <li>Feature 1: Amazing design</li>
            <li>Feature 2: User-friendly interface</li>
            <li>Feature 3: High performance</li>
          </ul>
        </section>
        
        const Testimonials = () = (
        <testimonials/>
      )
        <footer>
          <p>&copy; 2024 My Awesome Website. All rights reserved.</p>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </footer>
      </div>
    </>
  )
}


const testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
          <h2>What Our Users Say</h2>
          <div>
            <p>This website changed my life! - User A</p>
            <p>An absolute must-have for everyone. - User B</p>
          </div>
        </section>
  )
}


export default App