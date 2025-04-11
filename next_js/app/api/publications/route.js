import { NextResponse } from 'next/server';
// Fonction pour récupérer toutes les publications
export async function GET(request) {

    try {
      const response = await fetch('http://localhost:3001/publications');  
      if (!response.ok) {
        throw new Error('Échec de la récupération des publications');
      }
      const data = await response.json(); 
      return  NextResponse.json(data);  
    } catch (error) {
      console.error(error);
      return  NextResponse.json({ error: error.message });
    }
}

export async function POST(request) {
  try {
    
    const data = await request.json();  
    if (!data.title || !data.description || !data.auteur) {
      return NextResponse.json({ error: 'Les champs titre, contenu et auteur sont requis.' });
    }

    const response = await fetch('http://localhost:3001/publications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Échec de la création de la publication');
    }

    const savedPublication = await response.json();  
    return NextResponse.json(savedPublication);

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message });
  }
}

export async function PUT(request) {
  try {
    const response = await fetch('http://localhost:3001/publications', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request.body),
    });
    if (!response.ok) {
      throw new Error('Échec de la mise à jour de la publication');
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message });
  }
}
export async function DELETE(request) {
  try {
    const response = await fetch('http://localhost:3001/publications', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request.body),
    });
    if (!response.ok) {
      throw new Error('Échec de la suppression de la publication');
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message });
  }
}




