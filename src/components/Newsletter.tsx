import 'preact'
import { useState } from 'preact/hooks'

const Newsletter = () => {
  const [state, setState] = useState<
    'Open' | 'Loading' | 'Subscribed' | 'Error'
  >('Open')
  const [email, setEmail] = useState<string>('')
  const [honeyPot, setHoneyPot] = useState<string>('')

  const onSubmit = async (e: SubmitEvent) => {
    e.preventDefault()
    setState('Loading')
    if (honeyPot) {
      console.log('honeypot has data')
      setState('Error')
    }
    const body = { email }
    const url = `/.netlify/functions/newsletter`
    let response: Response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
    }).catch((error) => {
      console.error(error)
      return new Response(JSON.stringify({ error: String(error) }), {
        status: 500,
      })
    })

    if (response.status != 200) {
      console.error(JSON.stringify(await response.json()))
      setState('Error')
      return
    }

    setState('Subscribed')
  }

  return (
    <div>
      {(state === 'Open' || state === 'Loading') && (
        <form onSubmit={onSubmit}>
          <h2>Newsletter</h2>
          <p style="margin-bottom: 2em;">
            Möchten Sie über die neuesten Updates and Highlights von injoi
            informiert werden? Dann abonnieren Sie unseren Newsletter!
          </p>
          <div>
            <label for="mce-EMAIL">
              Email Adresse <small>zwingend</small>
            </label>
            <input
              style="display: block; font-size: 1em; margin-block: 0.3em 2em; max-width: 25rem; width: 100%; padding: 0.5em;"
              type="email"
              value={email}
              name="EMAIL"
              onInput={(e) => setEmail(e.target.value)}
              id="mce-EMAIL"
              required
            />
          </div>
          {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input
              type="text"
              name="b_e2cf4f383660f53ff71e7e859_3a36c97d59"
              tabindex="-1"
              value={honeyPot}
              onInput={(e) => setHoneyPot(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              name="subscribe"
              class="button"
              disabled={state === 'Loading'}
            >
              Abonnieren
            </button>
          </div>
        </form>
      )}
      {state === 'Subscribed' && (
        <div>
          <h1>Vielen Dank!</h1>
          <p>Wir haben Ihre Anmeldung für den Newsletter erhalten.</p>
          <p>
            Der Newsletter wird an folgende Email-Adresse verschickt:{' '}
            <b>{email}</b>.
          </p>
        </div>
      )}
      {state === 'Error' && (
        <div>
          <h1>Leider ist ein Fehler aufgetreten.</h1>
          <p>
            <br />
            Es würde uns sehr freuen, wenn Sie dieses Problem an{' '}
            <a href="mailto:support@injoiapp.com">
              support@injoiapp.com
            </a>{' '}
            melden.
          </p>
        </div>
      )}
    </div>
  )
}

export default Newsletter
