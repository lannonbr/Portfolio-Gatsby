/** @jsx h */
import { h } from 'preact'
import SEO from '../components/seo.js'

import MusicProdIllustration from '../images/music-prod.js'

const MusicProductionPage = () => {
  return (
    <section class="split-grid">
      <SEO title="Music Production" />
      <div>
        <h1>Music Production</h1>
        <p>
          Over the quarantine in 2020, I decided to take a deep dive into music
          production. I'm still in a very experimenting phase but looking to
          eventually start aranging tracks.
        </p>
        <h2>Software</h2>
        <ul>
          <li>
            <a href="https://www.ableton.com/en/live/">Ableton Live 10 Suite</a>
          </li>
          <li>
            <a href="https://vcvrack.com/">VCV Rack</a>
          </li>
        </ul>
        <h2>Equipment</h2>
        <ul>
          <li>
            <a href="https://www.shure.com/en-US/products/microphones/sm58">
              Shure SM58 Dynamic XLR Microphone
            </a>
          </li>
          <li>
            <a href="https://www.cloudmicrophones.com/cloudlifter-cl-1">
              Cloudlifter CL-1 Mic Activator
            </a>
          </li>
          <li>
            <a href="https://focusrite.com/en/usb-audio-interface/scarlett/scarlett-18i8">
              Focusrite Scarlett 18i8 (2nd gen) USB Audio Interface
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com/Novation-Launchpad-Mini-Controller-Ableton/dp/B07WNSHR3V/">
              Novation Launchpad Mini MK3 MIDI Controller
            </a>
          </li>
          <li>
            <a href="https://novationmusic.com/en/keys/launchkey-mini">
              Novation Launchkey Mini MK3 MIDI Keyboard
            </a>
          </li>
          <li>
            <a href="https://novationmusic.com/en/keys/launchkey">
              Novation Launchkey MK3 61-key MIDI Keyboard
            </a>
          </li>
          <li>
            <a href="https://novationmusic.com/en/launch/launch-control-xl">
              Novation LaunchControl XL MIDI Controller
            </a>
          </li>
          <li>
            <a href="https://www.elektron.se/products/digitakt">
              Elektron Digitakt
            </a>
          </li>
          <li>
            <a href="https://www.ashunsoundmachines.com/hydrasynth-desk">
              ASM Hydrasynth Desktop Synth
            </a>
          </li>
          <li>
            <a href="https://empresseffects.com/products/zoia">
              Empress Effects Zoia Effects Pedal
            </a>
          </li>
        </ul>
        <h2>Eurorack Modular Synth</h2>
        <p>
          My current rack on ModularGrid:{' '}
          <a href="https://www.modulargrid.net/e/racks/view/1289453">
            https://www.modulargrid.net/e/racks/view/1289453
          </a>
        </p>
        <p>
          I also have a{' '}
          <a href="https://www.korg.com/us/products/dj/sq_64/">KORG SQ-64</a>{' '}
          sequencer to sequence my Eurorack modules.
        </p>
      </div>
      <div class="illustration-container">
        <MusicProdIllustration />
      </div>
    </section>
  )
}

export default MusicProductionPage
