import * as agChartsEnterprise from 'ag-charts-enterprise';
import { AgChartOptions, _ModuleSupport } from 'ag-charts-enterprise';

import { CHART_NAVIGATOR_MODULE } from '@ag-charts-enterprise/navigator';
_ModuleSupport.registerModule(CHART_NAVIGATOR_MODULE);

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
    series: [
        {
            xKey: 'year',
            yKey: 'spending',
        },
    ],
    navigator: {},
};

agChartsEnterprise.AgEnterpriseCharts.create(options);
