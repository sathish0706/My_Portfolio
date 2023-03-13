import React from 'react';
import { Element } from 'react-scroll';
import LinearProgress from '@mui/material/LinearProgress';
import './skills.css'


const Skills = () => {
  return (
    <Element name='skills' className='skills'>
      <div className='skill-img'>
        <img src='https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_960_720.jpg' alt='Loading'/>
      </div>
      <div className='skilset-containet'>
      <div className='skillset skillset1'>
        <h3>Javascript</h3>
      <LinearProgress variant="buffer" value={60} />
      </div>
      <div className='skillset skillset2'>
        <h3>React</h3>
      <LinearProgress variant="buffer" value={70}  />
      </div>
      <div className='skillset skillset3'>
        <h3>HTML</h3>
      <LinearProgress variant="buffer" value={80} />
      </div>
      <div className='skillset skillset4'>
        <h3>CSS</h3>
      <LinearProgress variant="buffer" value={75} />
      </div>
      <div className='skillset skillset5'>
        <h3>MOngo DB</h3>
      <LinearProgress variant="buffer" value={60} />
      </div>
      <div className='skillset skillset6'>
        <h3>Node JS</h3>
      <LinearProgress variant="buffer" value={50}/>
      </div>
      </div>
    </Element>
  )
}

export default Skills
