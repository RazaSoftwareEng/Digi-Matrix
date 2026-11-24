import PageHeader from '../components/PageHeader'
import CtaBand from '../components/CtaBand'
import Icon from '../components/Icons'

const values = [
  { icon: 'live', t: 'Practical first', d: 'Every lesson leads to something you build, launch or run, not just theory.' },
  { icon: 'check', t: 'Honest guidance', d: 'We tell you what works today, what does not, and what it really takes.' },
  { icon: 'level', t: 'Grow step by step', d: 'Clear paths from beginner to confident professional, at your own pace.' },
  { icon: 'ai-bootcamp', t: 'Future-ready', d: 'AI and automation are built into how we teach and how we work.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="We help people build income and businesses online"
        text="Digi Matrix is a training and services company focused on the digital skills that matter most: selling on marketplaces, running stores, marketing, building websites and using AI."
      />
      <section className="section section--tight">
        <div className="container about">
          <div className="about__story">
            <h2>Our story</h2>
            {/* Replace with the real Digi Matrix story */}
            <p>
              Digi Matrix started with a simple idea: the skills to earn online should be practical,
              affordable and taught by people who use them every day. We combine teaching with
              real client work, so what you learn in class reflects what is working in the market
              right now.
            </p>
            <p>
              Today we run courses across seven tracks and offer each of them as a professional
              service for brands and entrepreneurs who want results without doing it all themselves.
            </p>
          </div>
          <div className="about__mission">
            <span className="eyebrow eyebrow--dark">Our mission</span>
            <p>To make digital skills accessible and turn learners into earners, and to help businesses grow with the same expertise.</p>
          </div>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">What we believe</span>
            <h2>Our values</h2>
          </div>
          <div className="values">
            {values.map((v) => (
              <div key={v.t} className="value">
                <span className="value__icon"><Icon name={v.icon} /></span>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
