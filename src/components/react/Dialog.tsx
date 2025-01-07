import { useRef } from 'react'
import './Dialog.css'

export default function Dialog({
  children,
  openElement = 'open',
}: {
  children: React.ReactNode
  openElement?: React.ReactNode
}) {
  let dialogRef = useRef<HTMLDialogElement>(null)

  const open = () => {
    document.body.style.top = `-${window.scrollY}px`
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    dialogRef.current?.showModal()
  }
  const close = () => {
    dialogRef.current?.close()
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }

  return (
    <>
      <div onClick={open}>{openElement}</div>
      <dialog ref={dialogRef}>
        <div className="dialog-layout">
          <div className="content">{children}</div>
          <div className="close">
            <button onClick={close} className="close-button">
              <svg viewBox="0 0 64 64" height="1em">
                <title>Schliessen</title>
                <path
                  stroke-width="10"
                  stroke="currentColor"
                  d="M4,4 L60,60 M4,60 L60,4"
                />
              </svg>
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}
