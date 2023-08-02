import { ref } from "vue"

export class AuthService{
    constructor(){
        this.jwt = ref();
        this.error = ref();
    }

    getJwt(){
        return this.jwt;
    } 

    async login(email, password){
        try{
            const res = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: email,
                    password:password
                })      
            })
            console.log(res)
            const response = await res.json();
            console.log(response)

            if('errors' in response){
                this.error = "Login failed"
                return false;
            }

            this.jwt = response.token
            return true;


        }catch(error){
            console.log(error);
        }
    }
}

export default AuthService;