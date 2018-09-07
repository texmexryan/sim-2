
module.exports = {

    read: (req, res) => {
        const db = req.app.get('db');

        db.get_houses().then(houses => {
        res.status(200).send(houses)
        
        })
        .catch(err => console.log(err));
    },

    create: (req, res) => {
        const db = req.app.get('db')
       //const {house} = req.body
       let {name, address, city, state, zipcode} = req.body

       db.add_house([name, address, city, state, zipcode])
       .then (houses => { 
        res.status(200).send(houses)})
        .catch(err => {
            res.status(500).send({errorMessage: "Oopsies, Couldn't post your houses"})
            console.log(err)
        })
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.params;

        db.delete_house({id})
        .then(houses => {
        res.status(200).send(houses)})
      .catch(err => {
          res.status(500).send(err);
          console.log(err);
      });
  },
    
    




}