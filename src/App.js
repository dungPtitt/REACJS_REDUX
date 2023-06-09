import logo from './logo.svg';
import './App.css';
import ExampleRedux from './views/example-redux';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Danh sách địa điểm lưu diễn của band:
        </h2>

        <h3>nhanh cua dung</h3>
        <ExampleRedux />
      </header>
    </div>
  );
}

export default App;
