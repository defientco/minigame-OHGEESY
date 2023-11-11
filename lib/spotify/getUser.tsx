const getCurrentUserProfile = async (accessToken) => {
  const response = await fetch(`https://api.spotify.com/v1/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`)
  }

  const data = await response.json()

  return data
}

export default getCurrentUserProfile
