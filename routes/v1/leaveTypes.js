 const express = require('express');
 const models = require('../../models');
 const router = express.Router();

 router.get('/', (req, res) => {
     models.leaveTypes.findAll()
         .then((leaveTypes) => {
             res.json(leaveTypes);
         }).catch((e) => res.json(e));
 });

 router.post('/', (req, res) => {
     models.leaveTypes.create(req.body)
         .then((leaveTypes) => {
             res.json(leaveTypes);
         }).catch((e) => res.json(e));
 });

 router.put('/:id', (req, res) => {
     models.leaveTypes.update(req.body, {
             where: {
                 id: req.params.id
             }
         }) 
         .then((leaveTypes) => {
             res.json(leaveTypes);
         }).catch((e) => res.json(e));
 });

 router.delete('/:id', (req, res) => {
     models.leaveTypes.destroy({
             where: {
                 id: req.params.id
             }
         })
         .then((leaveTypes) => {
             res.json(leaveTypes);
         }).catch((e) => res.json(e));
 });

 module.exports = router;