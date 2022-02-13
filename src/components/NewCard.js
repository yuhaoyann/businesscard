import { useState } from "react"
import axios from "axios";

import "./NewCard.scss"

import { confirmAlert } from 'react-confirm-alert';

import CardForm from "./CardForm";

export default function NewCard(props) {
  
  const [card, setCard] = useState({})
  
  const handleChange = e => {
    const { name, value } = e.target;
    setCard(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    confirmAlert({
      title: 'Create Card',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Confirm',
          onClick: () => {
            const headers = {
              headers: { Authorization: `Bearer ${props.currentUser.token}`}
            };
            return axios.post("http://localhost:8001/api/cards", { card } , headers)
            .then(r => {
              let newCards = [
                ...props.myCards,
                {
                  ...card,
                  id: r.data.id,
                  isselfcard: true
                }
              ]
              console.log(r.data.message)
              props.setMyCards(newCards)
              props.setPage("MyCards");
            })
            .catch(e => console.log(e))
          }
        },
        {
          label: 'Cancel',
        }
      ]
    });
    
  }

  return (
    <CardForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )

}