import logo from './logo.svg';
import './App.css';
import CustomButton from './components/atoms/CustomButton';
function App() {
  return (
    <div className="flex flex-row items-center justify-center">
     <CustomButton title={'sample button'}/>
    </div>
  );
}

export default App;
