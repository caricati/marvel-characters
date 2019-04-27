import crypto from 'crypto'

const {
  REACT_APP_MARVEL_URL,
  REACT_APP_PUBLIC_KEY,
  REACT_APP_PRIVATE_KEY,
} = process.env

export function api() {
  const ts = new Date().getTime()
  const hash = crypto
    .createHash('md5')
    .update(`${ts}${REACT_APP_PRIVATE_KEY}${REACT_APP_PUBLIC_KEY}`)
    .digest("hex")

  return {
    URL: REACT_APP_MARVEL_URL,
    params: {
      ts,
      hash,
      apikey: REACT_APP_PUBLIC_KEY,
    }
  }
}