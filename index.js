fetch('http://localhost:5500/data.json').then((res) => res.json()).then((data) =>
    appendData(data)
)

function appendData(data) {
    let main = document.querySelector('.data');
    data.comments.forEach(element => {
        main.innerHTML += createMessage(element)
    });
    like()
    disLike()

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
        <div class="user-cmt-box">
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
                    <span class="edit-icon ${element.id}">
                        <img src="./images/icon-edit.svg" alt="">
                    </span>
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
        <div class="none ${element.id}" id='reply-box${element.id}'>
                <div class="post-img-box">
                    <img src="./images/avatars/image-juliusomo.png" alt="image-juliusomo" >
                </div>
                <div class="post-input-box">
                    <input type="text" class="add-cmt-inp" id="add-cmt${element.id}" placeholder="Add reply here">
                </div>
                <div class="post-button-box">
                    <button class="button-9 ${element.id}" id="send-btn" >Send</button>
                </div>
        </div>
        <div id="list-replies_${element.id}" class="list-replies"></div>
    
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
        <div class="user-cmt-box">
            <div class="user-detail-box">
                <div class="img-name-date-box">
                    <div class="img-box">
                        <img src=${element.user.image.png} alt="${element.username}" >
                    </div>
                    <div class="user-name-box">
                        <span class="user-name">${element.user.username}</span><span class="month-ago">${element.createdAt}</span>
                    </div>
                </div>
                <div class="reply-box ${element.id}">
                    <span>
                        <img src="./images/icon-reply.svg" alt="">
                    </span>
                    <span>reply</span>
                </div>
            </div>
            <div>
                <p class="user-cmt">${element.content}</p>
            </div>
        </div>
        </div>
        <div class="none ${element.id}" id='reply-box${element.id}'>
                <div class="post-img-box">
                    <img src="./images/avatars/image-juliusomo.png" alt="image-juliusomo" >
                </div>
                <div class="post-input-box">
                    <input type="text" class="add-cmt-inp" id="add-cmt${element.id}" placeholder="Add reply here">
                </div>
                <div class="post-button-box">
                    <button class="button-9 ${element.id}" id="send-btn" >Send</button>
                </div>
        </div>
        <div id="list-replies_${element.id}" class="list-replies"></div>
    </div>
`
        )
    }
}


like()
disLike()

function like() {

    const plusBtn = document.querySelectorAll(".plus-btn")
    console.log(1323);
    console.log(plusBtn);

    plusBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            let classnum = btn.classList[1]
            console.log(classnum)
            let score = document.querySelector(`#like-count${classnum}`).innerHTML
            // console.log(score)
            document.querySelector(`#like-count${classnum}`).innerHTML = parseInt(score) + 1
        })

    })
}

function disLike() {

    const minusBtn = document.querySelectorAll(".minus-btn")
    // console.log(100323);
    // console.log(minusBtn);

    minusBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            let classnum = btn.classList[1]
            let score = document.querySelector(`#like-count${classnum}`).innerHTML
            // console.log(score)
            document.querySelector(`#like-count${classnum}`).innerHTML = parseInt(score) - 1
        })

    })
}
