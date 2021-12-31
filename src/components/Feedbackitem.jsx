import React from 'react'
import {useContext} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../Context/FeedbackContext'


function Feedbackitem({item}) {
    const {deleteFeedback, editFeedback  } = useContext(FeedbackContext)
  
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close">
                
              <div className='fa-close' onClick={() => deleteFeedback(item.id)}> <FaTimes color='purple' />  </div> 

              <div className='fa-Edit' onClick={() => editFeedback(item)}> <FaEdit color='purple' />  </div>
            </button>

               
            
            
            
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

Feedbackitem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Feedbackitem
 