import HeaderContainer from './components/header'
import UserStatuses from './components/userStatuses';

import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <HeaderContainer user={ 'Juan' } />
      <UserStatuses />
    </div>
  );
}

export default App;
