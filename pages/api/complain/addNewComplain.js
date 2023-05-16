const API_URL = process.env.API_PATH

export default async function addCartItem(req, res) {
    //console.log("req nom", req.query.slug[0])
    const{dataTemp}=req.body
    /**********
     * slug[0]=item id,slug[1]=quantity,slug[2]=userid
     */
    //let data
    try{
        const result= await fetch(`${API_URL}complains`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.JWT_TOKEN}`
            },
            body: JSON.stringify({
                "title": dataTemp.subject,
                "status": "publish",
                "fields": {
                    "email": dataTemp.email,
                    "contact_number": dataTemp.contact,
                    "subject": dataTemp.subject,
                    "message": dataTemp.msg,
                    "category":dataTemp.cat

                }
            })
        })
        const answer= await result.json()
        return res.json(answer)

    }catch (error) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
    }
        
        
    
}