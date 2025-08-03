import Head from 'next/head'
import PredictionCard from '../components/PredictionCard'
import ConfidenceMeter from '../components/ConfidenceMeter'
import ExplanationPanel from '../components/ExplanationPanel'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>KingbetAI Dashboard</title>
      </Head>
      <h1>Daily Top Sports Predictions</h1>
      <PredictionCard />
      <ConfidenceMeter />
      <ExplanationPanel />
    </div>
  )
}
