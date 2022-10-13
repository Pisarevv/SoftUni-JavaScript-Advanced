function solution(){
    class Post{
        constructor(title,content){
            this.title = title;
            this.content = content;
        };
    
        toString() {
            return `Post: ${this.title}` + '\n' + `Content: ${this.content}`;
        };
    }
    
    class SocialMediaPost extends Post{
        constructor(title,content,likes,dislikes){
            super(title,content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        };
    
        addComment(comment) {
          this.comments.push(comment);  
        };
    
        toString() {
            let resultString = `Post: ${this.title}` + '\n';
            resultString += `Content: ${this.content}` + '\n';
            resultString += `Rating: ${this.likes - this.dislikes}` + '\n';
            if(this.comments.length > 0){
                resultString += `Comments:` + '\n';
                for(let comment of this.comments){
                    resultString += ` * ${comment}` + '\n';
                };
                
            }
            resultString = resultString.trimEnd();
            return resultString;
    
        }; 
    };

    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content);
            this.views = views;
        };

        view() {
            this.views++;
            return this;
        };

        
        toString() {
            return `Post: ${this.title}` + '\n' + `Content: ${this.content}` + '\n' + `Views: ${this.views}`;
        };
    
    }


    return{
        Post,
        SocialMediaPost,
        BlogPost
    }
}




const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);


console.log(scm.toString());

let blog = new classes.BlogPost("TestBlog", "TestHEHE",0);
blog.view();
blog.view();
console.log(blog.toString());
