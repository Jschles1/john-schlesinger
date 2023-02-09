import type { NextApiRequest, NextApiResponse } from 'next';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

const awsConfig = {
    region: process.env.MY_AWS_REGION,
    credentials: {
        accessKeyId: process.env.MY_AWS_ACCESS_KEY,
        secretAccessKey: process.env.MY_AWS_SECRET_KEY,
    },
};

const s3 = new S3Client(awsConfig);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const getCommand: GetObjectCommand = new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: 'john-schlesinger-resume-2023.pdf',
    });

    const data = await s3.send(getCommand);

    if (data.Body) {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=john-schlesinger-resume-2023.pdf');
        res.status(200).send(data.Body);
    } else {
        res.status(404).json('Something went wrong!');
    }
};

export default handler;
