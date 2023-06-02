# Scrpyard

Scrpyard is online E-Commerce Website to Buy and Sell Products, User Can Share Product, and Buy Product. It has the feature of Cart, where user can checkout. Scrpyard is integrated with Razorpay.

![project image](https://github.com/rajkaranm/scrpyard/blob/main/img/scrpyard.png)

## How to set-up locally"
```shell
git clone https://github.com/rajkaranm/scrpyard
cd scrpyard
```

Now install dependencies
```shell
cd backend
npm install

cd ..

cd frontend
npm install

```

now make your setup .env
```shell
cd ..
cd backend
mv .env.example .env
```
Paste the MongDB link, and If need also add your Razarpay API KEY and SECRET.

Now start the server.
```shell
node server.js
```

open new terminal in project folder
```shell
cd frontend
npm start
```
Done, Now Open localhost:3000 in your browser.