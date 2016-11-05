import React from 'react'
import carlosImg from '../../images/carlos.png'

export const Picture = () => (
  <img
    src={carlosImg}
    style={style.image}
  />
)

const style = {
  image: {
    width: '120px',
    height: '120px',
    borderRadius: '60px',
    margin: '0 0 1em'
  }
}
