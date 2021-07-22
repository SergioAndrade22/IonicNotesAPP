import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
	public folder: string;
	public notes: [] | any;
	public options = {
		notes: {archived: false, favorite: false, trashed: false},
		archived: {archived: true, favorite: false, trashed: false},
		favorites: {archived: false, favorite: true, trashed: false},
		trash: {archived: false, favorite: false, trashed: true},
	};

  constructor(private activatedRoute: ActivatedRoute, private notesServices: NotesService) { }

  ngOnInit() {
		this.folder = this.activatedRoute.snapshot.paramMap.get('id');

		this.notes = this.notesServices.getNotes(this.options[this.folder]);
  }

}
