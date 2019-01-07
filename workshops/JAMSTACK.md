# JAMstack

The purpose of this workshop is to get started with the JAMstack by using Gatsby, Contentful and Netlify.

## Setup

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
8. Go to your Space Settings > API Keys. Copy your space id and Content Delivery API - access token.
9. Under Space Settings > API Keys > Content management tokens, generate a new Personal token and give it some name. Make sure you copy this value somewhere you will need it later.

![Imgur](https://i.imgur.com/hjUbpS9.png)

9. Run `npm run setup`, this will prompt you to add the details you copies previously.
10. After the setup run `npm run dev` to start the development server and see your data
11. Try changing data in Contentful and restarting the development server to see your changes. Of course when we use production data we could set up a webhook in Contentful that automatically publishes a new version of your site when content changes or gets published.

## Deploying

We will use Netlify since it's free, popular to use and fast.

### Auto deploy from git

1. Make sure you have an account for Netlify, you can use your Github account.
2. Click new site from Git if you forked this repo to your own account

![Imgur](https://i.imgur.com/kNN4hM8.png)

3. Netlify will automatically detect the correct build command, if it doesn't enter `npm run build` as your build command

![Imgur](https://i.imgur.com/BM8xD6l.png)

### Manual deploy

1. If you're not using Github for this repo you can build locally using `npm run build`
2. Go to https://app.netlify.com/drop when you're logged in and drop the `public` folder.
3. A new Netlify site will be created

![Imgur](https://i.imgur.com/eOGXjif.png)


## Hooks

You could try setting up a build hook which will automatically start a new build for your website when your Contentful data changes.

Add a new build hook in Netlify, copy the URL and in Contentful under Space Settings > Webhooks, add a new webhook with your preferred triggers and paste the URL as a POST request. Now when you change data in Contentful, your Netlify build will autotrigger and deploy a new version of your website.

![Imgur](https://i.imgur.com/MY9Ajm7.png)

![Imgur](https://i.imgur.com/djWYiXS.png)
