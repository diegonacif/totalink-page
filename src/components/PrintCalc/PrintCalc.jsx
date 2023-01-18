import { useEffect } from "react";
import { useState } from "react"

const toners = [
  { name: "Selecione um toner", pages: 0 },
  { name: "Samsung 10K", pages: 10000 },
  { name: "Samsung 3K", pages: 3000 },
  { name: "TN 580", pages: 3500 },
  { name: "85a", pages: 2600 },
]

export const PrintCalc = () => {
  const [inputValue, setInputValue] = useState(0);

  console.log(inputValue);

  const pagesCalc = (percentage) => {
    return inputValue / (percentage / 0.05)
  }

  return (
    <div className="print-calc-container">
      <section className="input-wrapper">
        <strong>Rendimento Estimado à 5%</strong>
        <select name="" id="" defaultValue={0} onChange={(e) => {setInputValue(e.target.value)}}>
          {toners.map((option, index) => (
            <option 
              key={index} 
              value={option.pages}
              disabled= {option.pages === 0 ? true : false}
            >
              {option.name}
            </option>
          ))}
        </select>
      </section>
      <section className="content-wrapper">
        <header>
          <strong>Área Coberta</strong>
          <strong>Páginas</strong>
        </header>
        <div className="content-row">
          <span>10%</span>
          <span>{pagesCalc(0.1)}</span>
        </div>
        <div className="content-row">
          <span>25%</span>
          <span>{pagesCalc(0.25)}</span>
        </div>
        <div className="content-row">
          <span>50%</span>
          <span>{pagesCalc(0.5)}</span>
        </div>
        <div className="content-row">
          <span>80%</span>
          <span>{pagesCalc(0.8)}</span>
        </div>
        <div className="content-row">
          <span>100%</span>
          <span>{pagesCalc(1)}</span>
        </div>
      </section>
    </div>
  )
}