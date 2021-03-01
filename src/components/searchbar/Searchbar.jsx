import React, { Component } from 'react'
import axios from 'axios'


export default class Searchbar extends Component {

    componentDidMount(){
        axios.get('https://pixabay.com/api/?q=space&page=1&key=16983876-2e0d7c5bd7f8d708e3eb2a9d0&image_type=photo&orientation=horizontal&per_page=12')
            .then(res =>{console.log(res)})
        
    }
    render() {
        return (
            <header className="Searchbar">
  <form className="SearchForm">
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
  
     
        )
    }
}



// export default function Searchbar() {
//     return (
//         <>
//           <header className="Searchbar">
//   <form className="SearchForm">
//     <button type="submit" className="SearchForm-button">
//       <span className="SearchForm-button-label">Search</span>
//     </button>

//     <input
//       className="SearchForm-input"
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header>
//         </>
//     )
// }
