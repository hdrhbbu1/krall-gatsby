import React from 'react'
import Link from 'gatsby-link'

import image from './me.jpg'

const IndexPage = () => (
  <div>
    <h1>None/All of these People are Me</h1>

    <img src={image} className="image"/>

    <p>This is a paragraph about the video above. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in dignissim magna, id tristique velit. Mauris egestas velit eu turpis convallis sodales commodo ut diam. Nunc sit amet tortor ut eros volutpat efficitur in vel mauris. Proin at augue ipsum. Morbi iaculis faucibus quam, at interdum libero sagittis sit amet. Fusce viverra urna quis metus efficitur scelerisque. Praesent a urna rutrum augue varius ullamcorper eget at ex. Quisque a tellus vitae lorem viverra feugiat. </p>
  </div>
)

export default IndexPage
