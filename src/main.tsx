import React from 'react'
import ReactDOM from 'react-dom'

import "./styles/global.css"

import Calculator from './Calculator'

ReactDOM.render(
	<React.StrictMode>
		<Calculator />
	</React.StrictMode>,
	document.getElementById('root')
)
