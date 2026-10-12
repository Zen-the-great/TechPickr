
import React, { useMemo, useState } from 'react';

const components = [
  {
    name: 'Balanced Gaming PC',
    type: 'Gaming',
    cpu: 'AMD Ryzen 5 7600',
    gpu: 'NVIDIA GeForce RTX 4060',
    ram: '16 GB DDR5',
    storage: '1 TB NVMe SSD',
    price: 85000,
    description: 'A balanced starting point for 1080p gaming and everyday work.'
  },
  {
    name: 'Performance Gaming PC',
    type: 'Gaming',
    cpu: 'AMD Ryzen 7 7700',
    gpu: 'NVIDIA GeForce RTX 4070',
    ram: '32 GB DDR5',
    storage: '1 TB NVMe SSD',
    price: 135000,
    description: 'More graphics power for demanding games and creative workloads.'
  },
  {
    name: 'Productivity PC',
    type: 'Productivity',
    cpu: 'Intel Core i5 class',
    gpu: 'Integrated graphics',
    ram: '16 GB DDR5',
    storage: '1 TB SSD',
    price: 55000,
    description: 'A practical starting point for study, office work and programming.'
  },
  {
    name: 'Creator Workstation',
    type: 'Creator',
    cpu: 'AMD Ryzen 9 class',
    gpu: 'NVIDIA GeForce RTX class',
    ram: '32 GB RAM',
    storage: '2 TB NVMe SSD',
    price: 180000,
    description: 'A configurable concept for video editing and heavier creative tasks.'
  }
];

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);

export default function App() {
  const [budget, setBudget] = useState('100000');
  const [purpose, setPurpose] = useState('Gaming');
  const [searched, setSearched] = useState(false);

  const recommendations = useMemo(() => {
    const amount = Number(budget);
    if (!Number.isFinite(amount) || amount <= 0) return [];

    return components
      .filter((pc) => pc.type === purpose && pc.price <= amount)
      .sort((a, b) => b.price - a.price);
  }, [budget, purpose]);

  function handleSubmit(event) {
    event.preventDefault();
    setSearched(true);
  }

  return (
    <div className="app-shell">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="TechPickr home">
          <span className="brand-icon">T</span>
          <span>Tech<span className="brand-accent">Pickr</span></span>
        </a>

        <nav className="nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#finder">PC Finder</a>
          <a href="#about">About</a>
        </nav>

        <a className="nav-cta" href="#finder">Find my PC ↗</a>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              YOUR SMARTER PC-BUILDING ASSISTANT
            </div>

            <h1>
              Your budget.
              <br />
              Your needs.
              <br />
              <span className="gradient-text">Your perfect PC.</span>
            </h1>

            <p className="hero-description">
              Stop guessing which components to buy. Discover PC build ideas
              tailored to your budget, goals and performance needs.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#finder">
                Find my build <span>→</span>
              </a>
              <a className="button button-secondary" href="#how-it-works">
                How it works
              </a>
            </div>

            <div className="hero-points">
              <span>✓ Budget-focused suggestions</span>
              <span>✓ Clear component details</span>
              <span>✓ Beginner-friendly</span>
            </div>
          </div>

          <div className="pc-visual" aria-label="Illustration of a gaming PC">
            <div className="visual-glow" />
            <div className="pc-case">
              <div className="case-top" />
              <div className="case-glass">
                <div className="fan fan-one"><span /></div>
                <div className="fan fan-two"><span /></div>
                <div className="fan fan-three"><span /></div>
                <div className="gpu">
                  <span className="gpu-light" />
                  <span className="gpu-label">TECHPICKR</span>
                </div>
                <div className="ram-stick ram-one" />
                <div className="ram-stick ram-two" />
              </div>
              <div className="case-front">
                <div className="front-line" />
                <div className="front-line" />
                <div className="front-line" />
              </div>
              <div className="case-base" />
            </div>
            <div className="floating-card floating-card-top">
              <span className="mini-icon">⚡</span>
              <span>
                <strong>Smart choices</strong>
                <small>Made for your budget</small>
              </span>
            </div>
            <div className="floating-card floating-card-bottom">
              <span className="mini-check">✓</span>
              <span>
                <strong>Build with purpose</strong>
                <small>Spend where it matters</small>
              </span>
            </div>
          </div>
        </section>

        <section className="stats-strip" aria-label="TechPickr benefits">
          <div><strong>01</strong><span>Choose your budget</span></div>
          <div><strong>02</strong><span>Tell us your purpose</span></div>
          <div><strong>03</strong><span>Explore a build idea</span></div>
        </section>

        <section className="finder-section" id="finder">
          <div className="section-heading">
            <span className="section-kicker">THE PC FINDER</span>
            <h2>Find a build that fits <span className="gradient-text">you.</span></h2>
            <p>Start with your budget and what you want to do with your PC.</p>
          </div>

          <form className="finder-card" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="budget">What's your budget? (INR)</label>
              <div className="budget-input">
                <span>₹</span>
                <input
                  id="budget"
                  type="number"
                  min="1"
                  step="1000"
                  value={budget}
                  onChange={(event) => {
                    setBudget(event.target.value);
                    setSearched(false);
                  }}
                  placeholder="Enter budget"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="purpose">What will you use it for?</label>
              <select
                id="purpose"
                value={purpose}
                onChange={(event) => {
                  setPurpose(event.target.value);
                  setSearched(false);
                }}
              >
                <option value="Gaming">Gaming</option>
                <option value="Productivity">Study, work & programming</option>
                <option value="Creator">Content creation</option>
              </select>
            </div>

            <button className="button button-primary finder-submit" type="submit">
              Find recommendations <span>→</span>
            </button>
          </form>

          {searched && (
            <div className="results-area" aria-live="polite">
              <h3>Your starting recommendations</h3>
              <p className="results-note">
                Illustrative build ideas only. Prices and specifications are
                not live retailer data; verify component compatibility and
                current prices before purchasing.
              </p>

              {recommendations.length > 0 ? (
                <div className="build-grid">
                  {recommendations.map((pc) => (
                    <article className="build-card" key={pc.name}>
                      <div className="build-card-top">
                        <span className="build-tag">{pc.type}</span>
                        <span className="build-mark">TP</span>
                      </div>
                      <h4>{pc.name}</h4>
                      <p>{pc.description}</p>
                      <div className="build-price">{formatPrice(pc.price)}</div>
                      <div className="component-list">
                        <div><span>CPU</span><strong>{pc.cpu}</strong></div>
                        <div><span>GPU</span><strong>{pc.gpu}</strong></div>
                        <div><span>Memory</span><strong>{pc.ram}</strong></div>
                        <div><span>Storage</span><strong>{pc.storage}</strong></div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <h4>No matching sample build found</h4>
                  <p>
                    Try increasing your budget or choosing another use case.
                    These are starter examples, not an exhaustive parts database.
                  </p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="how-section" id="how-it-works">
          <div className="section-heading">
            <span className="section-kicker">SIMPLE BY DESIGN</span>
            <h2>PC building, without the confusion.</h2>
            <p>A simpler starting point for making informed hardware choices.</p>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <span className="step-number">01</span>
              <h3>Set your budget</h3>
              <p>Begin with the amount you are comfortable spending.</p>
            </article>
            <article className="step-card">
              <span className="step-number">02</span>
              <h3>Choose your goal</h3>
              <p>Decide whether your priority is gaming, work or creation.</p>
            </article>
            <article className="step-card">
              <span className="step-number">03</span>
              <h3>Compare your options</h3>
              <p>Review component details before deciding what to buy.</p>
            </article>
          </div>
        </section>

        <section className="about-banner" id="about">
          <div>
            <span className="section-kicker">OUR IDEA</span>
            <h2>Better decisions start with better guidance.</h2>
            <p>
              TechPickr aims to make PC hardware easier to understand by
              bringing budget, use case and component information together.
            </p>
          </div>
          <a className="button button-primary" href="#finder">Try the PC Finder →</a>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-icon">T</span>
          <span>Tech<span className="brand-accent">Pickr</span></span>
        </a>
        <p>Build smarter. Buy better.</p>
        <span>© {new Date().getFullYear()} TechPickr · Project prototype</span>
      </footer>
    </div>
  );
}
