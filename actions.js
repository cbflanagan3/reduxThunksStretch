const axios = require('axios');

//TYPES
const { GOT_DESSERTS_DATA, NEW_DESSERT_DATA } = require('./types');

const gotDesserts = () => {
        store.dispatch(() => {
          return axios.get('/api/desserts')
            .then((res) => {
              const {data: {desserts}} = res;
              dispatch({
                type: GOT_DESSERTS_DATA,
                desserts,
              })
            
            })
            })
      }
}

const addDessert = function(dispatch) {
    return axios.post('/api/desserts')
        .then(({data}) => {
            dispatch(newDessertData(data))
        })
}

const fetchDesserts = async() => {
    store.dispatch({type: 'GOT_DESSERTS_DATA', desserts: (await axios.get('/api/desserts')).data})
}

const postDessert = function(dispatch) {
    return null;
}
/* YOUR CODE GOES HERE */
module.exports = { gotDesserts, addDessert, fetchDesserts, postDessert };
