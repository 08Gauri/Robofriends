import React from 'react';





const  SearchBox = ({searchfield, searchChange}) =>{
	return(
		<div>
			<input  className = "bg-lightest-blue dib br3 pa1 ma2 bw2"
			type = 'search'
			placeholder = 'Search Robots'
			onChange = {searchChange}
			/>
		</div>	
	);
}


export default SearchBox;