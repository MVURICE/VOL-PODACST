
// import logo from './assets/Logo.png'
// import Card from './components/Card'
// import SearchBar from './components/SearchBar'
// import { useEffect,useState } from 'react'
// /* eslint-disable react/prop-types */


// function Navbar(){



//     return(
//       <header>
//         <navbar className='navbar'>
//           <div className='logo-container'>
//           <img className='logo' src={logo} />
//           </div>
//           <ul className=' menu-links'>
//             <li>HOME PAGE</li>
//             <li>GENRES</li>
//             <li>FAVOURITES</li>
//           </ul>
//           <SearchBar  />
//         </navbar>
//       </header>
//     )
//   }







// function App() {





//   const [podcast,setPodacast] = useState([])

  


   
//   useEffect(
//       ()=>{
//         fetch('https://podcast-api.netlify.app/shows')
//         .then(res=> res.json())
//         .then(data => setPodacast(data))
//       },[]
//     )

//     console.log(typeof(podcast))

  
//     const showElements = podcast.map( show =>{
//       return( <Card 
//         key={show.id} 
//         title ={show.title}
//         image = {show.image}  
//         season={show.seasons} 
//         genre={show.genres}
//         lastUpdated={new Date(show.updated).toLocaleDateString('en-US')}
//            /> )
//     }
//     )

//     function Main(){

//       return(
//       <body>
//         <main>
//         <Navbar />
//         <div className='shows-preview'>
//         {showElements}
//       </div>
        
//         </main>

//       </body>

//       )
      
//     }




//   return (
//     <div>
//       <Main />
//     </div>

//   )
// }



// export default App



















// import logo from './assets/Logo.png';
// import Card from './components/Card';
// import SearchBar from './components/SearchBar';
// import { useEffect, useState } from 'react';

// function Navbar() {
//   return (
//     <header>
//       <nav className='navbar'>
//         <div className='logo-container'>
//           <img className='logo' src={logo} alt='Logo' />
//         </div>
//         <ul className='menu-links'>
//           <li>HOME PAGE</li>
//           <li>GENRES</li>
//           <li>FAVOURITES</li>
//         </ul>
//         <SearchBar />
//       </nav>
//     </header>
//   );
// }




// function App() {
//   const [podcast, setPodcast] = useState([])  
//   const [loading, setLoading] = useState(true)
//   const [seletedShow, setSelecetedShow] = useState(null)

//   useEffect(() => {

//     fetch('https://podcast-api.netlify.app/shows')
//       .then((res) => res.json())
//       .then((data) => {
//         setPodcast(data)
//         setLoading(false)
//       })
//       .catch((error) => {
//         console.error('Error loading podcast data:', error)
//         setLoading(false)
//       })
//   }, [])


//   function handleSelectedShow(id){

//     console.log('askjhdkajsh')
//     fetch(`https://podcast-api.netlify.app/id/${id}`)
//     .then((res) => res.json())
//     .then((data) => {
//       // Handle the data for a specific show here
//       setSelecetedShow(data)
      
      
      
//       console.log('Show Details:', data);
      
//     })
  
//     // console.log(seletedShow)
   
    
//   }




//   const showElements = podcast.map((show) => (
//     <Card
//       key={show.id}
//       title={show.title}
//       image={show.image}
//       season={show.seasons}
//       genre={show.genres}
//       lastUpdated={new Date(show.updated).toLocaleDateString('en-US')}
//       handleShow={()=>handleSelectedShow(show.id)}
//     />
//   ));

//   function Main() {
//     return (

//       <div className='body'>
//         <Navbar />
//         <main>
//           {loading ? (
//             <p className='loading'>Loading...</p>
//           ) : (
//             <div className='shows-preview'>{showElements}</div>
//           )}
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Main />
//     </div>
//   );
// }

// export default App

















// import logo from './assets/Logo.png';
// import Card from './components/Card';
// import SearchBar from './components/SearchBar';
// import { useEffect, useState } from 'react';

// function Navbar() {
//   return (
//     <header>
//       <nav className='navbar'>
//         <div className='logo-container'>
//           <img className='logo' src={logo} alt='Logo' />
//         </div>
//         <ul className='menu-links'>
//           <li>HOME PAGE</li>
//           <li>GENRES</li>
//           <li>FAVOURITES</li>
//         </ul>
//         <SearchBar />
//       </nav>
//     </header>
//   );
// }

// function ShowDetails({ show }) {
//   return (
//     // <div className='show-hero-banner'>

//     //   {/* Display the detailed information of the selected show here */}
//     //   <h2>{show.title}</h2>
//     //   {/* <img src={show.image} alt={show.title} /> */}
//     //   {show.description}
//     // </div>
//     <div className='show-hero-banner'>
    
//     <div className='show-image-container' >
//       <img className='show-image' src={show.image} />
//     </div>
//     <br />
    
//     <section className='show-metadata'>

//       <h4 className='show-card-title'>{show.title}</h4><button>Favourite</button>
//       <br />
//       <br />
//       <strong>{show.seasons && show.seasons.length} seasons</strong><br />
//       <strong>Genres: <small><em>{show.genres ? show.genres.join(', ') : 'No specific Genre'}</em></small> </strong> <br />
//       <strong>Last-updated: </strong><small>{show.updated && new Date(show.updated).toLocaleDateString('en-US')}</small> 
  
//     </section>
//     <section className='show-description'>
//       <h4 className='description-header'>About:</h4>
//       <br />
//       <p className='description-paragraph'>{show.description}</p>
//     </section>
    
//     </div>
//   );
// }

// function App() {
//   const [podcast, setPodcast] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedShow, setSelectedShow] = useState(null);

//   useEffect(() => {
//     fetch('https://podcast-api.netlify.app/shows')
//       .then((res) => res.json())
//       .then((data) => {
//         setPodcast(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error loading podcast data:', error);
//         setLoading(false);
//       });
//   }, []);

//   function handleSelectedShow(id) {
//     fetch(`https://podcast-api.netlify.app/id/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         // Handle the data for a specific show here
//         setSelectedShow(data);
//         console.log('Show Details:', data);
//       })
//       .catch((error) => {
//         console.error('Error loading show details:', error);
//         setSelectedShow(null); // Reset selected show state if there's an error
//       });
//   }

//   const showElements = podcast.map((show) => (
//     <Card
//       key={show.id}
//       title={show.title}
//       image={show.image}
//       season={show.seasons}
//       genre={show.genres}
//       lastUpdated={new Date(show.updated).toLocaleDateString('en-US')}
//       handleShow={() => handleSelectedShow(show.id)}
//     />
//   ));

//   function Main() {
//     return (
//       <div className='body'>
//         <Navbar />
//         <main>
//           {loading ? (
//             <p className='loading'>Loading...</p>
//           ) : (
//             <div className='shows-preview'>
//               {!selectedShow && showElements}
//               {selectedShow && <ShowDetails show={selectedShow} />}
//             </div>
//           )}
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Main />
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from 'react';
import logo from './assets/Logo.png';
import Card from './components/Card';
import SearchBar from './components/SearchBar';

// import './App.css';

function App() {
  const [podcast, setPodcast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
      .then((res) => res.json())
      .then((data) => {
        setPodcast(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading podcast data:', error);
        setLoading(false);
      });
  }, []);

  function handleSelectedShow(id) {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Handle the data for a specific show here
        setSelectedShow(data);
        console.log('Show Details:', data);
      })
      .catch((error) => {
        console.error('Error loading show details:', error);
        setSelectedShow(null); // Reset selected show state if there's an error
      });
  }

  const showElements = podcast.map((show) => (
    <Card
      key={show.id}
      title={show.title}
      image={show.image}
      season={show.seasons}
      genre={show.genres}
      lastUpdated={new Date(show.updated).toLocaleDateString('en-US')}
      handleShow={() => handleSelectedShow(show.id)}
    />
  ));

  return (
    <div className='body'>
      <Navbar />
      <main>
        {loading ? <p className='loading'>Loading...</p> : (
          <div className='shows-preview'>
            {!selectedShow && showElements}
            {selectedShow && <ShowDetails show={selectedShow} />}
          </div>
        )}
      </main>
    </div>
  );
}

function Navbar() {
  return (
    <header>
      <nav className='navbar'>
        <div className='logo-container'>
          <img className='logo' src={logo} alt='Logo' />
        </div>
        <ul className='menu-links'>
          <li>HOME PAGE</li>
          <li>GENRES</li>
          <li>FAVOURITES</li>
        </ul>
        <SearchBar />
      </nav>
    </header>
  );
}

function ShowDetails({ show }) {
  return (
    <div className='show-hero-banner'>
      <div className='show-image-container'>
        <img className='show-image' src={show.image} alt={show.title} />
      </div>
      <br />
      <section className='show-metadata'>
        <h4 className='show-card-title'>{show.title}</h4>
        <button>Favourite</button>
        <br />
        <br />
        <strong>{show.seasons && show.seasons.length} seasons</strong><br />
        <strong>Genres: <small><em>{show.genres ? show.genres.join(', ') : 'No specific Genre'}</em></small> </strong> <br />
        <strong>Last-updated: </strong><small>{show.updated && new Date(show.updated).toLocaleDateString('en-US')}</small>
      </section>
      <section className='show-description'>
        <h4 className='description-header'>About:</h4>
        <br />
        <p className='description-paragraph'>{show.description}</p>
      </section>
    </div>
  );
}

export default App;
