import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-quiz-d3071-default-rtdb.firebaseio.com/'
})