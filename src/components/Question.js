import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import store from '../store'
import QuestionNotFound from './QuestionNotFound'
import Option from './Option'
import styles from '../styles/Question.module.scss'

const selectCurrentQuestion = state => state.currentQuestion

function Question() {
  const { id = 1 } = useParams();
  const currentQuestion = useSelector(selectCurrentQuestion);
  const { text, options } = currentQuestion || { text: null, options: null };

  useEffect(() => {
    store.dispatch({ type: 'questions/setCurrent', payload: id });
  }, [id])

  if (!currentQuestion) {
    return <QuestionNotFound />;
  }

  return (
    <div>
      <div className={styles.question}>
        <h1>{text || ""}</h1>
      </div>
      {options.map((option, index) => (
        <Option key={index} data={option} currentQuestionId={id} />
      ))}
    </div>
  )
}

export default Question
