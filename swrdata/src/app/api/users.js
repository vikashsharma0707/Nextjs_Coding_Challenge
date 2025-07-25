// pages/api/users.js

export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: 'React js' },
    { id: 2, name: 'Next js' },
    { id: 3, name: 'Javascript' }
  ])
}
