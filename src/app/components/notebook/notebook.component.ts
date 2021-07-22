import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss'],
})
export class NotebookComponent implements OnInit {
	notebook: string;
	notes: [] | any;
	slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private activatedRoute: ActivatedRoute, private notesServices: NotesService) { }

  ngOnInit() {
		this.notebook = this.activatedRoute.snapshot.paramMap.get('id');

		this.notes = this.notesServices.getNotebook(this.notebook);

		console.log(this.notes);
	}

}
