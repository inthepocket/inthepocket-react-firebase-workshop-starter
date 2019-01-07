# JAMstack

The purpose of this workshop is to get started with the JAMstack by using Gatsby, Contentful and Netlify.

1. Check out this repository first
2. Make sure you checkout the correct feature branch:

```console
$ git fetch origin
$ git checkout feature/jamstack-starter
```

3. Run `npm install` to get all required dependencies
4. Make sure you have an account for Contentful, you can use your Github account.
5. Log in on the Contentful website and create a new space

![Imgur](https://i.imgur.com/20npxsR.png)

6. To populate Contentful with some data we'll use the Blog example

![Imgur](https://i.imgur.com/mntYIEA.png)

7. Feel free to take a peek in your Content Models and Content
8. Go to your Space Settings > API Keys. Copy your space id, Content Delivery API - access token and Content Preview API - access token.

![Imgur](https://i.imgur.com/hjUbpS9.png)

9. Run `npm run setup`, this will prompt you to add the details you copies previously.
10. After the setup run `npm run dev` to start the development server and see your data
