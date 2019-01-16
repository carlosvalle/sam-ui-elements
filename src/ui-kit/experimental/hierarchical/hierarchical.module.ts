import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SamHierarchicalAutocompleteComponent } from './autocomplete/autocomplete.component';
import { SamHierarchicalTreeComponent } from './hierarchical-tree/hierarchical-tree.component';
import { SamHierarchicalTreeGridComponent } from './hierarchical-tree-grid/hierarchical-tree-grid.component';
import { SamHierarchicalSelectedResultComponent } from './selected-result/selected-result.component';
import { SamHierarchicalTreeFilterComponent } from './hierarchical-tree-filter/hierarchical-tree-filter.component';
import { SamHierarchicalTreeHeaderComponent } from './hierarchical-tree-header/hierarchical-tree-header.component';
import { SamHierarchicalTreeFooterComponent } from './hierarchical-tree-footer/hierarchical-tree-footer.component';

import { SamHierarchicalComponent } from './hierarchical/hierarchical.component';
import { SamWrapperModule } from '../../wrappers';
import { SamDataTableModule, SamModalModule } from '../../components';
import { SamCheckboxModule, SamSelectModule, SamTextInputModule } from '../../form-controls';
import { SamButtonModule } from '../../elements';
import { SamIconsModule } from '../icon';
import { SamDirectivesModule } from '../../directives';

@NgModule({
  imports: [
    CommonModule, FormsModule, SamWrapperModule, SamDataTableModule, SamCheckboxModule, SamSelectModule, SamButtonModule,
    SamTextInputModule, SamIconsModule, SamModalModule, SamDirectivesModule
  ],
  declarations: [SamHierarchicalAutocompleteComponent, SamHierarchicalTreeComponent,
    SamHierarchicalTreeGridComponent, SamHierarchicalSelectedResultComponent,
    SamHierarchicalTreeFilterComponent, SamHierarchicalTreeHeaderComponent,
    SamHierarchicalTreeFooterComponent, SamHierarchicalComponent],
  exports: [SamHierarchicalAutocompleteComponent, SamHierarchicalSelectedResultComponent,
    SamHierarchicalTreeComponent, SamHierarchicalTreeGridComponent, SamHierarchicalTreeHeaderComponent,
    SamHierarchicalTreeFooterComponent, SamHierarchicalTreeFilterComponent, SamHierarchicalComponent]
})
export class SamHierarchicalModule { }
