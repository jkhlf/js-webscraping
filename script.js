//Funcionando no FireFox



//Classe anime-btn, todos os cards da home
const animeData = [...document.querySelectorAll('.btn-anime')].map(anime => {
    const title = anime.innerText.trim();
    return {
        title: title,
    };
});
console.table(animeData);



//Return top 50 anime
const rankingData = [...document.querySelectorAll('.ranking-list')].map(rankingItem => {
    const titleElement = rankingItem.querySelector('.anime_ranking_h3 a');
    const title = titleElement ? titleElement.innerText.trim() : 'No title available';

    const rankElement = rankingItem.querySelector('.rank.ac');
    const rank = rankElement ? rankElement.innerText.trim() : 'No rank available';

    return {
        title: title,
        rank: rank
    };
});

console.table(rankingData);








///Change styles 
const contentElements = document.querySelectorAll('.content');
contentElements.forEach(element => {
    element.style.backgroundColor = 'lightblue';  
    element.style.padding = '20px';               
    element.style.borderRadius = '10px';          
});


const textElements = document.querySelectorAll('.text');
textElements.forEach(element => {
    element.style.color = 'red';               
    element.style.fontSize = '20px';             
    element.style.fontWeight = 'bold';            
});

const sliderElements = document.querySelectorAll('.widget-slide-block');
sliderElements.forEach(element => {
    element.style.backgroundColor = 'lightblue';  
    element.style.padding = '20px';               
    element.style.borderRadius = '10px';          
});

document.querySelectorAll('*').forEach(element => {
    element.style.color = '#ffffff';   
    element.style.fontFamily = 'Arial, sans-serif'; 
});

document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(header => {
    header.style.color = '#ff6f61'; 
    header.style.textShadow = '2px 2px 4px rgba(0,0,0,0.6)'; 
    header.style.fontFamily = 'Georgia, serif'; 
});