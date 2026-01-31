'use client'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
        Kranthi Kumar Vemuri
      </h1>

      <p style={{ marginTop: '1rem', fontSize: '1.25rem', color: '#cccccc' }}>
        AI & Data Science Engineer
      </p>

      <p style={{ marginTop: '0.5rem', color: '#888888' }}>
        Hyderabad, Telangana
      </p>
    </main>
  )
}
