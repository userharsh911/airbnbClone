import conf from "../conf/conf";
import { Client, Databases, ID, Query, Storage } from "appwrite";

export class ArticlesServices{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID)
        this.database = new Databases(this.client)
    }

    async createPost({slug,title,content,featuredImage,status,userid}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                title,
                content,
                featuredImage,
                status,
                userid
            )
        } catch (error) {
            console.log("error while creating post through appwrite ",error)
            return false;
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                title,
                content,
                featuredImage,
                status

            )
        } catch (error) {
            console.log("error while updating post through appwrite ",error)
            return false;
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
            return true
        } catch (error) {
            console.log("error while deleting post through appwrite ",error);
            return false
        }
    }

    async getOnePost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
        } catch (error) {
            console.log("error while fetching post through appwrite ",error)
        }
    }

    async getPosts(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID
                [Query.equal("status",["active"])]
            )
        } catch (error) {
            console.log("error while fetching posts through appwrite ",error)
        }
    }

    // file upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("error while uploading file through appwrite ",error)   
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileId
            )
            return true
        } catch (error) {
            console.log("error while deleting file through appwrite ",error);
            return false
        }
    }

    filePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileId
        )
    }

}

const articlesServices = new ArticlesServices
export default articlesServices