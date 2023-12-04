function Review({rating}){
     return [...Array(Math.round(rating))].map(()=>  <i className="bi bi-star-fill text-warning"></i>  )
}

export default Review;