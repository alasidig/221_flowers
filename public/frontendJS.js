function likeFlower(source) {
    source.classList.toggle('bi-heart')    
    source.classList.toggle('bi-heart-fill')    
}

const seeCommentsBtn = document.getElementById('seeComBtn')

function addComment() {
    let data = new FormData(document.getElementById("commentForm"))
    const newComment = {
        comment: data.get("comment"),
        author: data.get("author"),
    }

    comments.push(newComment)
    showComments()

}
const showComments = ()=>{
    let output = (comments.length > 0) ? "<h2>Users Comments</h2>" : "<h2>No Comments</h2>"
                output += ` <form class="col-lg-6" id="commentForm" onsubmit=" return addComment()">
                                <input type="text" name="author" class="form-control" placeholder="Your name" required>
                                <textarea name="comment" class="form-control" cols="30" rows="5" placeholder="Your comment" required></textarea>
                                <div>
                                    <button name="submit"   type="submit"  class="btn btn-outline-primary float-end" >Add A Comment</button>
                                </div>
                            </form>`
                if (comments.length > 0) {
                    comments.forEach((comment) => {
                        output += `
                       <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title"> ${comment["author"]}</h4>
                                <p class="card-text"> ${comment["comment"]}</p>
                            </div>
                        </div>
                      </div>`;
                    })
                }
                document.querySelector("#commentsRow").innerHTML = output
            
}
seeCommentsBtn.addEventListener('click',showComments)

const comments = [
    {
        author:'Anonymous',
        comment:'Smells good and looks nice'
    },
    {
        author:'Ali',
        comment:'Beautiful'
    }
]