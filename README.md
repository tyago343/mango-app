<h3 align="center">mango</h3>


---

<p align="center"> This is a project for frontend position, working with react, parcel and @testing-library/react. It's a very simple slider for range of prices, work with minimal and maximal price, and with a array of fixed values
    <br> 
</p>

## 📝 Table of Contents

- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🏁 Getting Started <a name = "getting_started"></a>

Get the repo with git clone https://github.com/tyago343/mango-app.git


### Installing

For get a localhost:8080 working enviroment, please follow next steps
```
npm install
```

And 

```
npm start
```

Here it's an online demo https://mango-app.vercel.app/

## 🔧 Running the tests <a name = "tests"></a>

For run the test:

```
npm run test
```


This code are testing if component have no values, or if we can change min and max values. Even if we are rendering the slider.

```
expect(screen.getByTestId('slider')).toBeVisible();
```



## ✍️ Authors <a name = "authors"></a>

- [@tyago343](https://github.com/tyago343) - Idea & Initial work
