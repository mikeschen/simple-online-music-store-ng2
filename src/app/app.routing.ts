import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AdminComponent } from './admin/admin.component';
import { ArtistComponent } from './artist/artist.component';

const appRoutes: Routes = [
	{
		path: '',
		component: ArtistComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'marketplace',
		component: MarketplaceComponent
	},
	{
		path: 'albums/:id',
		component: AlbumDetailComponent
	},
	{
		path: 'admin',
		component: AdminComponent
	},
	{
		path: 'artist',
		component: ArtistComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);