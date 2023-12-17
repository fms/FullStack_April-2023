// -----------------------------------------------> Model <----------------------------------------------- //

interface FormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    lastName: HTMLInputElement;
    emailLogin: HTMLInputElement;
    passwordLogin: HTMLInputElement;
    emailRegister: HTMLInputElement;
    passwordRegister: HTMLInputElement;
    post: HTMLTextAreaElement;
    comment: HTMLInputElement;
    profileImage: HTMLImageElement;
}


function newRegisterForm(event: MouseEvent): void {
    event.preventDefault();
    const user = registerForm.elements as FormElements;
    const userEmail: string = findUserEmail();
    const userInArray = usersList.get(userEmail);


    let newUserRegister: NewUser = {
        name: user.name.value,
        lastName: user.lastName.value,
        email: user.emailRegister.value,
        password: user.passwordRegister.value,
        userId: randomNumber(),
        loggedInUser: userLoggedIn,
        img: "./Images/Logo.png",
        posts: userInArray?.posts ? userInArray?.posts : new Map<number, Post>(),
    }
    if (usersList.has(newUserRegister.email)) {
        return alert("Account allready in use!");
    }
    usersList.set(newUserRegister.email, newUserRegister);
    userIdOut++
    saveUsers();
    login(event);
    registerForm.reset();
}


function newJoinForm(event: SubmitEvent): void {
    event.preventDefault();
    const user = joinForm.elements as FormElements;
    const userEmail = user.emailLogin.value;
    const existingUser = usersList.get(userEmail);

    if (existingUser && existingUser.password === user.passwordLogin.value) {


        const rememberMe = document.querySelector("#login-check") as HTMLInputElement;
        const capitalizeFirstLetterName = capitalizeFirstLetter(existingUser.name);

        existingUser.loggedInUser = true;
        userLoggedIn = existingUser.loggedInUser;
        joinForm.classList.add("hidden");
        profileNavLink.textContent = `Hello ${existingUser.name}`;
        profileName.textContent = `Welcome back ${capitalizeFirstLetterName} ${existingUser.lastName}!`;
        profileImage.src = `${existingUser.img}`;

        toggleNavLinks();
        toggleLogInOutButton();
        if (rememberMe.checked) {
            saveUsers();
        }

        joinForm.reset();
        return;
    }
    alert("Invalid email or password");
}


class NewUser {
    constructor(
        public name: string,
        public lastName: string,
        public email: string,
        public password: string,
        public userId: number,
        public loggedInUser: boolean = false,
        public img: string = "./Images/Logo.png",
        public posts: Map<number, Post> | Array<Post> = new Map<number, Post>(),
    ) {

    }
}


class Post {
    constructor(
        public postOwner: string,
        public post: string,
        public comments = new Array<Comments>(),
        public postId: number,
        public profileImage: string,
    ) {
    }
}

class Comments {
    constructor(
        public commentProfileName: string,
        public comment: string,
        public commentOwner: string,
        public commentId: number,
        public commentOwnerImage: string,
    ) {

    }
}

function submitPost(event: SubmitEvent) {
    event.preventDefault();
    const userImage: string = findUserImage();
    const userEmail: string = findUserEmail();
    const userInArray = usersList.get(userEmail);




    if (!editMode) {
        const element = postsForm.elements as FormElements;

        let newPost: Post = {
            postOwner: userInArray?.email!,
            post: element.post.value,
            comments: new Array<Comments>(),
            postId: 0,
            profileImage: `${userImage}`,
        }




        if (userInArray) {
            // @ts-ignore comment
            while (userInArray.posts.has(newPost.postId)) {
                newPost.postId++;
            }


            // @ts-ignore comment
            userInArray.posts.set(newPost.postId, newPost);
            newPost.profileImage = userInArray.img
        }

        postsArray.set(newPost.postId, newPost);
        postsForm.reset();
        updatePostRow();
    }
}


function updatePost(event: MouseEvent): void {
    const target = event.target as HTMLInputElement;
    const parent = target.parentElement as HTMLDivElement;
    const textAreaParent = parent.previousSibling as HTMLDivElement;
    const newTextArea = textAreaParent?.firstChild as HTMLTextAreaElement;
    const oldTextArea = newTextArea.nextElementSibling as HTMLTextAreaElement;
    const userEmail: string = findUserEmail();
    const userInArray = usersList.get(userEmail);
    const postId = parseInt(parent.id);
    const postToUpdateInArray = postsArray.get(postId);

    newTextArea.style.display = "none";
    oldTextArea.style.display = "flex";
    oldTextArea.value = newTextArea.value;

    if (userInArray) {
        // @ts-ignore comment
        const postToUpdate = userInArray.posts.get(postId);
        if (postToUpdate) {
            postToUpdate.post = newTextArea.value;
        }
    }


    if (postToUpdateInArray) {
        postToUpdateInArray.post = newTextArea.value;
    }

    editMode = false;
    toggleButtonsPost(event);
    savePosts();
    saveUsers();
}


function submitComment(event: SubmitEvent): void {
    event.preventDefault();
    if (!editMode) {
        const target = event.target as HTMLFormElement;
        const element = target.elements as FormElements;
        let postSection = target.closest(".posts__main__section__posts") as HTMLDivElement;
        const postOwner = postSection.dataset.email;
        const postId = parseInt(postSection.id);
        const userEmail: string = findUserEmail();
        const userImage: string = findUserImage();
        const userName = usersList.get(userEmail)?.name;
        // @ts-ignore comment
        const post = usersList.get(postOwner!)?.posts.get(postId);

        let newComment: Comments = {
            commentProfileName: userName!,
            comment: element.comment.value,
            commentOwner: userEmail,
            commentId: randomNumber(),
            commentOwnerImage: userImage,
        }

        post.comments.push(newComment);

        target.reset();
        updatePostRow();
        savePosts();
        saveUsers();
    }
}


function updateComment(event: MouseEvent): void {
    const target = event.target as HTMLInputElement;
    const parent = target.parentElement as HTMLDivElement;
    const grandParent = parent.parentElement as HTMLDivElement;
    const commentId = parseInt(grandParent.id);
    const newComment = grandParent.firstChild as HTMLInputElement;
    const oldComment = newComment.nextElementSibling as HTMLInputElement;
    const userEmail: string = findUserEmail();
    let postSection = target.closest(".posts__main__section__posts") as HTMLDivElement;
    const postOwner = postSection.dataset.email;
    const postId = parseInt(postSection.id);
    const userImage: string = findUserImage();
    const userName = usersList.get(userEmail)?.name;

    // @ts-ignore comment
    const post = usersList.get(postOwner!)?.posts.get(postId);

    oldComment.value = newComment.value;
    newComment.classList.toggle("hidden");
    oldComment.classList.toggle("hidden");

    let updatedComment: Comments = {
        commentProfileName: userName!,
        comment: oldComment.value,
        commentOwner: userEmail,
        commentId: randomNumber(),
        commentOwnerImage: userImage,
    }

    post.comments[commentId] = updatedComment;

    editMode = false;
    toggleButtonsPost(event);
    savePosts();
    saveUsers();
}

function uploadImg() {
    const fileInput = document.querySelector('.profile__section__buttons--button--save-file') as HTMLInputElement;


    if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];


        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = (e) => {
                if (e.target && e.target.result) {
                    profileImage.src = e.target.result.toString();
                    usersList.forEach(user => {
                        if (user.loggedInUser) {
                            user.img = profileImage.src;
                        }
                        saveUsers();
                    })
                }
            };

            reader.readAsDataURL(file);

        } else {
            alert('Please select a valid image file.');
        }
    }
}

// -----------------------------------------------> Model <----------------------------------------------- //

// -----------------------------------------------> Controller <----------------------------------------------- //

enum Mains {
    home = 0,
    posts,
    about,
    contact,
    profile,
}

const registerLink = document.querySelector("#register") as HTMLFormElement;
const loginLink = document.querySelector("#login") as HTMLFormElement;
const navLinks = document.querySelectorAll(".navbar-right__link") as NodeListOf<HTMLLinkElement>;
const homeSection = document.querySelector(".home") as HTMLDivElement;
const profileSection = document.querySelector(".profile") as HTMLDivElement;
const postsSection = document.querySelector(".posts") as HTMLLinkElement;
const homeNavLink = document.querySelector(".navbar-right__link--home") as HTMLLinkElement;
const profileNavLink = document.querySelector(".navbar-right__link--my-profile") as HTMLLinkElement;
const postsNavLink = document.querySelector(".navbar-right__link--posts") as HTMLLinkElement;
const profileImage = document.querySelector('.profile__section__img--img') as HTMLImageElement;
const contactNavLink = document.querySelector(".navbar-right__link--contact") as HTMLLinkElement;
const contactSection = document.querySelector(".contact") as HTMLDivElement;
const aboutSection = document.querySelector(".about") as HTMLDivElement;
const aboutNavLink = document.querySelector(".navbar-right--about") as HTMLLinkElement;

function randomNumber() {
    return Math.floor(Math.random() * 1000000);
}

let userIdOut: number = 0;
let userLoggedIn: boolean;

const registerForm = document.querySelector("#register") as HTMLFormElement;
const joinForm = document.querySelector("#login") as HTMLFormElement;
const registerButton = document.querySelector("#register-button") as HTMLButtonElement;
const logInButton = document.querySelector(".navbar-right__link--log-in") as HTMLLinkElement;
const logOutButton = document.querySelector(".navbar-right__link--log-out") as HTMLLinkElement;
const profileName = document.querySelector(".profile__section__header--text") as HTMLParagraphElement;
let usersList = loadUsers();
rememberMeUser();

function rememberMeUser(): void {
    usersList.forEach(user => {
        if (user.loggedInUser) {
            const capitalizeFirstLetterName = capitalizeFirstLetter(user.name);

            userLoggedIn = true;
            joinForm.classList.add("hidden");
            toggleLogInOutButton();
            toggleNavLinks();
            profileNavLink.textContent = `Hello ${user.name}`;
            profileName.textContent = `Welcome back ${capitalizeFirstLetterName} ${user.lastName}!`;
            profileImage.src = `${user.img}`;
        }
        if (!userLoggedIn) {
            profileSection.classList.add("hidden");
            postsSection.classList.add("hidden");
        }
    })
}

function saveUsers(): void {
    usersList.forEach(user => {
        let userPosts: any = [];
        user.posts.forEach((post) => {
            userPosts.push(post);
        })
        user.posts = userPosts;
    })

    const usersListToArray = Array.from(usersList);
    const usersArrayStringify = JSON.stringify(usersListToArray);
    let usersMap = new Map<string, NewUser>(usersListToArray);

    localStorage.setItem("Users", usersArrayStringify);
    usersMap.forEach(user => {
        // @ts-ignore comment
        const postsArray = Object.values(user.posts);
        const postMap = new Map<number, Post>();
        // @ts-ignore comment
        postsArray.forEach(post => {
            postMap.set(post.postId, post);
        })
        user.posts = postMap;
    })

}


function loadUsers(): Map<string, NewUser> {
    const savedUsers = localStorage.getItem("Users");
    if (savedUsers) {
        const parsedList = JSON.parse(savedUsers);
        let usersMap = new Map<string, NewUser>(parsedList)
        usersMap.forEach(user => {
            // @ts-ignore comment
            const postsArray = Object.values(user.posts);
            const postMap = new Map<number, Post>();
            // @ts-ignore comment
            postsArray.forEach(post => {
                postMap.set(post.postId, post);
            })
            user.posts = postMap;
        })
        return usersMap;
    }
    return new Map<string, NewUser>();
}

function capitalizeFirstLetter(name: string): string {
    if (name.length === 0) {
        return name;
    }

    return name.charAt(0).toUpperCase() + name.slice(1);
}

const postsForm = document.querySelector(".posts__section__form") as HTMLFormElement;
const postsMainSection = document.querySelector(".posts__main__section") as HTMLDivElement;
const postWrapper = document.querySelector(".posts-wrapper__main") as HTMLDivElement;


function findUserImage(): string {
    let loggedInUserImage = "none";

    for (const [key, user] of usersList.entries()) {
        if (user.loggedInUser) {
            loggedInUserImage = user.img;
            break;
        }
    }

    return loggedInUserImage;
}

function findUserEmail(): string {

    let loggedInUserEmail = "none";

    for (const [key, user] of usersList.entries()) {
        if (user.loggedInUser) {
            loggedInUserEmail = user.email;
            break;
        }
    }

    return loggedInUserEmail;
}


let editMode = false;


function createMainSectionPosts(postWrapper: Element, post: Post, index: Number): void {
    createPost(postWrapper, post, index);
}


function createPost(postWrapper: Element, post: Post, index: Number): void {

    const postsMainDivSection = createElement("div", "posts__main__section") as HTMLDivElement;
    const postsMainDivSectionPosts = createElement("div", "posts__main__section__posts") as HTMLDivElement;
    const profileImage = createElement("img", "posts__main__section__posts--img") as HTMLImageElement;
    const profileName = createElement("p", "posts__main__section__posts--text") as HTMLParagraphElement;
    const postsMainTextareaDiv = createElement("div", "posts__main__section__posts__textarea") as HTMLDivElement;
    const postsMainTextarea = createElement("textarea", "posts__main__section__posts--textarea post-textarea old-text", post.post) as HTMLTextAreaElement;
    const postsMainTextareaSecond = createElement("textarea", "posts__main__section__posts--textarea post-textarea new-text", post.post) as HTMLTextAreaElement;
    const commentSection = createFormElement("posts__main__section__posts__comment-section", submitComment) as HTMLFormElement;
    const textComment = createInputNonEvent("text", "posts__main__section__posts__comment--text") as HTMLInputElement;
    const submitCommentBtn = createInputNonEvent("submit", "posts__main__section__posts__comment--submit", "Submit") as HTMLInputElement;
    const postOwnerNamer = usersList.get(post.postOwner)?.name;

    profileName.textContent = postOwnerNamer!;
    profileImage.src = post.profileImage;
    postsMainDivSectionPosts.id = index.toString();
    postsMainDivSectionPosts.dataset.email = post.postOwner;
    postsMainTextareaSecond.style.display = "none";
    postsMainTextarea.setAttribute("readonly", "readonly");
    commentSection.id = index.toString();
    textComment.placeholder = "Comment here";
    textComment.id = "comment";

    postsMainTextareaDiv.appendChild(postsMainTextareaSecond);
    postsMainTextareaDiv.appendChild(postsMainTextarea);
    commentSection.appendChild(textComment);
    commentSection.appendChild(submitCommentBtn);
    postsMainTextareaDiv.appendChild(commentSection);
    createComment(postsMainTextareaDiv, post);
    postsMainDivSectionPosts.appendChild(profileImage);
    postsMainDivSectionPosts.appendChild(profileName);
    postsMainDivSectionPosts.appendChild(postsMainTextareaDiv);
    postsMainDivSection.appendChild(postsMainDivSectionPosts);
    createPostButtons(postsMainDivSectionPosts, index);
    postWrapper.appendChild(postsMainDivSection);
}

function createComment(postsMainTextareaDiv: Element, post: Post): void {

    const userEmail: string = findUserEmail();
    const userInArray = usersList.get(userEmail);
    const commentWrapper = createElement("div", ".posts__main__section__posts__wrapper") as HTMLDivElement;

    post.comments.forEach((comment, index) => {
        const commentMainSection = createElement("div", "posts__main__section__posts__wrapper__comments") as HTMLDivElement;;
        const commentText = createInputNonEvent("text", "posts__main__section__posts__wrapper__comments--comment old-comment", `${comment.comment}`) as HTMLInputElement;
        const commentTextNew = createInputNonEvent("text", "posts__main__section__posts__wrapper__comments--comment new-comment hidden", `${comment.comment}`) as HTMLInputElement;
        const commentButtonDiv = createElement("div", "posts__main__section__posts__wrapper__comments__buttons");
        const commentProfileImage = createElement("img", "posts__main__section__posts__wrapper__comments--img") as HTMLImageElement;
        const commentProfileName = createElement("p", "posts__main__section__posts__wrapper__comments--text") as HTMLParagraphElement;
        const commentEditBtn = createInputElement("button", "posts__main__section__wrapper__comments__posts--editbtn", editComment, "Edit") as HTMLInputElement;
        const commentUpdateBtn = createInputElement("button", "posts__main__section__wrapper__comments__posts--updatebtn hidden", updateComment, "Update") as HTMLInputElement;
        const commentCancelBtn = createInputElement("button", "posts__main__section__wrapper__comments__posts--cancelbtn hidden", cancelEditComment, "Cancel") as HTMLInputElement;
        const commentRemoveBtn = createInputElement("button", "posts__main__section__wrapper__comments__posts--removebtn", removeComment, "Remove") as HTMLInputElement;

        commentMainSection.id = index.toString();
        commentProfileImage.src = comment.commentOwnerImage;
        commentProfileName.textContent = comment.commentProfileName;
        commentMainSection.dataset.email = comment.commentOwner;
        commentText.setAttribute("readonly", "readonly");

        userInArray?.posts.forEach(myPost => {
            if (myPost === post) {
                commentRemoveBtn.id = post.postId.toString();
            }
        })

        commentButtonDiv.appendChild(commentEditBtn);
        commentButtonDiv.appendChild(commentUpdateBtn);
        commentButtonDiv.appendChild(commentCancelBtn);
        commentButtonDiv.appendChild(commentRemoveBtn);
        commentMainSection.appendChild(commentProfileImage);
        commentMainSection.appendChild(commentProfileName)
        commentMainSection.appendChild(commentTextNew)
        commentMainSection.appendChild(commentText);
        commentMainSection.appendChild(commentButtonDiv);
        commentWrapper.appendChild(commentMainSection);
        postsMainTextareaDiv.appendChild(commentWrapper);
    })
}

function createPostButtons(postsMainDivSectionPosts: Element, index: Number): void {
    const postButtonDiv = createElement("div", "posts__main__section__posts__buttons post-buttons-div") as HTMLDivElement;
    const PostEditBtn = createInputElement("button", "posts__main__section__posts__buttons--editbtn post-buttons", editPost, "Edit") as HTMLInputElement;
    const PostUpdateBtn = createInputElement("button", "posts__main__section__posts__buttons--updatebtn post-buttons hidden", updatePost, "Update") as HTMLInputElement;
    const PostCancelBtn = createInputElement("button", "posts__main__section__posts__buttons--cancelbtn post-buttons hidden", cancelEditPost, "Cancel") as HTMLInputElement;
    const PostRemoveBtn = createInputElement("button", "posts__main__section__posts__buttons--removebtn post-buttons", removePost, "Remove") as HTMLInputElement;

    postButtonDiv.id = index.toString();


    postButtonDiv.appendChild(PostEditBtn);
    postButtonDiv.appendChild(PostUpdateBtn);
    postButtonDiv.appendChild(PostCancelBtn);
    postButtonDiv.appendChild(PostRemoveBtn);
    postsMainDivSectionPosts.appendChild(postButtonDiv);
}


function createFormElement(className: string, handler: (event: SubmitEvent) => void): Element {
    const form = document.createElement("form") as HTMLFormElement;
    form.classList.add(className);
    form.onsubmit = handler;
    return form;
}


function editPost(event: MouseEvent): void {
    if (editMode) return;

    const userEmail: string = findUserEmail();
    const target = event.target as HTMLInputElement;
    const parent = target.parentElement as HTMLDivElement;
    const grandParent = parent.parentElement as HTMLDivElement;
    const postEmail = grandParent.dataset.email;
    const textAreaParent = parent.previousSibling as HTMLDivElement;
    const newTextArea = textAreaParent?.firstChild as HTMLTextAreaElement;
    const oldTextArea = newTextArea.nextElementSibling as HTMLTextAreaElement;

    if (userEmail !== postEmail) return alert("cant edit other people posts");


    newTextArea.style.display = "flex";
    oldTextArea.style.display = "none";



    newTextArea.focus();
    editMode = true;
    toggleButtonsPost(event);
}


function cancelEditPost(event: MouseEvent): void {
    const target = event.target as HTMLInputElement;
    const parent = target.parentElement as HTMLDivElement;
    const textAreaParent = parent.previousSibling as HTMLDivElement;
    const newTextArea = textAreaParent?.firstChild as HTMLTextAreaElement;
    const oldTextArea = newTextArea.nextElementSibling as HTMLTextAreaElement;

    newTextArea.style.display = "none";
    oldTextArea.style.display = "flex";
    newTextArea.value = oldTextArea.value;

    editMode = false;
    toggleButtonsPost(event);
}


function editComment(event: MouseEvent): void {
    if (editMode) {
        return;
    }
    const target = event.target as HTMLInputElement;
    const parent = target.parentElement as HTMLDivElement;
    const grandParent = parent.parentElement as HTMLDivElement;
    const commentEmail = grandParent.dataset.email;
    const newComment = grandParent.firstChild as HTMLInputElement;
    const userEmail: string = findUserEmail();

    if (userEmail !== commentEmail) return alert("cannot edit other people comment");

    newComment.classList.toggle("hidden");
    const oldComment = newComment.nextElementSibling as HTMLInputElement;
    oldComment.classList.toggle("hidden");





    newComment.focus();
    editMode = true;
    toggleButtonsPost(event);
}


function cancelEditComment(event: MouseEvent): void {
    const target = event.target as HTMLInputElement;
    const parent = target.parentElement as HTMLDivElement;
    const grandParent = parent.parentElement as HTMLDivElement;
    const newComment = grandParent.firstChild as HTMLInputElement;
    const oldComment = newComment.nextElementSibling as HTMLInputElement;
    newComment.value = oldComment.value;

    newComment.classList.toggle("hidden");
    oldComment.classList.toggle("hidden");

    editMode = false;
    toggleButtonsPost(event);
}



function createInputElement(inputType: string, className: string, handler: (event: MouseEvent) => void, content: string = ""): HTMLElement {
    const input = document.createElement("input");
    input.type = inputType;
    input.className = className;
    input.addEventListener("click", handler);
    if (content) {
        input.value = content;
    }
    return input;
}

function createInputNonEvent(inputType: string, className: string, content: string = ""): HTMLElement {
    const input = document.createElement("input");
    input.type = inputType;
    input.className = className;
    if (content) {
        input.value = content;
    }
    return input;
}

function createElement(typeName: string, className: string, content: string = ""): HTMLElement {
    const element = document.createElement(typeName);
    element.className = className;
    if (content) {
        element.textContent = content;
    }
    return element;
}



function toggleButtonsPost(event: MouseEvent): void {
    const target = event.target as HTMLInputElement;
    const buttonsDiv = target.parentElement as HTMLDivElement;
    const buttonDivNodes = buttonsDiv.childNodes as NodeListOf<HTMLInputElement>;

    buttonDivNodes.forEach(button => {
        button.classList.toggle("hidden");
    })
}


function savePosts(): void {
    const postsListToArray = Array.from(postsArray);
    const postsArrayStringify = JSON.stringify(postsListToArray);
    localStorage.setItem("Posts", postsArrayStringify);
}

function loadPosts(): Map<Number, Post> {
    const savedPosts = localStorage.getItem("Posts");
    if (savedPosts) {
        const parsedList = JSON.parse(savedPosts);
        let postsMap = new Map<Number, Post>(parsedList);
        return postsMap;
    }
    return new Map<Number, Post>();
}


// -----------------------------------------------> Controller <----------------------------------------------- //

// -----------------------------------------------> View <----------------------------------------------- //

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
})

const hiddenElements = document.querySelectorAll('.opacity');
hiddenElements.forEach((el) => observer.observe(el))

navLinks.forEach((link, index) => {
    if (link.classList.contains("visible")) {
        return;
    }
    link.addEventListener("click", event => {
        let prevMain = document.querySelector(".visible") as HTMLDivElement;
        let prevActive = document.querySelector(".active") as HTMLLinkElement;
        let target = event.target as HTMLLinkElement;
        let newMain = document.querySelector(`.${Mains[index]}`) as HTMLDivElement;

        prevMain.classList.replace("visible", "hidden");
        prevActive.classList.remove("active");
        target.classList.add("active");
        newMain.classList.replace("hidden", "visible");
    })
})

function login(event: MouseEvent): void {
    event.preventDefault();
    loginLink.style.left = "4px";
    loginLink.style.right = "-520px";
    loginLink.style.opacity = "1";

    registerLink.style.left = "-510px";
    registerLink.style.right = "5px";
    registerLink.style.opacity = "0";
}

function register(event: MouseEvent): void {
    event.preventDefault();
    loginLink.style.left = "-510px";
    loginLink.style.right = "5px";
    loginLink.style.opacity = "0";

    registerLink.style.left = "4px";
    registerLink.style.right = "-520px";
    registerLink.style.opacity = "1";
}

function contactSubmit(event: SubmitEvent): void {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    if (target) {
        const contactForm = document.querySelector(".contact__section__form") as HTMLFormElement;
        contactForm.reset();
        alert("We will contact with you!")
    }
}

function toggleLogInOutButton() {
    logInButton.classList.toggle("hidden");
    logOutButton.classList.toggle("hidden");
}

function toggleNavLinks() {
    if (!postsSection.classList.contains("hidden")) {
        postsSection.classList.add("hidden");
    }
    logginOutHiddenLinks(postsSection, postsNavLink);

    if (!profileSection.classList.contains("hidden")) {
        profileSection.classList.add("hidden");
    }
    logginOutHiddenLinks(profileSection, profileNavLink);

    if (aboutNavLink.classList.contains("active")) {
        logginOutDefaultLinks(aboutSection, aboutNavLink);
    }
    if (contactSection.classList.contains("visible")) {
        logginOutDefaultLinks(contactSection, contactNavLink);
    }
}

function logginOutHiddenLinks(section: Element, navLink: Element) {
    navLink.classList.toggle("hidden");
    navLink.classList.remove("active");
    section.classList.remove("visible");
}

function logginOutDefaultLinks(section: Element, navLink: Element) {
    navLink.classList.remove("active");
    section.classList.remove("visible");
    section.classList.add("hidden");
}

function logOut(event: MouseEvent) {
    const target = event.target as HTMLLinkElement;
    if (target)
        usersList.forEach(user => {
            if (user.loggedInUser) {
                user.loggedInUser = false;
                userLoggedIn = user.loggedInUser;
                joinForm.classList.remove("hidden");

                addActive(homeSection, homeNavLink);
                toggleLogInOutButton();
                toggleNavLinks();
                saveUsers();
            }
        })
}

function addActive(section: Element, navLink: Element) {
    if (section.classList.contains("hidden")) {
        section.classList.remove("hidden");
        section.classList.add("visible");
        navLink.classList.add("active")
    }
}

let postsArray = loadPosts();
updatePostRow();

function updatePostRow(): void {
    postWrapper.replaceChildren();
    usersList.forEach((user, userId) => {
        user.userId = parseInt(userId);
        user.posts.forEach((post, newPostId) => {
            if (typeof newPostId === 'number') {
                createMainSectionPosts(postWrapper, post, newPostId);
            }
        })
    })
    savePosts();
    saveUsers();
}


function removePost(event: MouseEvent): void {
    if (editMode) {
        return;
    }
    const target = event.target as HTMLInputElement;
    const parent = target.parentElement as HTMLDivElement;
    const postId = parseInt(parent.id);
    const userEmail: string = findUserEmail();
    const userInArray = usersList.get(userEmail);
    const grandParent = parent.parentElement as HTMLDivElement;
    const postEmail = grandParent.dataset.email;

    if (userEmail !== postEmail) return alert("cant remove other people posts");

    if (userInArray) {
        // @ts-ignore comment
        userInArray.posts.delete(postId);
    }


    postsArray.delete(postId);
    let postSection = target.closest(".posts__main__section") as HTMLDivElement;
    postWrapper.removeChild(postSection!);


    saveUsers();
    savePosts();
}


function removeComment(event: MouseEvent): void {
    if (editMode) {
        return;
    }

    const target = event.target as HTMLInputElement;
    const parent = target.parentElement as HTMLDivElement;
    const grandParent = parent.parentElement as HTMLDivElement;
    const commentsWrapper = grandParent.parentElement as HTMLDivElement;
    const commentEmail = grandParent.dataset.email;
    const userEmail: string = findUserEmail();
    const commentId = parseInt(grandParent.id);
    let postSection = target.closest(".posts__main__section__posts") as HTMLDivElement;
    const postId = parseInt(postSection.id);
    const postOwner = postSection.dataset.email;

    // @ts-ignore comment
    const post = usersList.get(postOwner!)?.posts.get(postId);

    if (userEmail !== commentEmail) return alert("cannot remove other people comment");

    post.comments.splice(commentId, 1)
    commentsWrapper.removeChild(grandParent);
    savePosts();
    saveUsers();
}

// -----------------------------------------------> View <----------------------------------------------- //