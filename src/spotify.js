export const authEndpoint=
"https://accounts.spotify.com/authorize"
const redirectUri="http://localhost:3000/"
const clientId="e912257effba4478a2624cae4778373c"

const scopes=[
    "user-read-playback-state",
"user-modify-playback-state",
"user-read-currently-playing",
"user-top-read",
"user-read-recently-played"
]



export const loginUrl =  `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`