import axios from 'axios'

const Card = (article) => {
  const cDiv = document.createElement('div')
  const head = document.createElement('div')
  const author = document.createElement('div')
  const imgCon = document.createElement('div')
  const img = document.createElement('img')
  const aName = document.createElement('span')

  cDiv.classList.add('card')
  head.classList.add('headline')
  author.classList.add('author')
  imgCon.classList.add('img-container')

  cDiv.appendChild(head)
  cDiv.appendChild(author)
  author.appendChild(aName)
  author.appendChild(imgCon)
  imgCon.appendChild(img)

  head.textContent = article.headline
  img.src = article.authorPhoto
  aName.textContent = article.authorName

  cDiv.addEventListener('click', () => {
    console.log(article.headline)
  })
  return cDiv

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  const cData = document.querySelector(selector)

  axios.get(`http://localhost:5001/api/articles`).then((res) => {
    const java = res.data.articles.javascript
    const boots = res.data.articles.bootstrap
    const tech = res.data.articles.technology
    const jq = res.data.articles.jquery
    const nodes = res.data.articles.node

    function cards(obj) {
      obj.forEach((card) => {
        const cardCreate = Card(card)
        cData.appendChild(cardCreate)
      })
    }

    cards(java)
    cards(boots)
    cards(tech)
    cards(jq)
    cards(nodes)
  })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
