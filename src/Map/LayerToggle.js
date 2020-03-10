import React from 'react'

import Card from 'react-bootstrap/Card'
import { Accordion } from 'react-bootstrap'

export default function LayerToggle() {


  return (
    <div className='layer-toggle-wrapper'>
      <Accordion>
        <Card border='dark'>
          <Card.Header className='layer-toggle-header'>
            <Accordion.Toggle as={Card.Header} className='layer-toggle-header' variant="link" eventKey="0">
              Weather Layers
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className='layer-toggle-body'>
              <form>
                <ul>
                  <input name='radar' type='checkbox' /> 
                  <label>Radar</label> <br />
                  <input name='satellite' type='checkbox' />
                  <label>Satellite</label> <br />
                  <input name='lightning' type='checkbox' />
                  <label>Lightning</label>
                </ul>
              </form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card border='dark'>
          <Card.Header className='layer-toggle-header'>
            <Accordion.Toggle as={Card.Header} className='layer-toggle-header' variant="link" eventKey="1">
              Rivers & Hydro
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className='layer-toggle-body'>Nothing here yet</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}