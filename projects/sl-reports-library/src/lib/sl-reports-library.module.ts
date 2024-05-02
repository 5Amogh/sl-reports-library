import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SlReportsLibraryComponent } from './sl-reports-library.component';
import { ReportHeaderComponent } from './report-header/report-header.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { GenericChartComponent } from './generic-chart/generic-chart.component';
import { PercentageColumnChartsComponent } from './percentage-column-charts/percentage-column-charts.component';
import { ScatterChartsComponent } from './scatter-charts/scatter-charts.component';
import { MatrixChartComponent } from './matrix-chart/matrix-chart.component';
import { SuiModule, SuiAccordionModule } from '@project-sunbird/ng2-semantic-ui';
import { ReportsTextComponent } from './reports-text/reports-text.component';
import { ExpansionTableComponent } from './expansion-table/expansion-table.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { AttachmentsComponent } from './attachments/attachments.component';

@NgModule({
  declarations: [
    SlReportsLibraryComponent,
    ReportHeaderComponent,
    PieChartComponent,
    BarChartComponent,
    GenericChartComponent,
    PercentageColumnChartsComponent,
    ScatterChartsComponent,
    MatrixChartComponent,
    ReportsTextComponent,
    ExpansionTableComponent,
    ExpansionPanelComponent,
    AttachmentsComponent,
  ],
  imports: [NgChartsModule, CommonModule, SuiModule, SuiAccordionModule],
  exports: [
    SlReportsLibraryComponent,
    ReportHeaderComponent,
    PieChartComponent,
    BarChartComponent,
    GenericChartComponent,
    PercentageColumnChartsComponent,
    ScatterChartsComponent,
    MatrixChartComponent,
    ReportsTextComponent,
    ExpansionTableComponent,
    ExpansionPanelComponent,
    AttachmentsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlReportsLibraryModule {}
