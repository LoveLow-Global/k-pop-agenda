import React, { useEffect } from 'react'

function App() {
  // Simple intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="hero">
        <div className="container">
          <h1>
            K-Pop Agenda Dynamics: <br />
            <span className="gradient-text">Information Diffusion & Sentiment Shift</span>
          </h1>
          <p>
            An AI-driven analysis of how different types of celebrity news spread and shape public opinion on anonymous online communities.
          </p>
          <p className="scroll-indicator">Scroll to discover ↓</p>
        </div>
      </header>

      <main>
        {/* The Question */}
        <section className="container">
          <div className="glass-card animate-on-scroll">
            <h2 className="gradient-text">The Core Question</h2>
            <p>
              In the fast-paced world of K-Pop, news breaks daily. But how does the <strong>type</strong> of news affect how quickly it spreads and how the community reacts?
            </p>
            <p>
              We analyzed over 13,500 anonymous community posts to determine if controversies burn faster than professional updates, and how public sentiment violently shifts in response.
            </p>
          </div>
        </section>

        {/* Methodology (Image 1) */}
        <section className="container">
          <div className="animate-on-scroll">
            <h2 className="gradient-text" style={{ textAlign: 'center' }}>Methodology</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
              Using a Hybrid Zero-Shot BERTopic and HuggingFace NLP pipeline to categorize news and gauge sentiment.
            </p>
            <div className="full-width-image glass-card" style={{ marginTop: '2rem' }}>
              <img src="/PPT_image1.png" alt="Research Workflow Diagram" />
            </div>
          </div>
        </section>

        {/* Finding 1: Diffusion (Image 2) */}
        <section className="container">
          <div className="grid-2-col animate-on-scroll">
            <div className="content">
              <h2 className="gradient-text">Finding 1: Diffusion Speed</h2>
              <p>
                Not all news travels at the same speed. Our time-series analysis tracked the "Attention Ratio" to find the exact peak day of public interest following a news article.
              </p>
              <ul>
                <li><strong>Controversies</strong> are "fast-burning," peaking in just ~2.4 days.</li>
                <li><strong>Professional Updates</strong> are "slow-building," taking ~5.6 days to reach peak attention.</li>
                <li><strong>Relational News</strong> sits in the middle, peaking around ~2.7 days.</li>
              </ul>
            </div>
            <div className="image-container glass-card">
              <img src="/PPT_image2.png" alt="Peak Attention Bar Chart" />
            </div>
          </div>
        </section>

        {/* Finding 2: Sentiment (Image 3) */}
        <section className="container">
          <div className="grid-2-col reversed animate-on-scroll">
            <div className="content">
              <h2 className="gradient-text">Finding 2: Sentiment Shifts</h2>
              <p>
                How does the community's mood change after the news drops? We measured the shift in sentiment scores (from -1.0 to 1.0) before and after the stimulus.
              </p>
              <ul>
                <li><strong>Professional</strong> news consistently yields negative sentiment shifts (-0.25 on average), perhaps failing to meet high fan expectations.</li>
                <li><strong>Controversies and Romance</strong> exhibit extreme volatility, triggering massive polarization in the community.</li>
              </ul>
            </div>
            <div className="image-container glass-card">
              <img src="/PPT_image3.png" alt="Sentiment Shift Boxplot" />
            </div>
          </div>
        </section>

        {/* Takeaways */}
        <section className="container">
          <div className="glass-card animate-on-scroll" style={{ textAlign: 'center' }}>
            <h2 className="gradient-text">Key Takeaways for PR Strategy</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              Understanding these dynamics allows for data-driven crisis management.
            </p>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div style={{ flex: '1', minWidth: '250px', padding: '1.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px' }}>
                <h3 style={{ color: 'var(--accent-color)' }}>Respond Quickly to Controversy</h3>
                <p>With attention peaking in just 2.4 days, PR teams have a narrow 48-hour window to control the narrative.</p>
              </div>
              <div style={{ flex: '1', minWidth: '250px', padding: '1.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px' }}>
                <h3 style={{ color: 'var(--secondary-color)' }}>Expect Volatility</h3>
                <p>Anonymous platforms act as echo chambers; prepare for highly polarized, volatile reactions to relational news.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>© 2026 Jihyung Kim | K-Pop Agenda Dynamics Research</p>
        </div>
      </footer>
    </>
  )
}

export default App
