import 'preact'
import type { JSX } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { currency } from 'src/utils'

type Input = 0 | 1 | 2 | 3 | 4

const inputToPricePerTurnover = [
  { turnover: 1_000, price: 4, transactionprice: 1.5 },
  { turnover: 5_000, price: 3.5, transactionprice: 1.5 },
  { turnover: 20_000, price: 3, transactionprice: 1.5 },
  { turnover: 100_000, price: 2.5, transactionprice: 1.5 },
  'more',
] as const

const moreValue = 4
const lastTurnover = 3

const Plan = ({ children }: { children: JSX.Element }) => {
  const init = globalThis.location
    ? Number(globalThis.location.search.split('=').at(-1))
    : 0

  const [value, setValue] = useState<Input>(init as Input)

  useEffect(() => {
    globalThis.history.pushState(null, '', `?turnover=${value}`)
  }, [value])

  return (
    <>
      {children}
      <label for="turnover">
        <dl>
          <dt>
            Monatlicher injoi-Umsatz / Betrieb {value != moreValue && 'bis zu'}
          </dt>
          <dd>
            {value == moreValue
              ? `grösser als ${currency.format(
                  inputToPricePerTurnover[lastTurnover].turnover
                )}.-`
              : `${currency.format(inputToPricePerTurnover[value].turnover)}.-`}
          </dd>
        </dl>
      </label>
      <input
        type="range"
        name="turnover"
        id="turnover"
        style="width: 80%;"
        min="0"
        max="4"
        value={value}
        onInput={({ target }) => setValue(target.value)}
      />
      {value == moreValue ? (
        <>
          <dl>
            <dt>Monatliche Grundgebühr / Betrieb ٭ </dt>
            <dd class="price">Auf Anfrage</dd>
          </dl>
          <div>
            <a class="button-link" href="individuell/">
              Individuell anfragen
            </a>
          </div>
        </>
      ) : (
        <>
          <dl>
            <dt>Monatliche Grundgebühr / Betrieb ٭ </dt>
            <dd class="price">{inputToPricePerTurnover[value].price}%</dd>
            <dt>Kosten / Transaktion</dt>
            <dd class="price">{inputToPricePerTurnover[value].transactionprice}%</dd>
          </dl>
          <div>
            <a class="button-link square" href={`order-pay/${value}/`}>
              Order|Pay anfragen
            </a>
          </div>
        </>
      )}
    </>
  )
}

export default Plan
