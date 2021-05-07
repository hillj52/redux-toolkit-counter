import { Provider } from 'react-redux';
import Counter from './components/counter';
import store from './state/store';

const App: React.FC = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
