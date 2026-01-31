'use client'

export default function Home() {
  return (
    <div style={{ background: '#0a0a0a', color: 'white' }}>

      {/* HERO */}
      <section style={section}>
        <h1 style={h1}>Kranthi Kumar Vemuri</h1>
        <p style={subtitle}>AI & Data Science Engineer</p>
        <p style={muted}>Hyderabad, Telangana</p>
      </section>

      {/* ABOUT */}
      <section style={section}>
        <h2 style={h2}>About Me</h2>
        <p style={text}>
          Artificial Intelligence and Data Science graduate with experience in analytics,
          business intelligence, and data-driven problem solving.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section style={section}>
        <h2 style={h2}>Experience</h2>

        <div style={card}>
          <h3>Data Scientist Intern – DRDO</h3>
          <p style={muted}>July 2025 – Present</p>
          <ul>
            <li>Defense research data analysis</li>
            <li>EDA & feature engineering using Python</li>
            <li>Presented insights to senior scientists</li>
          </ul>
        </div>

        <div style={card}>
          <h3>Data Analyst Intern – Plain Works</h3>
          <p style={muted}>Jan 2025 – Jun 2025</p>
          <ul>
            <li>Power BI & Looker dashboards</li>
            <li>SQL & Python analysis</li>
            <li>A/B testing & ROI optimization</li>
          </ul>
        </div>

        <div style={card}>
          <h3>Co-Founder & COO – FEED</h3>
          <p style={muted}>Nov 2024 – Present</p>
          <ul>
            <li>Scaled a digital media startup</li>
            <li>25,000+ followers</li>
            <li>₹2,00,000 monthly revenue</li>
          </ul>
        </div>
      </section>

      {/* SKILLS */}
      <section style={section}>
        <h2 style={h2}>Skills</h2>
        <div style={skills}>
          {['Python','SQL','Power BI','Looker','Azure','EDA','A/B Testing'].map(s => (
            <span key={s} style={badge}>{s}</span>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section style={section}>
        <h2 style={h2}>Education</h2>
        <p style={text}>
          <strong>B.Tech – AI & Data Science</strong><br/>
          J.B. Institute of Engineering and Technology, Hyderabad<br/>
          2021 – 2025 | CGPA: 7.0
        </p>
      </section>

      {/* CONTACT */}
      <section style={section}>
        <h2 style={h2}>Contact</h2>
        <p style={text}>📧 vemurikranthi3@gmail.com</p>
        <p style={muted}>Open to relocation</p>
      </section>

    </div>
  )
}

/* STYLES */

const section = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '80px 20px'
}

const h1 = { fontSize: '3rem', textAlign: 'center' }
const h2 = { fontSize: '2rem', marginBottom: '20px' }
const subtitle = { textAlign: 'center', color: '#ccc', marginTop: '10px' }
const muted = { color: '#888', marginTop: '6px' }
const text = { color: '#ddd', lineHeight: '1.7' }

const card = {
  background: '#111',
  padding: '20px',
  borderRadius: '12px',
  marginBottom: '20px'
}

const skills = { display: 'flex', flexWrap: 'wrap', gap: '10px' }
const badge = {
  background: '#1a1a1a',
  padding: '8px 14px',
  borderRadius: '20px',
  fontSize: '0.9rem'
}
