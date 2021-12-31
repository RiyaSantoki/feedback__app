import { motion, AnimatePresence } from 'framer-motion'
import {useContext} from 'react'
import React from 'react'
import Feedbackitem from './Feedbackitem'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return<p>No FeedBack Yet</p>
    }

    return (
        <div>
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div key={item.id}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                >
             <Feedbackitem 
             key={item.id} 
             item={item}
              />  
             </motion.div> 
            ))}
            </AnimatePresence>
        </div>
    )

   /*  return (
        <div>
            {feedback.map((item) => (
             <Feedbackitem 
             key={item.id} 
             item={item}
             handleDelete={handleDelete} />   
            ))}
        </div>
    ) */
}



export default FeedbackList
