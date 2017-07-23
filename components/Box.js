import styled from 'styled-components'
import units from '../config/units'
import * as colors from '../config/colors'

export default styled.div`
  ${
    (props) => {
      const padding = props.padding ? [].concat(props.padding) : [];
      switch (padding.length) {
        case 1:
          return `padding: ${units[padding[0]]};`;
        case 2:
          return `padding: ${units[padding[0]]} ${units[padding[1]]};`;
        case 3:
          return `padding: ${units[padding[0]]} ${units[padding[1]]} ${units[padding[2]]};`;
        case 4:
          return `padding: ${units[padding[0]]} ${units[padding[1]]} ${units[padding[2]]} ${units[padding[3]]};`;
        default:
          return null;
      }
    }
  }
  ${props => props.background && `background: ${colors[props.background]};`}
  ${props => props.color && `color: ${colors[props.color]};`}
  max-width: ${props => props.maxWidth || 'none'};
  margin-right: auto;
  margin-left: auto;
  > *:first-child {
    margin-top: 0 !important;
  }
  > * {
    margin-top: ${props => `${units[props.spacing]} !important` || 0};
  };
`
