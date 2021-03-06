/** @jsx h */
import { h, Fragment } from 'preact'
import SEO from '../components/seo.js'

import Conversation from '../images/conversation.js'
import TinkerProjects from '../components/TinkerProjects.js'

const WorkPage = ({ projects }) => (
  <Fragment>
    <SEO title="Work" />
    <section class="split-grid">
      <div>
        <h1>Work</h1>
        <p>
          I am currently employed as a web developer and I am always learning
          new technologies and building new things. As a developer, I strive to
          create products and solutions that can empower other developers.
        </p>
        <p>
          If you want to see the hardware / software I use, head over to my{' '}
          <a href="/uses">Uses Page</a>.
        </p>
        <p>
          As well, I have a site which I list development resources that I
          personally use or recommend:{' '}
          <a href="https://lannonbr.dev">Lannonbr.dev</a>.
        </p>
        <h2>Community Involvement</h2>
        <p>
          I am an active member of the Syracuse Developer community and go to
          events such as Open Hack and the Syracue JS meetup. It's a place that
          I've found local dev opportunities and a place to help out / get
          answers in the tech community. You can find out more at{' '}
          <a href="https://syracuse.io">Syracuse.io</a>.
        </p>
        <p>
          As well, I am heavily active on GitHub. If you want to learn more
          about my open source work, head over to my{' '}
          <a href="https://github.com/lannonbr">Github</a>.
        </p>
      </div>
      <div class="illustration-container">
        <Conversation />
      </div>
    </section>

    <h2>Currently Tinkering With</h2>
    <p>
      These are a few technologies I am tinkering with by building side projects
    </p>
    <TinkerProjects projects={projects} />
  </Fragment>
)

export default WorkPage
