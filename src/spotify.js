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

export const getTokenFromUrl=()=>{
    return window.location.hash.substring(1)
    .split('&')
    .reduce((initial,item)=>{   
        // console.log(parts)
        var parts=item.split('=')
        if(parts.includes("access_token"))
        {
             initial[parts[0]]=parts[1]
        }
        return initial
    },{})
    
}
getTokenFromUrl()

// const url= window.location.hash.substring(1).split('&')
// console.log(url)




// var access_token= new URLSearchParams   



export const loginUrl =  `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`