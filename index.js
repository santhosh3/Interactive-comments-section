
let mydata;
fetch('http://localhost:5500/data.json')
    .then((res) => res.json())
    .then((data) => {
        appendData(data)
        mydata = data
    })


function appendData(data) {
    let main = document.querySelector('.data');
    data.comments.forEach(element => {
        main.innerHTML += createMessage(element)
    });
    like()
    disLike()
    deletCmt()
}

function createMessage(element) {
    if (element.user.username == "juliusomo") {
        return (`<div>
        <div class="comment-box">
        <div class="like-box">
            <div class='plus-btn ${element.id}'>
                <img src="./images/icon-plus.svg" alt="icon-plus" >
            </div>
            <div>
                <p class="like-count" id="like-count${element.id}">${element.score}</p>
            </div>
            <div class='minus-btn ${element.id}'>
                <img src="./images/icon-minus.svg" alt="icon-minus" >
            </div>
        </div>
        <div class="user-cmt-box" id="user">
            <div class="user-detail-box">
                <div class="img-name-date-box">
                    <div class="img-box">
                        <img src=${element.user.image.png} alt="${element.username}" >
                        </div>
                       <div class="user-name-box">
                        <span class="user-name">${element.user.username}</span><span class="month-ago">${element.createdAt}</span>
                       </div>
                     </div>
                      <div class="">
                        <span class="delete-icon ${element.id}">
                        <img src="./images/icon-delete.svg" alt="">
                      </span>
                       </div>
                      </div>
                      <div>
                     <p class="user-cmt">${element.content}</p>
                     </div>  
                     </div>
                    </div> 
                  </div>`)
    }
    else {
        return (
            `<div>
        <div class="comment-box">
        <div class="like-box">
            <div class='plus-btn ${element.id}'>
                <img src="./images/icon-plus.svg" alt="icon-plus" >
            </div>
            <div>
                <p class="like-count" id="like-count${element.id}">${element.score}</p>
            </div>
            <div class='minus-btn ${element.id}'>
                <img src="./images/icon-minus.svg" alt="icon-minus" >
            </div>
        </div>
        <div class="user-cmt-box" id="user">
            <div class="user-detail-box">
                <div class="img-name-date-box">
                    <div class="img-box">
                        <img src=${element.user.image.png} alt="${element.username}" >
                    </div>
                    <div class="user-name-box">
                        <span class="user-name">${element.user.username}</span><span class="month-ago">${element.createdAt}</span>
                    </div>
                </div>
             </div>
             <div>
                <p class="user-cmt">${element.content}</p>
            </div>
        </div>
        </div>
    </div>
`
        )
    }
}

like()
disLike()
newCmtAdd()
deletCmt()

function like() {
    const plusBtn = document.querySelectorAll(".plus-btn")
    plusBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            let classnum = btn.classList[1]
            let score = document.querySelector(`#like-count${classnum}`).innerHTML
            document.querySelector(`#like-count${classnum}`).innerHTML = parseInt(score) + 1
        })
    })
}

function disLike() {
    const minusBtn = document.querySelectorAll(".minus-btn")
    minusBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            let classnum = btn.classList[1]
            let score = document.querySelector(`#like-count${classnum}`).innerHTML
            if (score > 0)
                document.querySelector(`#like-count${classnum}`).innerHTML = parseInt(score) - 1
        })
    })
}

function newCmtAdd() {

    let addCmtBtn = document.querySelector('#send-button')
    addCmtBtn.addEventListener("click", () => {
        let replyObjCmt = {
            "id": Math.round((Math.random()) * 100) + 5,
            "content": document.querySelector('.add-new-cmt').value,
            "createdAt": "2 days ago",
            "score": Math.round((Math.random()) * 100),
            "replies": [],
            "user": {
                "image": {
                    "png": "./images/avatars/image-juliusomo.png",
                    "webp": "./images/avatars/image-juliusomo.webp"
                },
                "username": mydata.currentUser.username,
            }
        }
        mydata.comments.push(replyObjCmt)
        document.querySelector('.data').innerHTML = ""
        appendData(mydata)
    })
}

function deletCmt() {
    let deleteIcon = document.querySelectorAll('.delete-icon')
    deleteIcon.forEach((del) => {

        del.addEventListener('click', (e) => {
            let id = del.classList[1];
            if (e.target) {
                if (confirm('Are You Sure?')) {
                    var li = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
                    li.parentNode.removeChild(li);
                    mydata.comments = mydata.comments.filter((ele) => ele.id != id)
                }
            }
        })
    })
}