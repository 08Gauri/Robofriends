import React from 'react';




const Card = ({name, email , id}) =>{
	var  imgSource = 'https://robohash.org/' + id;
	return (
			<div  className = "bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src = {imgSource} alt = 'Your RoboFriend'/>
			<div>	
				<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		);
}



export default Card;