import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
	notes = [
		{
			id: 1,
			archived: false,
			favorite: false,
			trashed: false,
			notebooks: [],
			title: 'Nota de prueba 1',
			body: 'Texto de prueba indicando el cuerpo de la nota 1',
		},
		{
			id: 2,
			archived: false,
			favorite: false,
			trashed: false,
			notebooks: [],
			title: 'Nota de prueba 2',
			body: 'Texto de prueba indicando el cuerpo de la nota 2',
		},
		{
			id: 3,
			archived: false,
			favorite: false,
			trashed: false,
			notebooks: [],
			title: 'Nota de prueba 3',
			body: 'Texto de prueba indicando el cuerpo de la nota 3',
		},
		{
			id: 4,
			archived: false,
			favorite: false,
			trashed: true,
			notebooks: [],
			title: 'Nota de prueba 4: trashed',
			body: 'Texto de prueba indicando el cuerpo de la nota 4',
		},
		{
			id: 5,
			archived: false,
			favorite: false,
			trashed: true,
			notebooks: [],
			title: 'Nota de prueba 5: trashed',
			body: 'Texto de prueba indicando el cuerpo de la nota 5',
		},
		{
			id: 6,
			archived: false,
			favorite: true,
			trashed: false,
			notebooks: [],
			title: 'Nota de prueba 6: favorite',
			body: 'Texto de prueba indicando el cuerpo de la nota 6',
		},
		{
			id: 7,
			archived: false,
			favorite: true,
			trashed: false,
			notebooks: [],
			title: 'Nota de prueba 7: favorite',
			body: 'Texto de prueba indicando el cuerpo de la nota 7',
		},
		{
			id: 8,
			archived: false,
			favorite: false,
			trashed: false,
			notebooks: ['family'],
			title: 'Nota de prueba 8: family',
			body: 'Texto de prueba indicando el cuerpo de la nota 8',
		},
		{
			id: 9,
			archived: false,
			favorite: false,
			trashed: false,
			notebooks: ['family'],
			title: 'Nota de prueba 9: family',
			body: 'Texto de prueba indicando el cuerpo de la nota 9',
		},
		{
			id: 10,
			archived: true,
			favorite: false,
			trashed: false,
			notebooks: ['friends'],
			title: 'Nota de prueba 10: friends',
			body: 'Texto de prueba indicando el cuerpo de la nota 10',
		},
	];

	validNotebooks = ['family', 'friends', 'work', 'travel'];

	constructor() { }

	getNotes(opt: Options) {
		let res = this.notes;
		for (const key in opt) {
			if (opt[key]) {
				res = this.notes.filter(note => note[key]);
			}
		}
		return res;
	}

	getNotebook(id: string) {
		return this.notes.filter(note => note.notebooks.includes(id));
	}

	getValidNotebooks() {
		return this.validNotebooks;
	}
}

export interface Options {
	archived: boolean;
	favorite: boolean;
	trashed: boolean;
}
