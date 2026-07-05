/*

apiهاد كل الصفحات  رح تستخدمه لارجاع ال 


*/
export default class ApiClient {
    //get function

    async get(url) {
        try {
            let req = await fetch(url);
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