import axios from 'axsios';
const {apiKey} = require("../constants");

const client = axios.create({
    headers:{
        "Authorization":"Bearer" +apiKey,
        "content-Type": "application/json"
    }
})

const chatGptEndPoint = 'https://api.openai.com/v1/chat/completions';
const dalleEndPoint = 'https://api.openai.com/v1/images/generations';

export const apiCall = async(prompt,messages) =>{
    try{
        const res = await client.post(chatGptEndPoint, {
            model:'gpt-3.5-turbo-16k', 
            messages: [{
                role : 'user' , 
                content : `does this message want to generate an AI picture , image , art or anything similar ? ${prompt} . Simply answer with a yes or no.` 
            }]
        })
        console.log('data : ', res.data.choices[0].message);

    }catch(err){
        console.log('error' , err);
        return Promise.resolve({success : false, msg : err.message})
    }
}