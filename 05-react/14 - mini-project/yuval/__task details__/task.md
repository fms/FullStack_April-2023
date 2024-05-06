> [!IMPORTANT]
> This assignment is intended to simulate a **work exam**. Although you have a week to complete the assignment, I suggest you try and complete it in 3 hours.
>
> The opening paragraph might appear in a real exam.

<hr>

### Legal

The qualifying process you are going through and this test, in particular, is confidential information that is part of organizational processes in Fictional™ Technologies Ltd. Distribution, posting, or publishing of details or data related to the qualifying process or the test including, but not limited to distribution, posting, or publishing any part of the examination, oral or written, constitutes serious harm and damages to Fictional™ Technologies Ltd. Answering the test shall be construed as consent and agreement to maintain the qualifying and the testing process in confidentiality, not distribute them or pass them to any other corporation or person, together and separately.

Time: up to 3 hours

### General Notes

- Using Google is allowed
- Using Chat-GPT is allowed

  In the following exam, you will be required to solve various problems utilizing all sorts of technologies. Please make sure to spend your time wisely on each question (answer bonus sections only if you have finished questions fully), in case you are stuck it is recommended to move on to the next question.

> [!TIP]
>
> 1. Try to solve the questions in the best possible manner, even if you have no prior experience with a specific concept.
> 2. The code should clearly reflect what you have accomplished and the approach you have taken towards finding a solution.

### Requirements & Guidelines

1. Choice of tools, frameworks, libraries, caching mechanisms, and architecture, etc. is completely free.
2. Attention should be given to clean coding and best practices.

## About The Exam

You are about to develop a **Dog Talks** application.

**Dog Talks** is designed to display an image gallery of dog breeds and a discussion page about it.

The relevant endpoints are described on the Dog API site, found at https://dog.ceo/dog-api/documentation/.

### Exam

Please program the following tasks:

#### 1. Home page

1.  Get the breed images from the Dog API site. Use a hard-coded list of breeds. Alternatively, use bonus question 1 below to dynamically fetch the list of breeds.

1.  Each breed should have its own card. The picture cards should contain the picture itself, the Dog’s breed name, and a “lorem ipsum” description.

1.  Search functionality – filter breed pictures that contain the search term in their breed’s name.

    #### UI reference

    ![screenshot](./test%20dogs.png)

#### 2. Discussion Page

This page is displayed after clicking a card.

1. Show the chosen dog breed picture (use the API to fetch a random picture). Also, display the breed's related data such as its name and lorem description.

1. Implement a chat interface on the right side of the page that allows the user to type a message and submit it.

> [!NOTE]
> This chat interface is not meant to be usable if you are not doing the bonus question. It should be available to a user currently on the page. The user should be able to type a message and all the messages that that user specifically types should appear.

#### UI Reference

![details page](./dog%20page.png)

#### 3. Bonus

1. Get the breed list from the api. Then use it to fetch and create a list of card for all the breeds.

1. Add a backend and implement a chat Web Sockets. For each incoming chat message, send a message using the Web Socket and update the UI accordingly.

> [!TIP]
>
> https://socket.io/ provides a Web Socket implementation for Javascript.
>
> Look at https://socket.io/get-started/chat/ for a tutorial on implementing the chat.
