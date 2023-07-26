fetch('https://yts.mx/api/v2/list_movies.json')
  .then(response => response.json())
  .then(array => {
    const movies = array.data.movies
    const mediumCoverImages = movies.map(movie => movie.medium_cover_image)
    const movieTitle = movies.map(movie => movie.title_long)
    const genres = movies.map(movie => movie.genres)
    
   for (let i = 0; i < mediumCoverImages.length; i++) {
      changeImage(i, mediumCoverImages[i])
      changeTitle(i, movieTitle[i])
      changeGenres(i, '장르 : ' +  genres[i])
    }
   
})

const options = {
   method: "GET",
   url: "https://tasty.p.rapidapi.com/recipes/list",
   params: { from: "0", size: "20", tags: "under_30_minutes" },
   headers: {
     "x-rapidapi-host": "tasty.p.rapidapi.com",
     "x-rapidapi-key": "31276411cfmsh0efd07dc2760712p136b67jsnbcdc93b074f2"
   }
 }
 fetch("https://tasty.p.rapidapi.com/recipes/list", options)
   .then(response => response.json())
   .then(array => {

     console.log(array)
   })

 



function changeImage(indexNum, arrayNum) {
   const imageElement = document.getElementsByClassName('card-img-top')[indexNum]
   
   imageElement.src = arrayNum
}
function changeTitle(indexNum, title){
   const titleElement = document.getElementsByClassName('card-title')[indexNum]
   titleElement.innerText = title 
}
function changeGenres(indexNum, genres){
   const titleElement = document.getElementsByClassName('card-text')[indexNum]
   titleElement.innerText = genres 
}

document.querySelector('.movie_btn').addEventListener('click', function() {
  const movie = document.querySelector('.movie_sector')
  const recipes = document.querySelector('.recipes_sector')
  movie.style.display = 'grid'
  recipes.style.display = 'none'
})

document.querySelector('.recipes_btn').addEventListener('click', function() {
   const recipes = document.querySelector('.recipes_sector')
   const movie = document.querySelector('.movie_sector')
   recipes.style.display = 'grid'
   movie.style.display = 'none'
 })