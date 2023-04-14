import React from 'react'
import { Link } from 'react-router-dom'
import store from '../store'
import styles from '../styles/Option.module.scss'

function Option({data, currentQuestionId}) {
  const { text, next } = data

  const setSelectedOption = () => {
    store.dispatch({ type: 'options/add', payload: { questionId: currentQuestionId, option: text } });
  }

  const nextText = next === 'end' ? "ends flow" : `takes you to question ${next}`;

  return (
    <div className={styles.option}>
      <Link to={`/questions/${next}`} onClick={() => { setSelectedOption() }}>{text} ({nextText})</Link>
    </div>
  )
}

export default Option
