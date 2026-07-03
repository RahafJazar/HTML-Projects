// WRITE YOUR JS CODE HERE
"use strict"
//Const variables
const API_KEY = "CjLgIOZiikFJf9fxfQfsJQMxVtJleYhnsL7y4cUn";
/* ^ NASA */
const spaceToday = [];
async function getTodaySpace() {
    try {

        let fetchReq = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=2026-06-17`);
        let respnse = await fetchReq.json()
        console.log(fetchReq);
        console.log(respnse)
    }
    catch (error) {
        console.log(error)
    }
}

getTodaySpace()