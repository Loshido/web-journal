import { writeFileSync, readFileSync } from "fs";

interface Users {
    [key: string]: string
}

const USERS_PATH = "./data/users.json";

function read(): Users {
    const buffer = readFileSync(USERS_PATH, { encoding: 'utf-8' });
    const users = JSON.parse(buffer);

    if(typeof users === 'object') {
        return users
    }
    throw new Error(`Le format de "${USERS_PATH}" corresponds pas à un fichier JSON.`)
}

function create(id: string, pass: string) {
    const users = read();
    users[id] = pass;
    writeFileSync(USERS_PATH, JSON.stringify(users));
}

export function check(id: string, pass: string): boolean {
    const users = read();
    return id in users && users[id] === pass
}