import { Person } from 'model/MovieDto';
import { PersonProfession } from 'model/types';

export const getPersonsByProfession = (
	persons: Person[],
	profession: PersonProfession
) => {
	return persons.filter((person) => person.enProfession === profession);
};

export const getStringNamesByProfession = (
	persons: Person[],
	profession: PersonProfession
) => {
	const p = getPersonsByProfession(persons, profession);
	return p.map((person) => person.name || person.enName || 'Неизвестно');
};
