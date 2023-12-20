"use strict";
// -----------------------------------------------> Model <----------------------------------------------- //
function newRegisterForm(event) {
    event.preventDefault();
    const user = registerForm.elements;
    const userEmail = findUserEmail();
    const userInArray = usersList.get(userEmail);
    let newUserRegister = {
        name: user.name.value,
        lastName: user.lastName.value,
        email: user.emailRegister.value,
        password: user.passwordRegister.value,
        userId: randomNumber(),
        loggedInUser: userLoggedIn,
        img: "./Images/Logo.png",
        posts: (userInArray === null || userInArray === void 0 ? void 0 : userInArray.posts) ? userInArray === null || userInArray === void 0 ? void 0 : userInArray.posts : new Map(),
    };
    if (usersList.has(newUserRegister.email)) {
        return alert("Account allready in use!");
    }
    usersList.set(newUserRegister.email, newUserRegister);
    userIdOut++;
    saveUsers();
    login(event);
    registerForm.reset();
}
function newJoinForm(event) {
    event.preventDefault();
    const user = joinForm.elements;
    const userEmail = user.emailLogin.value;
    const existingUser = usersList.get(userEmail);
    if (existingUser && existingUser.password === user.passwordLogin.value) {
        const rememberMe = document.querySelector("#login-check");
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
    constructor(name, lastName, email, password, userId, loggedInUser = false, img = "./Images/Logo.png", posts = new Map()) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.userId = userId;
        this.loggedInUser = loggedInUser;
        this.img = img;
        this.posts = posts;
    }
}
class Post {
    constructor(postOwner, post, comments = new Array(), postId, profileImage) {
        this.postOwner = postOwner;
        this.post = post;
        this.comments = comments;
        this.postId = postId;
        this.profileImage = profileImage;
    }
}
class Comments {
    constructor(commentProfileName, comment, commentOwner, commentId, commentOwnerImage) {
        this.commentProfileName = commentProfileName;
        this.comment = comment;
        this.commentOwner = commentOwner;
        this.commentId = commentId;
        this.commentOwnerImage = commentOwnerImage;
    }
}
function submitPost(event) {
    event.preventDefault();
    const userImage = findUserImage();
    const userEmail = findUserEmail();
    const userInArray = usersList.get(userEmail);
    if (!editMode) {
        const element = postsForm.elements;
        let newPost = {
            postOwner: userInArray === null || userInArray === void 0 ? void 0 : userInArray.email,
            post: element.post.value,
            comments: new Array(),
            postId: 0,
            profileImage: `${userImage}`,
        };
        if (userInArray) {
            // @ts-ignore comment
            while (userInArray.posts.has(newPost.postId)) {
                newPost.postId++;
            }
            // @ts-ignore comment
            userInArray.posts.set(newPost.postId, newPost);
            newPost.profileImage = userInArray.img;
        }
        postsArray.set(newPost.postId, newPost);
        postsForm.reset();
        updatePostRow();
    }
}
function updatePost(event) {
    const target = event.target;
    const parent = target.parentElement;
    const textAreaParent = parent.previousSibling;
    const newTextArea = textAreaParent === null || textAreaParent === void 0 ? void 0 : textAreaParent.firstChild;
    const oldTextArea = newTextArea.nextElementSibling;
    const userEmail = findUserEmail();
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
function submitComment(event) {
    var _a, _b;
    event.preventDefault();
    if (!editMode) {
        const target = event.target;
        const element = target.elements;
        let postSection = target.closest(".posts__main__section__posts");
        const postOwner = postSection.dataset.email;
        const postId = parseInt(postSection.id);
        const userEmail = findUserEmail();
        const userImage = findUserImage();
        const userName = (_a = usersList.get(userEmail)) === null || _a === void 0 ? void 0 : _a.name;
        // @ts-ignore comment
        const post = (_b = usersList.get(postOwner)) === null || _b === void 0 ? void 0 : _b.posts.get(postId);
        let newComment = {
            commentProfileName: userName,
            comment: element.comment.value,
            commentOwner: userEmail,
            commentId: randomNumber(),
            commentOwnerImage: userImage,
        };
        post.comments.push(newComment);
        target.reset();
        updatePostRow();
        savePosts();
        saveUsers();
    }
}
function updateComment(event) {
    var _a, _b;
    const target = event.target;
    const parent = target.parentElement;
    const grandParent = parent.parentElement;
    const commentId = parseInt(grandParent.id);
    const newComment = grandParent.firstChild;
    const oldComment = newComment.nextElementSibling;
    const userEmail = findUserEmail();
    let postSection = target.closest(".posts__main__section__posts");
    const postOwner = postSection.dataset.email;
    const postId = parseInt(postSection.id);
    const userImage = findUserImage();
    const userName = (_a = usersList.get(userEmail)) === null || _a === void 0 ? void 0 : _a.name;
    // @ts-ignore comment
    const post = (_b = usersList.get(postOwner)) === null || _b === void 0 ? void 0 : _b.posts.get(postId);
    oldComment.value = newComment.value;
    newComment.classList.toggle("hidden");
    oldComment.classList.toggle("hidden");
    let updatedComment = {
        commentProfileName: userName,
        comment: oldComment.value,
        commentOwner: userEmail,
        commentId: randomNumber(),
        commentOwnerImage: userImage,
    };
    post.comments[commentId] = updatedComment;
    editMode = false;
    toggleButtonsPost(event);
    savePosts();
    saveUsers();
}
function uploadImg() {
    const fileInput = document.querySelector('.profile__section__buttons--button--save-file');
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
                    });
                }
            };
            reader.readAsDataURL(file);
        }
        else {
            alert('Please select a valid image file.');
        }
    }
}
// -----------------------------------------------> Model <----------------------------------------------- //
// -----------------------------------------------> Controller <----------------------------------------------- //
var Mains;
(function (Mains) {
    Mains[Mains["home"] = 0] = "home";
    Mains[Mains["posts"] = 1] = "posts";
    Mains[Mains["about"] = 2] = "about";
    Mains[Mains["contact"] = 3] = "contact";
    Mains[Mains["profile"] = 4] = "profile";
})(Mains || (Mains = {}));
const registerLink = document.querySelector("#register");
const loginLink = document.querySelector("#login");
const navLinks = document.querySelectorAll(".navbar-right__link");
const homeSection = document.querySelector(".home");
const profileSection = document.querySelector(".profile");
const postsSection = document.querySelector(".posts");
const homeNavLink = document.querySelector(".navbar-right__link--home");
const profileNavLink = document.querySelector(".navbar-right__link--my-profile");
const postsNavLink = document.querySelector(".navbar-right__link--posts");
const profileImage = document.querySelector('.profile__section__img--img');
const contactNavLink = document.querySelector(".navbar-right__link--contact");
const contactSection = document.querySelector(".contact");
const aboutSection = document.querySelector(".about");
const aboutNavLink = document.querySelector(".navbar-right--about");
function randomNumber() {
    return Math.floor(Math.random() * 1000000);
}
let userIdOut = 0;
let userLoggedIn;
const registerForm = document.querySelector("#register");
const joinForm = document.querySelector("#login");
const registerButton = document.querySelector("#register-button");
const logInButton = document.querySelector(".navbar-right__link--log-in");
const logOutButton = document.querySelector(".navbar-right__link--log-out");
const profileName = document.querySelector(".profile__section__header--text");
let usersList = loadUsers();
rememberMeUser();
function rememberMeUser() {
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
    });
}
function saveUsers() {
    usersList.forEach(user => {
        let userPosts = [];
        user.posts.forEach((post) => {
            userPosts.push(post);
        });
        user.posts = userPosts;
    });
    const usersListToArray = Array.from(usersList);
    const usersArrayStringify = JSON.stringify(usersListToArray);
    let usersMap = new Map(usersListToArray);
    localStorage.setItem("Users", usersArrayStringify);
    usersMap.forEach(user => {
        // @ts-ignore comment
        const postsArray = Object.values(user.posts);
        const postMap = new Map();
        // @ts-ignore comment
        postsArray.forEach(post => {
            postMap.set(post.postId, post);
        });
        user.posts = postMap;
    });
}
function loadUsers() {
    const savedUsers = localStorage.getItem("Users");
    if (savedUsers) {
        const parsedList = JSON.parse(savedUsers);
        let usersMap = new Map(parsedList);
        usersMap.forEach(user => {
            // @ts-ignore comment
            const postsArray = Object.values(user.posts);
            const postMap = new Map();
            // @ts-ignore comment
            postsArray.forEach(post => {
                postMap.set(post.postId, post);
            });
            user.posts = postMap;
        });
        return usersMap;
    }
    return new Map();
}
function capitalizeFirstLetter(name) {
    if (name.length === 0) {
        return name;
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
}
const postsForm = document.querySelector(".posts__section__form");
const postsMainSection = document.querySelector(".posts__main__section");
const postWrapper = document.querySelector(".posts-wrapper__main");
function findUserImage() {
    let loggedInUserImage = "none";
    for (const [key, user] of usersList.entries()) {
        if (user.loggedInUser) {
            loggedInUserImage = user.img;
            break;
        }
    }
    return loggedInUserImage;
}
function findUserEmail() {
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
function createMainSectionPosts(postWrapper, post, index) {
    createPost(postWrapper, post, index);
}
function createPost(postWrapper, post, index) {
    var _a;
    const postsMainDivSection = createElement("div", "posts__main__section");
    const postsMainDivSectionPosts = createElement("div", "posts__main__section__posts");
    const profileImage = createElement("img", "posts__main__section__posts--img");
    const profileName = createElement("p", "posts__main__section__posts--text");
    const postsMainTextareaDiv = createElement("div", "posts__main__section__posts__textarea");
    const postsMainTextarea = createElement("textarea", "posts__main__section__posts--textarea post-textarea old-text", post.post);
    const postsMainTextareaSecond = createElement("textarea", "posts__main__section__posts--textarea post-textarea new-text", post.post);
    const commentSection = createFormElement("posts__main__section__posts__comment-section", submitComment);
    const textComment = createInputNonEvent("text", "posts__main__section__posts__comment--text");
    const submitCommentBtn = createInputNonEvent("submit", "posts__main__section__posts__comment--submit", "Submit");
    const postOwnerNamer = (_a = usersList.get(post.postOwner)) === null || _a === void 0 ? void 0 : _a.name;
    profileName.textContent = postOwnerNamer;
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
function createComment(postsMainTextareaDiv, post) {
    const userEmail = findUserEmail();
    const userInArray = usersList.get(userEmail);
    const commentWrapper = createElement("div", ".posts__main__section__posts__wrapper");
    post.comments.forEach((comment, index) => {
        const commentMainSection = createElement("div", "posts__main__section__posts__wrapper__comments");
        ;
        const commentText = createInputNonEvent("text", "posts__main__section__posts__wrapper__comments--comment old-comment", `${comment.comment}`);
        const commentTextNew = createInputNonEvent("text", "posts__main__section__posts__wrapper__comments--comment new-comment hidden", `${comment.comment}`);
        const commentButtonDiv = createElement("div", "posts__main__section__posts__wrapper__comments__buttons");
        const commentProfileImage = createElement("img", "posts__main__section__posts__wrapper__comments--img");
        const commentProfileName = createElement("p", "posts__main__section__posts__wrapper__comments--text");
        const commentEditBtn = createInputElement("button", "posts__main__section__wrapper__comments__posts--editbtn", editComment, "Edit");
        const commentUpdateBtn = createInputElement("button", "posts__main__section__wrapper__comments__posts--updatebtn hidden", updateComment, "Update");
        const commentCancelBtn = createInputElement("button", "posts__main__section__wrapper__comments__posts--cancelbtn hidden", cancelEditComment, "Cancel");
        const commentRemoveBtn = createInputElement("button", "posts__main__section__wrapper__comments__posts--removebtn", removeComment, "Remove");
        commentMainSection.id = index.toString();
        commentProfileImage.src = comment.commentOwnerImage;
        commentProfileName.textContent = comment.commentProfileName;
        commentMainSection.dataset.email = comment.commentOwner;
        commentText.setAttribute("readonly", "readonly");
        userInArray === null || userInArray === void 0 ? void 0 : userInArray.posts.forEach(myPost => {
            if (myPost === post) {
                commentRemoveBtn.id = post.postId.toString();
            }
        });
        commentButtonDiv.appendChild(commentEditBtn);
        commentButtonDiv.appendChild(commentUpdateBtn);
        commentButtonDiv.appendChild(commentCancelBtn);
        commentButtonDiv.appendChild(commentRemoveBtn);
        commentMainSection.appendChild(commentProfileImage);
        commentMainSection.appendChild(commentProfileName);
        commentMainSection.appendChild(commentTextNew);
        commentMainSection.appendChild(commentText);
        commentMainSection.appendChild(commentButtonDiv);
        commentWrapper.appendChild(commentMainSection);
        postsMainTextareaDiv.appendChild(commentWrapper);
    });
}
function createPostButtons(postsMainDivSectionPosts, index) {
    const postButtonDiv = createElement("div", "posts__main__section__posts__buttons post-buttons-div");
    const PostEditBtn = createInputElement("button", "posts__main__section__posts__buttons--editbtn post-buttons", editPost, "Edit");
    const PostUpdateBtn = createInputElement("button", "posts__main__section__posts__buttons--updatebtn post-buttons hidden", updatePost, "Update");
    const PostCancelBtn = createInputElement("button", "posts__main__section__posts__buttons--cancelbtn post-buttons hidden", cancelEditPost, "Cancel");
    const PostRemoveBtn = createInputElement("button", "posts__main__section__posts__buttons--removebtn post-buttons", removePost, "Remove");
    postButtonDiv.id = index.toString();
    postButtonDiv.appendChild(PostEditBtn);
    postButtonDiv.appendChild(PostUpdateBtn);
    postButtonDiv.appendChild(PostCancelBtn);
    postButtonDiv.appendChild(PostRemoveBtn);
    postsMainDivSectionPosts.appendChild(postButtonDiv);
}
function createFormElement(className, handler) {
    const form = document.createElement("form");
    form.classList.add(className);
    form.onsubmit = handler;
    return form;
}
function editPost(event) {
    if (editMode)
        return;
    const userEmail = findUserEmail();
    const target = event.target;
    const parent = target.parentElement;
    const grandParent = parent.parentElement;
    const postEmail = grandParent.dataset.email;
    const textAreaParent = parent.previousSibling;
    const newTextArea = textAreaParent === null || textAreaParent === void 0 ? void 0 : textAreaParent.firstChild;
    const oldTextArea = newTextArea.nextElementSibling;
    if (userEmail !== postEmail)
        return alert("cant edit other people posts");
    newTextArea.style.display = "flex";
    oldTextArea.style.display = "none";
    newTextArea.focus();
    editMode = true;
    toggleButtonsPost(event);
}
function cancelEditPost(event) {
    const target = event.target;
    const parent = target.parentElement;
    const textAreaParent = parent.previousSibling;
    const newTextArea = textAreaParent === null || textAreaParent === void 0 ? void 0 : textAreaParent.firstChild;
    const oldTextArea = newTextArea.nextElementSibling;
    newTextArea.style.display = "none";
    oldTextArea.style.display = "flex";
    newTextArea.value = oldTextArea.value;
    editMode = false;
    toggleButtonsPost(event);
}
function editComment(event) {
    if (editMode) {
        return;
    }
    const target = event.target;
    const parent = target.parentElement;
    const grandParent = parent.parentElement;
    const commentEmail = grandParent.dataset.email;
    const newComment = grandParent.firstChild;
    const userEmail = findUserEmail();
    if (userEmail !== commentEmail)
        return alert("cannot edit other people comment");
    newComment.classList.toggle("hidden");
    const oldComment = newComment.nextElementSibling;
    oldComment.classList.toggle("hidden");
    newComment.focus();
    editMode = true;
    toggleButtonsPost(event);
}
function cancelEditComment(event) {
    const target = event.target;
    const parent = target.parentElement;
    const grandParent = parent.parentElement;
    const newComment = grandParent.firstChild;
    const oldComment = newComment.nextElementSibling;
    newComment.value = oldComment.value;
    newComment.classList.toggle("hidden");
    oldComment.classList.toggle("hidden");
    editMode = false;
    toggleButtonsPost(event);
}
function createInputElement(inputType, className, handler, content = "") {
    const input = document.createElement("input");
    input.type = inputType;
    input.className = className;
    input.addEventListener("click", handler);
    if (content) {
        input.value = content;
    }
    return input;
}
function createInputNonEvent(inputType, className, content = "") {
    const input = document.createElement("input");
    input.type = inputType;
    input.className = className;
    if (content) {
        input.value = content;
    }
    return input;
}
function createElement(typeName, className, content = "") {
    const element = document.createElement(typeName);
    element.className = className;
    if (content) {
        element.textContent = content;
    }
    return element;
}
function toggleButtonsPost(event) {
    const target = event.target;
    const buttonsDiv = target.parentElement;
    const buttonDivNodes = buttonsDiv.childNodes;
    buttonDivNodes.forEach(button => {
        button.classList.toggle("hidden");
    });
}
function savePosts() {
    const postsListToArray = Array.from(postsArray);
    const postsArrayStringify = JSON.stringify(postsListToArray);
    localStorage.setItem("Posts", postsArrayStringify);
}
function loadPosts() {
    const savedPosts = localStorage.getItem("Posts");
    if (savedPosts) {
        const parsedList = JSON.parse(savedPosts);
        let postsMap = new Map(parsedList);
        return postsMap;
    }
    return new Map();
}
// -----------------------------------------------> Controller <----------------------------------------------- //
// -----------------------------------------------> View <----------------------------------------------- //
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    });
});
const hiddenElements = document.querySelectorAll('.opacity');
hiddenElements.forEach((el) => observer.observe(el));
navLinks.forEach((link, index) => {
    if (link.classList.contains("visible")) {
        return;
    }
    link.addEventListener("click", event => {
        let prevMain = document.querySelector(".visible");
        let prevActive = document.querySelector(".active");
        let target = event.target;
        let newMain = document.querySelector(`.${Mains[index]}`);
        prevMain.classList.replace("visible", "hidden");
        prevActive.classList.remove("active");
        target.classList.add("active");
        newMain.classList.replace("hidden", "visible");
    });
});
function login(event) {
    event.preventDefault();
    loginLink.style.left = "4px";
    loginLink.style.right = "-520px";
    loginLink.style.opacity = "1";
    registerLink.style.left = "-510px";
    registerLink.style.right = "5px";
    registerLink.style.opacity = "0";
}
function register(event) {
    event.preventDefault();
    loginLink.style.left = "-510px";
    loginLink.style.right = "5px";
    loginLink.style.opacity = "0";
    registerLink.style.left = "4px";
    registerLink.style.right = "-520px";
    registerLink.style.opacity = "1";
}
function contactSubmit(event) {
    event.preventDefault();
    const target = event.target;
    if (target) {
        const contactForm = document.querySelector(".contact__section__form");
        contactForm.reset();
        alert("We will contact with you!");
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
function logginOutHiddenLinks(section, navLink) {
    navLink.classList.toggle("hidden");
    navLink.classList.remove("active");
    section.classList.remove("visible");
}
function logginOutDefaultLinks(section, navLink) {
    navLink.classList.remove("active");
    section.classList.remove("visible");
    section.classList.add("hidden");
}
function logOut(event) {
    const target = event.target;
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
        });
}
function addActive(section, navLink) {
    if (section.classList.contains("hidden")) {
        section.classList.remove("hidden");
        section.classList.add("visible");
        navLink.classList.add("active");
    }
}
let postsArray = loadPosts();
updatePostRow();
function updatePostRow() {
    postWrapper.replaceChildren();
    usersList.forEach((user, userId) => {
        user.userId = parseInt(userId);
        user.posts.forEach((post, newPostId) => {
            if (typeof newPostId === 'number') {
                createMainSectionPosts(postWrapper, post, newPostId);
            }
        });
    });
    savePosts();
    saveUsers();
}
function removePost(event) {
    if (editMode) {
        return;
    }
    const target = event.target;
    const parent = target.parentElement;
    const postId = parseInt(parent.id);
    const userEmail = findUserEmail();
    const userInArray = usersList.get(userEmail);
    const grandParent = parent.parentElement;
    const postEmail = grandParent.dataset.email;
    if (userEmail !== postEmail)
        return alert("cant remove other people posts");
    if (userInArray) {
        // @ts-ignore comment
        userInArray.posts.delete(postId);
    }
    postsArray.delete(postId);
    let postSection = target.closest(".posts__main__section");
    postWrapper.removeChild(postSection);
    saveUsers();
    savePosts();
}
function removeComment(event) {
    var _a;
    if (editMode) {
        return;
    }
    const target = event.target;
    const parent = target.parentElement;
    const grandParent = parent.parentElement;
    const commentsWrapper = grandParent.parentElement;
    const commentEmail = grandParent.dataset.email;
    const userEmail = findUserEmail();
    const commentId = parseInt(grandParent.id);
    let postSection = target.closest(".posts__main__section__posts");
    const postId = parseInt(postSection.id);
    const postOwner = postSection.dataset.email;
    // @ts-ignore comment
    const post = (_a = usersList.get(postOwner)) === null || _a === void 0 ? void 0 : _a.posts.get(postId);
    if (userEmail !== commentEmail)
        return alert("cannot remove other people comment");
    post.comments.splice(commentId, 1);
    commentsWrapper.removeChild(grandParent);
    savePosts();
    saveUsers();
}
// -----------------------------------------------> View <----------------------------------------------- //
