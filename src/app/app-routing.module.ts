import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanNavigateGuard } from './guards/can-navigate.guard';
import { ValidNotebookGuard } from './guards/valid-notebook.guard';

const routes: Routes = [
	{
		path: '',
    redirectTo: '/notes',
    pathMatch: 'full'
	},
  {
    path: ':id',
		loadChildren: () => import('./components/folder/folder.module').then( m => m.FolderPageModule),
		canActivate: [CanNavigateGuard],
		data: {
			allowed: ['notes', 'favorites', 'archived', 'trash'],
		},
	},
	{
		path: 'notebook/:id',
		loadChildren: () => import('./components/notebook/notebook.module').then( m => m.NotebookModule),
		canActivate: [ValidNotebookGuard],
	},
	{
		path: '**',
    pathMatch: 'full',
    redirectTo: '/notes',
	},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
