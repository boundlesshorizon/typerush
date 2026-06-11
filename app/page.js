import TypingTest from './components/TypingTest'

export default function Home() {
  return (
    <main>
      <TypingTest />

      <section style={{
        maxWidth: '860px',
        margin: '0 auto',
        padding: '0 24px 60px',
        color: '#555',
      }}>
        <h2 style={{ color: '#e8e8ec', fontSize: '22px', fontWeight: 600, marginBottom: '16px', marginTop: '48px' }}>
          Free Typing Speed Test — Measure Your WPM Instantly
        </h2>
        <p style={{ fontSize: '15px', lineHeight: '1.8', marginBottom: '16px' }}>
          TypeRush is a free online typing speed test that measures your words per minute (WPM) in real time. Whether you&apos;re a student, professional, programmer, or just want to improve your typing, TypeRush gives you instant, accurate feedback on your typing performance.
        </p>
        <h3 style={{ color: '#aaa', fontSize: '16px', fontWeight: 500, marginBottom: '10px', marginTop: '28px' }}>
          How the typing test works
        </h3>
        <p style={{ fontSize: '15px', lineHeight: '1.8', marginBottom: '16px' }}>
          Select your preferred test duration — 15, 30, 60, or 120 seconds — and a difficulty level. Click the typing area or press any key to start. Type each word and press Space to move to the next. Your WPM, accuracy, and streak update live as you type. When time runs out, you&apos;ll see your full results and a performance grade.
        </p>
        <h3 style={{ color: '#aaa', fontSize: '16px', fontWeight: 500, marginBottom: '10px', marginTop: '28px' }}>
          What is a good WPM score?
        </h3>
        <p style={{ fontSize: '15px', lineHeight: '1.8', marginBottom: '16px' }}>
          The average typing speed is around 40 WPM. Proficient typists reach 60–80 WPM, while advanced touch typists often hit 100 WPM or more. Professional transcriptionists and competitive typists can exceed 120 WPM. Use TypeRush daily to track your progress and push your speed higher.
        </p>
        <h3 style={{ color: '#aaa', fontSize: '16px', fontWeight: 500, marginBottom: '10px', marginTop: '28px' }}>
          Typing test difficulty levels
        </h3>
        <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
          TypeRush offers four difficulty levels: <strong style={{ color: '#e8e8ec' }}>Easy</strong> uses the most common English words for beginners, <strong style={{ color: '#e8e8ec' }}>Medium</strong> includes longer and less common words for intermediate typists, <strong style={{ color: '#e8e8ec' }}>Hard</strong> features complex and challenging vocabulary, and <strong style={{ color: '#e8e8ec' }}>Code</strong> mode is designed specifically for developers — with programming keywords, functions, and syntax terms.
        </p>
      </section>
    </main>
  )
}
