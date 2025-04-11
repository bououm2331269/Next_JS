import { NextResponse } from 'next/server';
// Fonction pour récupérer toutes les publications
export async function GET(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  console.log(id);
  try {
    const response = await fetch(`http://localhost:3001/publications/${id}`); 
    if (!response.ok) {
      throw new Error('Échec de la récupération de la publication');
    }
    const data = await response.json();  
    return  NextResponse.json(data);  
  } catch (error) {
    console.error(error);
    return  NextResponse.json({ error: error.message });
  }
 }
  


