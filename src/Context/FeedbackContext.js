import {createContext, useState} from 'react';
import { v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: '1_This item is from context',
            rating: 10
        },
        {
            id: 2,
            text: '2_This item is from context',
            rating: 8
        },
        {
            id: 3,
            text: '3_This item is from context',
            rating: 7
        }
    ])
    const [feedbackEdit, setFeedbackEdit ] = useState({
        item: {},
        edit: false
    })

    //add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }

    //delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are You Sure You Want To Delete?'))
        {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        
    }

    //Update feedback Item
    const updateFeedback = (id, upItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...upItem } : item ))
        )
    }

    //set item to be updated

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return (
    <FeedbackContext.Provider 
    value={{
      feedback,  
      feedbackEdit,
      deleteFeedback, 
      addFeedback, 
      editFeedback,
      updateFeedback,   
      }} 
    >
        {children}
    </FeedbackContext.Provider>
    )
}
export default FeedbackContext