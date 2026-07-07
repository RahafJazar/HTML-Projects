/*

apiهاد كل الصفحات  رح تستخدمه لارجاع ال 


*/
export default class ApiClient {
    //get function
    API_Key = "rc_live_8560ffd0fa154be9b662220f18148780";
    async get(url) {
        try {
            let req = await fetch(url, {
                headers: {
                    'Authorization': 'Bearer' + API_Key,
                    'Content-Type': 'application/json'
                }
            });
            if (!req.ok)
                throw new Error("Request Failed");
            let resp = await req.json();
            return resp;
        }
        catch (error) {
            console.log(error)
        }
    }
}