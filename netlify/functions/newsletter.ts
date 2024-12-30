import fetch, { Headers, Response } from 'node-fetch'
import type { Handler } from '@netlify/functions'

const headers = new Headers({
  Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
})
const list_id = 'dfd2ec933f'

const handler: Handler = async (event) => {
  if (!event.body) {
    return {
      statusCode: 200,
      body: 'Body was empty',
    }
  }

  const { email } = JSON.parse(event.body) as { email: string }
  const body = { status: 'subscribed', email_address: email }
  const url = `https://us12.api.mailchimp.com/3.0/lists/${list_id}/members`

  const response: Response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  }).catch((error) => {
    console.error(error)
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
    })
  })

  const data = await response.json()

  return {
    statusCode: response.status,
    body: JSON.stringify({ data }),
  }
}

export { handler }
