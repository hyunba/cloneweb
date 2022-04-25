const API_KEY = "659fccb8edf938abc045369e7c13761a";
const BASE_PATH = "https://api.themoviedb.org/3"; 


interface IMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    name: string;
    media_type: string;
}

interface IGenres {
    id: number;
    name: string;
  }
  interface ICompanies {
    id: number;
    name: string;
    logo_path: string;
  }

export interface IGetMovieDetail {
    adult: boolean;
    backdrop_path: string;
    genres: IGenres[];
    homepage: string;
    id: number;
    production_companies: ICompanies[];
    title: string;
    vote_average: number;
    overview: string;
    poster_path?: string;
    name: string;
    runtime: number;
    number_of_seasons: number;
    results: IMovie[];
  }
  

export interface ISearchResult {
    page: number;
    results: IMovie[];
  }

export interface GetMoviesResult {
    dates:{
        maximum: string;
        minimum: string;
    };
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
};

export function getMovies(){
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
        (response) => response.json()
    );
}

export function getTvs(){
    return fetch(`${BASE_PATH}/tv/popular?api_key=${API_KEY}`).then(
        (response) => response.json()
    );
}
// https://api.themoviedb.org/3/tv/popular?api_key=659fccb8edf938abc045369e7c13761a&language=en-US&page=1

export function searchAll(keyword: string | null) {
    return fetch(
      `${BASE_PATH}/search/multi?api_key=${API_KEY}&language=ko-KR&query=${keyword}`
    ).then((response) => response.json());
  }