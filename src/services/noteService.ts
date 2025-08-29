import axios from 'axios';
import type { Note, CreateNote } from '../types/note';

export interface FetchNotesResponse {
  totalPages: number;
  notes: Note[];
}

interface FetchNoteParams {
  search?: string;
  page?: number;
  perPage?: number;
}

const API_KEY = import.meta.env.eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTc2YzQ0NDViYWNkODgxYmIzYTMwN2Q3NDBhNDUzNCIsIm5iZiI6MTc1NTAwOTE5Mi4yMTYsInN1YiI6IjY4OWI1MGE4YThjYWU2ZDdhNThlYjUyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ryVDouKPbLlmM5AizB10bw5dJ1T6AWd1f3onEg5OKas as string;
const apiClient = axios.create({
  baseURL: 'https://notehub-public.goit.study/api/notes',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

//GET notes

export async function fetchNotes(
  params: FetchNoteParams
): Promise<FetchNotesResponse> {
  const { data } = await apiClient.get<FetchNotesResponse>('/', { params });
  return data;
}

//POST create note

export async function createNote(note: CreateNote): Promise<Note> {
  const { data } = await apiClient.post<Note>('', note);
  return data;
}

// DELETE note

export async function deleteNote(noteId: string): Promise<{ id: string }> {
  const { data } = await apiClient.delete<{ id: string }>(`/${noteId}`);
  return data;
}

// PATCH note

export async function updateNote(
  noteId: string,
  note: Partial<CreateNote>
): Promise<Note> {
  const { data } = await apiClient.patch<Note>(`/${noteId}`, note);
  return data;
}