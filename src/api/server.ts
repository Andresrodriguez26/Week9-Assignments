let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMTkwMjc1MCwianRpIjoiM2ExYjljMzQtZWI0YS00MjE5LTk5N2ItNGIyYjA4ZTM4MzQxIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InBpcGUiLCJuYmYiOjE3MDE5MDI3NTAsImV4cCI6MTczMzQzODc1MH0.7GV4PDslpLqh_h0ShcGR3BD1gruNcSOIWsgWEfXRoOQ"
let userId = localStorage.getItem('uuid') //grabbing the uuid from Google Authentication 



// putting all our API calls in a giant dictionary/object

export const serverCalls = {

    getShop: async () => {
        // api call consist of 1-4 things 
        // 1. url (required)
        // 2. method (optional it will default to GET)
        // 3. headers (optional but usually there) authentication type & type of data 
        // 4. body (optional usually only on a POST, PUT and sometimes DELETE)
        const response = await fetch(`https://starwars-buddies.onrender.com//api/shop`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status 
        }

        return await response.json()

    }
}