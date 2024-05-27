const express = require('express')
const app = express()
const port = 3000;
const routeForOneToOneRelation = require('./routes/routeForOneToOneRelation');
const routeForOneToManyRelation = require('./routes/routeForOneToManyRelation');
const routeForManyToManyRelation = require('./routes/routeForManyToManyRelation');
const routeForTransaction = require('./routes/routeForTransation');
const routeForHooks = require('./routes/routeForHooks');
//body-parser alternative
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/one-to-one', routeForOneToOneRelation);
app.use('/one-to-many', routeForOneToManyRelation);
app.use('/many-to-many', routeForManyToManyRelation);
app.use('/transaction', routeForTransaction);
app.use('/hooks', routeForHooks)

app.listen(port, () => {
    console.log(`Example app listening on port ${port} http://localhost:${port}`);
})