'use client';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#ffffff' }}>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 48, fontWeight: 'bold' }}>
          Kranthi Kumar Vemuri
        </h1>
        <p style={{ marginTop: 12, color: '#cccccc', fontSize: 20 }}>
          AI & Data Science Engineer
        </p>
        <p style={{ marginTop: 6, color: '#888888' }}>
          Hyderabad, Telangana
        </p>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{ fontSize: 32 }}>About Me</h2>
        <p style={{ color: '#dddddd', lineHeight: 1.7 }}>
          Artificial Intelligence and Data Science graduate with experience in analytics,
          business intelligence, and data-driven problem solving.
        </p>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{ fontSize: 32 }}>Experience</h2>

        <div style={card}>
          <strong>Data Scientist Intern – DRDO</strong>
          <p style={muted}>July 2025 – Present</p>
          <p>Defense research data analysis, EDA, Python-based insights.</p>
        </div>

        <div style={card}>
          <strong>Data Analyst Intern – Plain Works</strong>
          <p style={muted}>Jan 2025 – Jun 2025</p>
          <p>Power BI dashboards, SQL & Python analysis, A/B testing.</p>
        </div>

        <div style={card}>
          <strong>Co-Founder & COO – FEED</strong>
          <p style={muted}>Nov 2024 – Present</p>
          <p>Scaled digital media startup to ₹2,00,000 monthly revenue.</p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{ fontSize: 32 }}>Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {['Python', 'SQL', 'Power BI', 'Azure', 'EDA', 'A/B Testing'].map(skill => (
            <span key={skill} style={badge}>{skill}</span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{ fontSize: 32 }}>Education</h2>
        <p>
          <strong>B.Tech – AI & Data Science</strong><br />
          J.B. Institute of Engineering and Technology, Hyderabad<br />
          2021 – 2025 | CGPA: 7.0
        </p>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 20px 100px' }}>
        <h2 style={{ fontSize: 32 }}>Contact</h2>
        <p>📧 vemurikranthi3@gmail.com</p>
        <p style={muted}>Open to relocation</p>
      </div>

    </div>
  );
}

const card = {
  backgroundColor: '#111111',
  padding: 20,
  borderRadius: 12,
  marginTop: 20
};

const badge = {
  backgroundColor: '#1a1a1a',
  padding: '8px 14px',
  borderRadius: 20,
  fontSize: 14
};

const muted = {
  color: '#888888',
  fontSize: 14
};
