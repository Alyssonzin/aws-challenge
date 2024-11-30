import { ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { dynamoDB } from '../config/Credentials'

export const bomdia = async () => {
    
    try {
        const results = dynamoDB.send(new ListTablesCommand({}));
        console.log(results);
    } catch (err) {
        console.error(err);
    }
}