import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState(1000000)
  const [inputInterest, setInputInterest] = useState(8)
  const [inputTime, setInputTime] = useState(10)
  const [inputWithdrawal, setInputWithdrawal] = useState(0)
  const [arrayOutput, setArrayOutput] = useState([])

  function calculateMonthlyInterest() {


     // Check if any of the inputs are empty
  if (inputValue < 0 || inputInterest < 0 || inputTime < 0 || inputWithdrawal < 0) {
    alert('Please fill in all fields before calculating.')
    return
  }

    const newArrayOutput = []
    let principalAmount = Number(inputValue);
    const monthlyInterestRate = (Number(inputInterest) / 100) / 12 

    for (let i = 0; i < Number(inputTime) * 12; i++) {
      const monthlyPrincipal = principalAmount
      const monthlyInterest = principalAmount * monthlyInterestRate
      const newPrincipal = monthlyPrincipal + monthlyInterest - Number(inputWithdrawal)

      const storedValue1 = parseFloat(Number(monthlyPrincipal).toFixed(2))
      const storedValue2 = parseFloat(Number(monthlyInterest).toFixed(2))

      newArrayOutput.push({ month: i+1, capital: storedValue1, interest: storedValue2 })

      principalAmount = newPrincipal

      if (principalAmount < 0) {
        break;
      }

    }

    setArrayOutput(newArrayOutput)
  }

  return (
    <>
    <div className="container">
    <div className="input-group">
        <label>
          Principal:
        </label>
        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </div>
      <div className="input-group">
        <label>
          Annual Interest Rate:
        </label>
        <input type="number" value={inputInterest} onChange={(e) => setInputInterest(e.target.value)} />
      </div>
      <div className="input-group">
        <label>
          Years:
        </label>
        <input type="number" value={inputTime} onChange={(e) => setInputTime(e.target.value)} />
      </div>
      <div className="input-group">
        <label>
          Monthly Withdrawal:
        </label>
        <input type="number" value={inputWithdrawal} onChange={(e) => setInputWithdrawal(e.target.value)} />
      </div>
      <button onClick={calculateMonthlyInterest}>Calculate</button>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Capital</th>
            <th>Interest</th>
          </tr>
        </thead>
        <tbody>
          {arrayOutput.map((item, index) => (
            <tr key={index}>
              <td>{item.month}</td>
              <td>{item.capital}</td>
              <td>{item.interest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
  )
}

export default App