import React, {useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
//import Button from './shared/Button'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState('true')
    const [message, setMessage] = useState('')

    const  {addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext) 

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        }else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else{
                addFeedback(newFeedback)
            }
            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate Your service with Us?</h2>
                <RatingSelect select={(rating) => setRating(rating) } />
                <div className='input-group mb-3'>
                    <input onChange={handleTextChange} type="text"  className="form-control" placeholder="Write a Review" value={text} />
                        <div className="input-group-append">
                        <button className="btn 
                        btn-outline-secondary" type="submit" 
                        isDisabled={btnDisabled}
                        id="button-addon2">Send</button>
                        </div>
                        {message && <div className='message'>{message}</div>}
                </div>                
            </form>
        </Card>
    )
}

export default FeedbackForm
