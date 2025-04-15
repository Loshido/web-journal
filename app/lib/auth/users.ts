import { readFileSync } from "fs";

interface Users {
    [key: string]: string,
}

const USERS_PATH = "./data/users.json";

export function check(id: string, pass: string): boolean {
    const buffer = readFileSync(USERS_PATH, { encoding: 'utf-8' });
    const users = JSON.parse(buffer) as Users;

    return id in users && users[id] === pass
}