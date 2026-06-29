import react,{useState} from 'react';
let App = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [numChecked, setNumChecked] = useState(false);
  const [symChecked, setSymChecked] = useState(false);
  let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const num = '0123456789';
  const sym = '@#$&';

  if (numChecked) {
    char += num;
    console.log(char);
  }
  if (symChecked) {
    char += sym;
    console.log(char);
  }


  let generator = '';
  const passwordGenerator = () => {
    // Implementation for generating a new password
    for (let i = 0; i < length; i++) {
      generator += char.charAt(Math.floor(Math.random() * char.length));
    }
    setPassword(generator);
  }

  
  return (
    <div className="bg-slate-900 text-white p-4 flex flex-col items-center justify-center w-100 border border-gray-600 rounded-lg shadow-lg m-auto h-80 mt-20">
      <span className="text-2xl font-bold mb-4">Password Generator</span>
      <input 
      type="text" 
      placeholder="Password" 
      className="font-mono tracking-wide bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded w-80"
      value={password}
      readOnly />
      <div>
        <div className="mt-2">
        <label 
        className="mr-5"
        htmlFor="num"><input 
        type="checkbox" 
        id="num"
        checked={numChecked}
        onChange={(e) => {
          setNumChecked(!numChecked);
        }}
        /> Numbers</label>
        <label  
        className="mr-5" 
        htmlFor="sym"
        checked={symChecked}
        onChange={(e) => {
          setSymChecked(!symChecked);
        }}
        ><input type="checkbox" id="sym"/> Symbols</label>
        </div>
        <div className='mt-1'><input type="range" min={5} max={15} onChange={(e)=>setLength(e.target.value)}/>Length ({length})</div>
      </div>
      <button 
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 mt-4 rounded w-50"
      onClick={passwordGenerator}
      >Generate</button>
    </div>
  );
};

export default App;