import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { CategoryRoutingModule, routedComponents } from './category-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { FsIconComponent } from './category-list/category-list.component';
import { FormsModule } from '@angular/forms';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';


@NgModule({
  declarations: [
    ...routedComponents,
    FsIconComponent,
    CategoryDeleteComponent,
    CategoryEditComponent,
  ],
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    CategoryRoutingModule,
    NbButtonModule,
    FormsModule,
  ]
})
export class CategoryModule { }
