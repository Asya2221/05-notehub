import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '../services/noteService';

export const NotesList: React.FC = () => {
  const { data, isLoading, error } = useQuery(['notes'], () =>
    fetchNotes({ page: 1, perPage: 12 })
  );

  if (isLoading) return <p>Загрузка заметок...</p>;
  if (error) return <p>Ошибка при загрузке заметок</p>;

  // Проверка, чтобы не было undefined
  const notes = data?.notes ?? [];

  if (notes.length === 0) return <p>Заметок пока нет</p>;

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
};
