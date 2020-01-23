import React from 'react'

import { Link, RouteComponentProps } from 'react-router-dom'
import { Auth } from 'aws-amplify'

import { Button } from '../../components'
import HeroSvg from './HeroSvg'
import { DEMO_USERNAME, DEMO_PASSWORD } from '../../utils'

type Props = {} & RouteComponentProps

const LandingPage: React.FC<Props> = props => {
  const handleDemoLogin = async () => {
    try {
      await Auth.signIn(DEMO_USERNAME, DEMO_PASSWORD)
      props.history.push('/app')
    } catch (error) {
      console.log(error)
      return error
    }
  }
  return (
    <div>
      <section
        className="hero px-24"
        style={{ height: '100vh', backgroundColor: '#f8faff' }}
      >
        <header className="flex justify-between py-5">
          <div className="left">
            <span className="text-xl font-bold">Not Trello</span>
            {/* <span className="pl-8">Platform</span>
            <span className="pl-8">Resources</span> */}
          </div>
          <div className="right">
            <Button basic>
              <Link to="/login">Sign In</Link>{' '}
            </Button>
            <Button color="blue">
              <Link to="/app">Get Started</Link>
            </Button>
          </div>
        </header>
        <div className="flex pt-12">
          <div className="left  mt-24" style={{ flex: 4 }}>
            <h1 className="text-6xl mb-8">Be more productive than ever</h1>
            <p className="text-xl mb-6">
              Use this Kanban Board with extra goodies like a Pomodoro Timer.
            </p>
            <Button size="big" color="blue">
              <Link to="/app">Get Started</Link>
            </Button>
            <Button size="big" basic onClick={handleDemoLogin}>
              Live Demo
            </Button>
          </div>
          <div className="right flex justify-end" style={{ flex: 6 }}>
            <HeroSvg />
          </div>
        </div>
      </section>

      <section></section>
    </div>
  )
}

export default LandingPage
