
export function getLocalCharacters() {
  const data = localStorage.getItem('characters')
  if (!data) return []
  return JSON.parse(data)
}

export function updateLocalCharacter({ id, description }) {
  const characters = getLocalCharacters()
  const char = characters.find(({ id: _id }) => _id === id)

  if (!char) {
    characters.push({ id, description })
  }
  else {
    char.description = description
  }

  localStorage.setItem('characters', JSON.stringify(characters))
  return { status: 'ok' }
}
