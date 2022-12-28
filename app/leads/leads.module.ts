import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListingComponent } from './leads-listing/leads-listing.component';
import { DownloadpdfComponent } from './leads-listing/leads-tools/downloadpdf/downloadpdf.component';
import { DownloadexcelComponent } from './leads-listing/leads-tools/downloadexcel/downloadexcel.component';



@NgModule({
  declarations: [
    LeadsListingComponent,
    DownloadpdfComponent,
    DownloadexcelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
