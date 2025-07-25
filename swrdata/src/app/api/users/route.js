// src/app/api/users/route.js

export async function GET() {
  const users = [
    { id: 1, name: 'React js' },
    { id: 2, name: 'Next js' },
    { id: 3, name: 'Javascript' }
  ];

  return Response.json(users);
}
