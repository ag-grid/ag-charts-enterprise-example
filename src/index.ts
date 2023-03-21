import * as agChartsEnterprise from '@ag-charts-enterprise/core';
import { AgChartOptions, _ModuleSupport } from '@ag-charts-enterprise/core';
import { ZoomModule } from '@ag-charts-enterprise/zoom';
import { CrosshairModule } from '@ag-charts-enterprise/crosshair';

_ModuleSupport.registerModule(ZoomModule);
_ModuleSupport.registerModule(CrosshairModule);

const options: AgChartOptions = {
    container: document.getElementById('myChart'),
    autoSize: true,
    title: {
        text: 'Average expenditure on coffee',
    },
    subtitle: {
        text: 'per person per week in Krakozhia',
    },
    data: [
        {
            year: '2015',
            spending: 35,
        },
        {
            year: '2016',
            spending: 40,
        },
        {
            year: '2017',
            spending: 43,
        },
        {
            year: '2018',
            spending: 44,
        },
    ],
    axes: [
        { type: 'category', position: 'bottom', crosshair: {} },
        { type: 'number', position: 'left', crosshair: {} },
    ],
    series: [
        {
            xKey: 'year',
            yKey: 'spending',
        },
    ],
    zoom: {
        enabled: true,
    },
};

agChartsEnterprise.AgEnterpriseCharts.create(options);
