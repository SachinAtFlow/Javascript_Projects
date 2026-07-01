import React, { useState, useCallback, useEffect, useRef } from 'react';
let App = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [numChecked, setNumChecked] = useState(false);
  const [symChecked, setSymChecked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState('Weak');
  let passwordRef = useRef(null);



  let copyPassword = async () => {
    await navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    passwordRef.current?.focus();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  const passwordGenerator = useCallback(() => {
    // Implementation for generating a new password
    let generator = '';
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const num = '0123456789';
    const sym = '@#$&';
    // Add numbers and symbols to the character set based on user selection
    if (numChecked) {
      char += num;
    }
    if (symChecked) {
      char += sym;
    }

    // Determine password strength based on length and character types
    let score = 0;

    if (length >= 8) score++;
    if (length >= 12) score++;
    if (numChecked) score++;
    if (symChecked) score++;

    if (score === 0 || score === 1) {
      setStrength("Very Weak");
    } else if (score === 2) {
      setStrength("Weak");
    } else if (score === 3) {
      setStrength("Medium");
    } else {
      setStrength("Strong");
    }
    for (let i = 0; i < length; i++) {
      generator += char.charAt(Math.floor(Math.random() * char.length));
    }
    setPassword(generator);
  }, [numChecked, symChecked, length]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator, numChecked, symChecked, length]);


  return (
    <div className="bg-slate-900 text-white p-4 flex flex-col items-center justify-center w-1/2 border border-gray-600 rounded-lg shadow-lg m-auto h-80 mt-20">
      <span className="text-2xl font-bold mb-4">Password Generator</span>
      <span>
        <input
          type="text"
          placeholder="Password"
          className="font-mono tracking-wide bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded w-80"
          value={password}
          readOnly
          ref={passwordRef} />
        <button onClick={copyPassword} className='ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 w-16   rounded'>{copied ? '✓' : 'Copy'}</button>
      </span>
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
            htmlFor="sym">
            <input
              type="checkbox"
              id="sym"
              checked={symChecked}
              onChange={(e) => {
                setSymChecked(!symChecked);
              }} /> Symbols</label>
        </div>
        <div className='mt-1'><input type="range" min={5} max={15} onChange={(e) => setLength(e.target.value)} />  Length ({length})</div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 mt-4 rounded w-50"
        onClick={passwordGenerator}
      >Change</button>

      <p className={`text-lg font-semibold mt-2 ${
      strength === "Very Weak"
      ? "text-red-500"
      : strength === "Weak" 
      ? "text-orange-500"
      : strength === "Medium"
      ? "text-yellow-400"
      : "text-green-500"
  }`}> Password Strength : {strength} </p>
    </div>
  );
};

export default App;