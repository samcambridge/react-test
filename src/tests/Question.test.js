// import React from 'react';
// import { render, cleanup, fireEvent, screen } from '@testing-library/react';
// import Question from '../components/Question';
// import styles from '../styles/Question.module.scss';
// import { MemoryRouter, useParams } from 'react-router-dom';

// import { Provider } from 'react-redux'
// import configureStore from 'redux-mock-store'
// import data from '../data.js';

// afterEach(cleanup);

// describe('Question', () => {
//   const mockStore = configureStore()
//   const store = mockStore(data);

//   it('should render the question text', () => {
//     useParams.mockReturnValue({ id: 2 });

//     render(
//       <Provider store={store}>
//         <MemoryRouter initialEntries={['/questions/2']}>
//           <Question />
//         </MemoryRouter>
//       </Provider>
//     );

//     expect(screen.getByText("Question 2")).toBeInTheDocument();
//   });
// });

