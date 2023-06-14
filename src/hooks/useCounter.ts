import { useState } from "react"

export const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  return {
    counter,
    handleIncrement: () => setCounter(counter + 1),
    handleDecrement: () => setCounter(counter - 1),
    handleReset: () => setCounter(initialValue),
  }
}
