import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import Header from './components/Header';
import CardData from './components/CardData'; 
import { act } from 'react-dom/test-utils';
 


describe('renders <App />', () => {
  let wrapper;

  

  

  it('should pass render snapshot test', () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });


   
});























test('renders learn react link', () => {
  const { queryByText } = render(
    <Provider store={store}>
      <App />
   </Provider>
  );
 expect(queryByText(/learn/i)).not.toBeInTheDocument();
});


test('renders learn react link', () => {
  const { queryByText } = render(
    
      <Header />
   
  );
  expect(queryByText(/learn/i)).not.toBeInTheDocument();
});


test('renders learn react link', () => {
  const { queryByText } = render(
    <CardData />
  );
  expect(queryByText(/learn/i)).not.toBeInTheDocument();
});
 

 