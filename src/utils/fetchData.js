export  const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: {limit: '800'},
  headers: {
    'X-RapidAPI-Key': 'f8a60c305dmsh180c4da570668e4p180b13jsn44c05e58266f',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
  
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f8a60c305dmsh180c4da570668e4p180b13jsn44c05e58266f',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData=async(url,options)=>{
    const res =await fetch(url,options);
    const data=await res.json();
    return data;
};