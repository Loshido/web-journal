import { readFileSync } from "fs";

interface Users {
    [key: string]: string,
}

const USERS_PATH = "./data/users.json";

const buffer = readFileSync(USERS_PATH, { encoding: 'utf-8' });
const users = JSON.parse(buffer) as Users;

export function check(id: string, pass: string): boolean {
    return id in users && users[id] === pass
}