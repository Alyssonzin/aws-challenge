import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

// Configuração do cliente DynamoDB
const client = new DynamoDBClient({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.ACCESS_KEY!,
        secretAccessKey: process.env.SECRET!,
    },
});

// Cria um cliente de nível mais alto para trabalhar com JSON
export const dynamoDB = DynamoDBDocumentClient.from(client);
