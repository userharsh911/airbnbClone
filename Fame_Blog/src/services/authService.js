import conf from "../conf/conf";
import { Account, Client, ID } from "appwrite";


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID)
        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
                await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            // return user
            return this.loginAccount({email,password});
        } catch (error) {
            throw error
        }

    }

    async loginAccount({email,password}){
        try {
            return await this.account.createEmailPasswordSession(
                email, 
                password
            );
        } catch (error) {
            
        }
    }
    async checkAuthStatus(){
        try {
            const user = await this.account.get()
            return user
        } catch (error) {
            console.log("appwrite session not created ",error)
        }
        return null
    }
    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }

}

const authService = new AuthService()
export default authService

