const Header = (title, date, temp) => {
  const hDiv = document.createElement('div')
  const hDate = document.createElement('span')
  const hTitle = document.createElement('h1')
  const hTemp = document.createElement('span')

  hDiv.classList.add('header')
  hDate.classList.add('date')
  hTemp.classList.add('temp')

  hDiv.appendChild(hDate)
  hDiv.appendChild(hTitle)
  hDiv.appendChild(hTemp)

  hDate.textContent = date
  hTitle.textContent = title
  hTemp.textContent = temp

  return hDiv
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  const hData = document.querySelector(selector)
  const hText = Header('BloomTech Times', 'June 10, 2022', '97 degrees')
  hData.appendChild(hText)
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
