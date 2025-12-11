import React from 'react';
import './App.css';
import beforeImage from './assets/before-case-study.jpg';
import afterImage from './assets/after-case-study.png';

function App() {
  const philosophyPillars = [
    {
      title: '1. User-Centric Transformation',
      description: 'We shift the narrative from "what our product does" to "what you can achieve." Features are systematically reframed as user benefits.',
    },
    {
      title: '2. Benefit-Driven Storytelling',
      description: 'Every function is tied to a purpose. We answer the user\'s question—"What\'s in it for me?"—and guide them with a clear call to action.',
    },
    {
      title: '3. Embedded Professional Standards',
      description: 'Best practices are built-in. We enforce architectural consistency, promote "evergreen" content, and integrate your brand’s voice.',
    },
    {
      title: '4. Adaptive Intelligence',
      description: 'This is a partnership that learns. The AI adapts to expert feedback, evolving its understanding and getting smarter with every project.',
    },
  ];

  return (
    <div className="App">
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">UXClarity</h1>
          <p className="hero-subtitle">Your AI Partner in Crafting World-Class UX Copy</p>
          <p className="hero-description">
            UXClarity isn't just a tool; it's a collaborator. It works alongside you to transform dense, feature-focused text into clear, compelling, and value-driven copy that resonates with users everywhere.
          </p>
        </div>
      </header>

      <main>
        <section className="section philosophy-section">
          <h2 className="section-title">Our Philosophy: The Four Pillars of Clarity</h2>
          <div className="features-grid">
            {philosophyPillars.map((pillar, index) => (
              <div key={index} className="feature-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section workflow-section">
          <h2 className="section-title">Our Workflow: A Simple, Powerful Partnership</h2>
          <div className="workflow-steps">
            <div className="workflow-step">
              <h3>1. Prototype & Align</h3>
              <p>We start with a small, representative sample. This allows us to quickly align on the standard of "good" before scaling, ensuring no effort is wasted.</p>
            </div>
            <div className="workflow-step">
              <h3>2. Refine & Deepen</h3>
              <p>After alignment, the AI performs a full-scale optimization. The human expert then elevates the work from "good" to "great" through strategic feedback and deep-dive questions.</p>
            </div>
          </div>
        </section>

        <section className="section outcome-section">
          <h2 className="section-title">The Result: From Idea to Impact</h2>
          <div className="outcome-intro">
            <p>For our inaugural project with "Video One," this methodology transformed technical descriptions into a user-centric narrative that was immediately approved and praised by stakeholders. The visual before-and-after speaks for itself.</p>
          </div>
          <div className="comparison-container">
            <div className="image-wrapper">
              <h4>Before</h4>
              <img src={beforeImage} alt="Before UXClarity optimization" />
            </div>
            <div className="image-wrapper">
              <h4>UXClarity Optimization in Progress</h4>
              <img src={afterImage} alt="After UXClarity optimization" />
            </div>
          </div>
        </section>

        <section className="section contact-section">
          <h2 className="section-title">Get Involved</h2>
          <div className="contact-content">
            <p>This project is currently under active development. If you are interested in integrating UXClarity into your workflow, please contact us.</p>
            <a href="mailto:zhangzhiwei.x@bytedance.com" className="contact-button">Contact Us</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Project UXClarity | A Showcase of Human-AI Collaboration</p>
      </footer>
    </div>
  );
}

export default App;
