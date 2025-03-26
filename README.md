# X - O B E S E

## Set environment

First create `.env` file with following variables

```
DATABASE_URL="YOUR_DB_URL"
SESSION_SECRET=GENERATE_CODE_AND_ADD
NEXT_PUBLIC_GOOGLE_MAP_API=ADD_GOOGLE_MAP_API_KEY
SMS_USERNAME="MOBIREACH_USERNAME"
SMS_PASSWORD="MOBIREACH_PASWORD"
```

To generate `SESSION_SECRET` key,

```bash
openssl rand -base64 32
```

To initiailize this project, 

```bash
npm install
npx prisma generate
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
