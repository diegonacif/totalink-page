import { useEffect } from "react";
import { useState } from "react"

const toners = [
  { name: "Selecione um toner", pages: 0 },
  { name: "TN 1060", pages: 1000 },
  { name: "TN 360", pages: 2600 },
  { name: "TN 450", pages: 2600 },
  { name: "TN 660 / TN 2370", pages: 2600 },
  { name: "TN 580", pages: 8000 },
  { name: "TN 850 / TN 3442", pages: 8000 },
  { name: "TN 880 / TN 3472", pages: 12000 },
  { name: "540A", pages: 1800 },
  { name: "12A", pages: 2000 },
  { name: "85A", pages: 2000 },
  { name: "Samsung 3K", pages: 3000 },
  { name: "Samsung 10K", pages: 10000 },
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
        {/* <strong>Rendimento Estimado à 5%</strong> */}
        <div className="input-row">
          <select name="" id="" defaultValue={0} onChange={(e) => {setInputValue(e.target.value)}}>
            {toners.map((option, index) => (
              <>
                <option 
                  key={index} 
                  value={option.pages}
                  disabled= {option.pages === 0 ? true : false}
                >
                  {`${option.name}`}
                </option>
              </>
            ))}
          </select>
          {/* <span>{inputValue}</span> */}
        </div>
      </section>
      <section className="content-wrapper">
        <header>
          <strong>Área Coberta</strong>
          <strong>Páginas</strong>
        </header>
        <div className="content-row">
          <span>5% (padrão)</span>
          <span>{inputValue}</span>
        </div>
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
      <iframe src="https://giphy.com/embed/5Wi8qSypThQUbNhtyX" width="480" height="362" frameBorder="0" class="giphy-embed"></iframe>
      <div className="background"></div>

    </div>
  )
}