export interface Character {
  id?: string;         // ID del documento en Firestore
  name: string;        // "Morty Smith"
  species: string;     // "Human"
  status: string;      // "Alive"
  gender: string;      // "Male"
  image: string;       // URL de la imagen
  type: string;        // puede estar vacío
  url: string;         // URL del API
  created: Date;       // fecha de creación
}
