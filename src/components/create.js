import { Component } from "react";
class Create extends  Component{
    render(){
        return(
            <div>
                <form>
                    <label>Title</label>
                    <input type="text " placeholder="Enter the title" />
                    <label>Author</label>
                    <input type="text" placeholder="Enter author's name" />
                    <label>Body</label>
                    <textarea cols="30" rows="10"></textarea>
                    <button className="btn-save">Save Blog</button>
                </form>
            </div>
        );
    }
}
export default Create;