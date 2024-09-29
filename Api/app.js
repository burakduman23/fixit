import express from 'express'
import { getAllProjects, getProjectFromId, getProjectNeededContractors, getProjectsFromUserName, getUserByUserName, deleteProject } from './database.js'
import cors from 'cors'

const app = express()

app.use(cors());


app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send("Something went wrong!")
})
app.get('/users/:username', async (req, res) => {
    const resp = await getUserByUserName(req.params.username)

    if (resp.length < 1 || resp === undefined) {
        res.status(500).send("Could not find user!")
    } else {
        res.send(resp)
    }

})

app.get('/projects', async (req, res) => {
    const resp = await getAllProjects()
    res.send(resp)
})

app.get('/projects/:id', async (req, res) => {
    const resp = await getProjectFromId(req.params.id)
    res.send(resp)
})

app.delete('/projects/:id', async (req, res) => {
    const resp = await deleteProject(req.params.id)
    res.send(resp)
})

app.get('/projects_needs_contractors/:id', async (req, res) => {
    const resp = await getProjectNeededContractors(req.params.id)
    res.send(resp)
})

app.get('/my-jobs/:username', async (req, res) => {
    const resp = await getProjectsFromUserName(req.params.username)
    res.send(resp)
})

app.listen(8080, () => {
    console.log("listenings")
})