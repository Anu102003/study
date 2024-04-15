import axios from "axios";
const url="https://jsonplaceholder.typicode.com/posts"

    async function getApi(){
        try{
            return await axios.get(url)
        }catch(err){
            console.log("error in getting"+err);
            return err;
        }
    }
    
    async function deleteApi(str){
        try{
            return await axios.delete(url+'/'+str)
        }catch(err){
            console.log("error in delete"+err);
            return err;
        }
    }
    async function postApi(data){
        try{
            return await axios.post(url,data)
        }catch(err){
            console.log("error in posting"+err);
            return err;
        }
    }
    async function patchApi(str,patchdata){
        try{
            return await axios.patch((url+'/'+str),patchdata)
        }catch(err){
            console.log("error in patchin"+err);
            return err;
        }
    }
  


export { getApi, deleteApi, postApi, patchApi };
