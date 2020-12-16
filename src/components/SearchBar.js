import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {

    const [term, setTerm] = useState("");
    
    // const onInputChange = (e) => {
    //     setTerm(e.target.value.toUpperCase());
    // };

    // Arrow syntax binds the function to handle appropriate 'this' object
    const onFormSubmit = (e) => {
        e.preventDefault();

        // Passing back to the parent function
        onSearchSubmit(term);
    };

    return (

        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Youtube Video Search</label>
                    <input
                        type='text'
                        value={term}
                        onChange={(e) => setTerm(e.target.value.toUpperCase())}
                    />
                </div>
            </form>
        </div>
    );
}

//class SearchBar extends React.Component {

    // state = { searchText: '' };
    
    // Called 1 time when component loads on screen
    // componentDidMount = () => { 

    // }

    // onInputChange = (e) => {
    //     this.setState({ searchText: e.target.value.toUpperCase() });
    // };

    // // Arrow syntax binds the function to handle appropriate 'this' object
    // onFormSubmit = (e) => {
    //     e.preventDefault();

    //     // Passing back to the parent function
    //     this.props.onSearchSubmit(this.state.searchText);
    // }

    // renderContent = () => {

    //     return (

    //         <div className="search-bar ui segment">
    //             <form className="ui form" onSubmit={this.onFormSubmit}>
    //                 <div className="field">
    //                     <label>Video Search</label>
    //                     <input
    //                         type='text'
    //                         value={this.state.searchText}
    //                         onChange={this.onInputChange}
    //                     />
    //                 </div>
    //             </form>
    //         </div>
    //     );
    // }

    // render = () => {
    //     return this.renderContent();
    // };
//};

export default SearchBar;