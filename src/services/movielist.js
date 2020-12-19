import request from '../configs/request';
import { MOVIELIST_API, MOVIEDETAIL_API, MOVIESEARCH_API } from './api'; 
 
export async function MovieListService() {
  return(
    request(
      MOVIELIST_API,
      'GET', 
    )
  ) 
}

export async function MovieDetailService(maPhim){
  return(
    request(
      MOVIEDETAIL_API + `${maPhim}`,
      'GET',
    )
  )
}

export async function MovieSearchService(keySearch){
  return(
    request( 
      MOVIESEARCH_API + `${keySearch}`,
      'GET',
    )
  )
}