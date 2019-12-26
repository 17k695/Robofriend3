import React from 'react';
import './cardList.css';
import Card from '../card/card.js'
export const CardList=({users})=>{
	return(<div className="list">
	{
		users.map(user=><Card  name = {user.name} email={user.email} id={user.id}  key={user.id} />)}
	

</div>
)
}