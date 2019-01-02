import { Component, OnInit, Input } from '@angular/core';
import { SamHierarchicalAutocompleteSettings } from '../autocomplete/autocomplete.component';
import { SelectedResultSettings } from '../selected-result/selected-result.component';
import { SamHiercarchicalServiceInterface } from '../hierarchical-interface';
import { HierarchicalTreeSelectedItemModel } from '../hierarchical-tree-selectedItem.model';

@Component({
  selector: 'sam-hierarchical',
  templateUrl: './hierarchical.component.html',
  styleUrls: ['./hierarchical.component.scss']
})
export class SamHierarchicalComponent implements OnInit {

  /**
   * Settings for the Autocomplete control 
   */
  @Input()
  public settings: SamHierarchicalSettings;

  /**
  * Instance of the SamHiercarchicalServiceInterface provided
  */
  @Input()
  public service: SamHiercarchicalServiceInterface;

  /**
 * The data model that has the selected item
 */
  @Input()
  public model: HierarchicalTreeSelectedItemModel;


  constructor() { }

  ngOnInit() {
  }

}


export class SamHierarchicalSettings implements SamHierarchicalAutocompleteSettings, SelectedResultSettings {

  /**
    * sets the default debounce time to 250 milliseconds 
    */
  constructor() {
    this.debounceTime = 250;
  }

  /**
   * Used to describe the drop down (Text should match the label that will be supplied)
   */
  public labelText: string;

  /**
   * Used for the Id of the control
   */
  public id: string;

  /**
   *  This is the primary field used to identify each object in the results
   */
  public keyField: string;

  /**
   *  Property from supplied model used for the top part of the basic template
   */
  public valueProperty: string;

  /**
   *  Property from supplied model used for the bottom part of the basic template
   */
  public subValueProperty: string;

  /**
   *  Sets the time waited for addional key actions Default is 250 milliseconds
   */
  public debounceTime: number;

  /**
   * Place holder text for input
   */
  public placeHolderText: string;

}