 const express = require('express');
 const models = require('../../models');
 const router = express.Router();

 router.get('/', (req, res) => {
     models.roles.findAll()
         .then((roles) => {
             res.json(roles);
         }).catch((e) => res.json(e));
 });

 router.post('/', (req, res) => {
     models.roles.create(req.body)
         .then((roles) => {
             res.json(roles);
         }).catch((e) => res.json(e));
 });

 router.put('/:id', (req, res) => {
     models.roles.update(req.body, {
             where: {
                 id: req.params.id
             }
         })	
         .then((roles) => {
             res.json(roles);
         }).catch((e) => res.json(e));
 });

 router.delete('/:id', (req, res) => {
     models.roles.destroy({
             where: {
                 id: req.params.id
             }
         })
         .then((roles) => {
             res.json(roles);
         }).catch((e) => res.json(e));
 });

 module.exports = router;