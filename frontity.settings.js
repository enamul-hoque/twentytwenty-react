const settings = {
  "name": "twentytwenty-react",
  "state": {
    "frontity": {
      "url": "https://twentytwenty-react.enamul.now.sh",
      "title": "TwentyTwenty (React)",
      "description": "TwentyTwenty Theme build with React"
    }
  },
  "packages": [
    {
      "name": "twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          // "api": "https://public-api.wordpress.com/wp/v2/sites/wpthemetestdata.wordpress.com"
          "api": "https://test.frontity.io/wp-json/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
