import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'
import React from 'react'

function FeedbackList({feedback}) {
    // console.log(feedback)
    if (!feedback || feedback.length === 0 ) {
        return <p>No Feedback Yet</p>
    }
    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item}/>
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackList