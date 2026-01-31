'use client'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0a0a0a', color: 'white' }}>

      {/* HERO */}
      <section style={sectionStyle}>
        <h1 style={heroTitle}>Kranthi Kumar Vemuri</h1>
        <p style={heroSubtitle}>AI & Data Science Engineer</p>
        <p style={heroLocation}>Hyderabad, Telangana</p>
      </section>

      {/* ABOUT */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>About Me</h2>
        <p style={text}>
          Artificial Intelligence and Data Science graduate with hands-on experience
          in analytics, business intelligence, and real-world problem solving.
          Passionate about transforming data into actionable insights.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Experience</h2>

        <div style={card}>
          <h3>Data Scientist Intern – DRDO</h3>
          <p style={muted}>July 2025 – Present</p>
          <ul>
            <li>Worked on defense research datasets</li>
            <li>Performed EDA, feature engineering using Python</li>
            <li>Presented insights to senior scientists</li>
          </ul>
        </div>

        <div style={card}>
          <h3>Data Analyst Intern – Plain Works</h3>
          <p style={muted}>Jan 2025 – Jun 2025</p>
          <ul>
            <li>Built dashboards using Power BI & Looker Studio</li>
            <li>SQL & Python analysis on marketing datasets</li>
            <li>A/B testing and ROI optimization</li>
          </ul>
        </div>

        <div style={card}>
          <h3>Co-Founder & COO – FEED</h3>
          <p style={muted}>Nov 2024 – Present</p>
          <ul>
            <li>Scaled digital media startup</li>
            <li>25,000+ followers growth</li>
            <li>₹2,00,000 monthly revenue in 4 months</li>
          </ul>
        </div>
      </section>

      {/* SKILLS */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Skills</h2>
        <div style={skillsGrid}>
          {[
            'Python', 'SQL', 'Power BI', 'Looker Studio',
            'Microsoft Azure', 'EDA', 'A/B Testing',
            'Dashboarding', 'Business Analysis'
          ].map(skill => (
            <span key={skill} style={skillBadge}>{skill}</span>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Education</h2>
        <p style={text}>
          <strong>B.Tech – Artificial Intelligence & Data Science</strong><br />
          J.B. Institute of Engineering and Technology, Hyderabad<br />
          2021 – 2025 | CGPA: 7.0
        </p>
      </section>

      {/* CONTACT */}
      <section style={{ ...sectionStyle, paddingBottom: '80px' }}>
        <h2 style={sectionTitle}>Contact</h2>
        <p style={text}>📧 vemurikranthi3@gmail.com</p>
        <p style={muted}>Open to relocation</p>
      </section>

    </main>
  )
}

/* ---------- STYLES ---------- */

const sectionStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '80px 20px'
}

const heroTitle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  textAlign: 'center'
}

const heroSubtitle = {
  fontSize: '1.3rem',
  textAlign: 'center',
  marginTop: '10px',
  color: '#cccccc'
}

const heroLocation = {
  textAlign: 'center',
  marginTop: '6px',
  color: '#888888'
}

const sectionTitle = {
  fontSize: '2rem',
  marginBottom: '20px'
}

const text = {
  fontSize: '1.05rem',
  lineHeight: '1.7',
  color: '#dddddd'
}

const muted = {
  color: '#999999',
  fontSize: '0.9rem'
}

const card = {
  backgroundColor: '#111111',
  padding: '20px',
  borderRadius: '12px',
  marginBottom: '20px'
}

const skillsGrid = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px'
}

const skillBadge = {
  padding: '8px 14px',
  backgroundColor: '#1a1a1a',
  borderRadius: '20px',
  fontSize: '0.9rem'
}
