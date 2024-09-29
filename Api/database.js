import mysql from "mysql2"
import dotenv from 'dotenv'
dotenv.config()


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getAllProjects() {
    const result = await pool.query("call getAllProjects()");
    const rows = result[0][0];
    return rows
}

export async function getProjectFromId(id) {
    const result = await pool.query("call getProjectFromID(?)", id);
    const rows = result[0][0][0];
    return rows
}

export async function deleteProject(id) {
    const result = await pool.query("call deleteProject(?)", id);
    const rows = result[0][0];
    return rows
}

export async function getProjectNeededContractors(id) {
    const result = await pool.query("call getProjectNeededContractors(?)", id);
    const rows = result[0][0];
    return rows
}

export async function getUserByUserName(username) {
    const result = await pool.query("call getUserByUserName(?)", username);
    const rows = result[0][0][0];
    return rows
}

export async function getProjectsFromUserName(username) {
    const result = await pool.query("call getProjectsFromUserName(?)", username);
    const rows = result[0][0];
    return rows
}


