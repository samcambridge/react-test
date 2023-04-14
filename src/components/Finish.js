import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import styles from '../styles/Finish.module.scss'
import store from '../store'

const selectSelectedOptions = state => state.selectedOptions

function Finish() {
  const selectedOptions = useSelector(selectSelectedOptions);

  const resetSelectedOptions = () => {
    store.dispatch({ type: 'options/reset' });
  }

  return (
    <div>
      <h2>Questions Complete:</h2>
      <p>You selected the following options</p>

      {selectedOptions.map((item, index) => {
        const { questionId, option } = item;

        return (
        <div className={styles.option} key={index}>
          On question {questionId} you chose "{option}"
        </div>);
      })}

      <Link to="/" onClick={() => { resetSelectedOptions() }} className={styles.button}>Restart</Link>
    </div>
  )
}

export default Finish
