let express = require('express');
let router = express.Router();
let db = require('../database/db');
let async = require('async');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()


router.get('/categories', async (req, res) => {

    let query = "SELECT * FROM sany_prod_categories";
    let showlist = await db.query(query);
    // console.log({ showlist });
    res.send({
        code: 200,
        status: "SUCCESS",
        type: 'text',
        data: showlist[0]
    });
});


router.post('/categories/create', jsonParser, async (req, res) => {

    let Categoryname = req.body.Categoryname;
    // let Categorystatus = req.body.Categorystatus;
    console.log({ Categoryname });

    let query_1 = "Select count(1) as  c  from sany_prod_categories where catname = ?"
    let result = await db.query(query_1, [Categoryname]);
    console.log('result ==============> ' + JSON.stringify(result[0][0]));

    if (Categoryname === undefined) {
        res.send({
            code: 100,
            status: "FAILED",
            data: 'Null Found'
        });
    }
    else if (result[0][0].c > 0) {
        res.send({
            code: 100,
            status: "FAILED",
            data: 'This Category Name Already Exists'
        });
    } else {
        let query = "Insert into sany_prod_categories(catname,catstatus) values(?,?)";
        let insertcategory = await db.query(query, [Categoryname, 1]);
        console.log({ insertcategory });
        res.send({
            code: 200,
            status: "SUCCESS",
            type: 'text',
            data: 'Category Inserted Successfully'
        });
    }
});


router.put('/categories/edit', jsonParser, async (req, res) => {

    let Categoryname = req.body.Categoryname;
    let Categorystatus = req.body.Categorystatus;
    let Categoryid = req.query.Categoryid;

    let query = "Update sany_prod_categories set catname = ?, catstatus = ? where catid = ?";
    let updateresult = await db.query(query, [Categoryname, Categorystatus, Categoryid]);
    console.log(updateresult);
    res.send({
        code: 200,
        status: "SUCCESS",
        type: 'text',
        data: 'Category Updated Successfully'
    });
});


router.delete('/categories/delete', jsonParser, async (req, res) => {

    let Categoryid = req.query.Categoryid;

    let query = "DELETE FROM sany_prod_categories WHERE catid = ?";
    let deleteresult = await db.query(query, [Categoryid]);
    console.log(deleteresult);
    res.send({
        code: 200,
        status: "SUCCESS",
        type: 'text',
        data: 'Category Deleted Successfully'
    });
});


module.exports = router;