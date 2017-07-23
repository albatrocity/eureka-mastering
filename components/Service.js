import Link from 'next/link'
import Box from './Box'

const Service = ({ service }) => (
  <Box>
    <h3>{service.name}</h3>
    <div dangerouslySetInnerHTML={{__html: service.description}} />
    <p>{ service.pricing }</p>
  </Box>
)

export default Service
