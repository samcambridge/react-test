import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Option from '../components/Option';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import questions from '../data.js';
import configureStore from 'redux-mock-store'

afterEach(cleanup);

describe('Option', () => {
  const mockStore = configureStore()
  const initialState = {
    questions: questions,
    currentQuestion: null,
    selectedOptions: [],
  };
  const store = mockStore(initialState);

  it('should render the option text and tell you where it takes you', () => {

    render(
      <MemoryRouter initialEntries={['/questions/2']}>
        <Option data={{ text: "Option 1", next: 2 }} currentQuestionId={1} />
      </MemoryRouter>
    );

    expect(screen.getByText("Option 1 (takes you to question 2)")).toBeInTheDocument();
  });

  it('should render the option text and tell you if it ends', () => {

    render(
      <MemoryRouter initialEntries={['/questions/2']}>
        <Option data={{ text: "Option 1", next: 'end' }} currentQuestionId={1} />
      </MemoryRouter>
    );

    expect(screen.getByText("Option 1 (ends flow)")).toBeInTheDocument();
  });

  it('should update the store when clicked', () => {
    const history = createMemoryHistory({ initialEntries: ['/questions/2'] });

    render(
      <MemoryRouter history={history} initialEntries={['/questions/2']}>
        <Option data={{ text: "Option 1", next: '2' }} currentQuestionId={1} />
      </MemoryRouter>
    );
  });
});

