import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SimulationLab from './SimulationLab'
import ShatterLab    from './ShatterLab'
import DeformLab from './DeformLab'
import ParticleLab from './ParticleLab'
import SoftLab from './SoftLab'
import RippleLab from './RippleLab'
// import JellyLab from './JellyLab'
import FluidLab from './FluidLab'
import LabHub from './LabHub'
import './index.css'

const path = window.location.pathname
const root = path === '/lab'
  ? <LabHub />
  : path === '/sim'
  ? <SimulationLab />
  : path === '/shatter'
  ? <ShatterLab />
  : path === '/deform'
    ? <DeformLab />
    : path === '/particles'
      ? <ParticleLab />
      : path === '/soft'
        ? <SoftLab />
        : path === '/ripple'
          ? <RippleLab />
          : path === '/fluid'
            ? <FluidLab />
            // : path === '/jelly'
            //   ? <JellyLab />
            : <App />

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>{root}</React.StrictMode>,
)
