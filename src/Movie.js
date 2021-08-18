import React from 'react'
import PropTypes from 'prop-types'


const Moive = ({id, year, title, summary, poster}) => {
    return <h5>{title}</h5>
}

Moive.propTypes = {
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired

}

export default Moive