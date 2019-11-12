/*** ELECTION COUNTDOWN ***/
var demPrimary = new Date("Jun 30, 2020 00:00:01").getTime();
var generalElection = new Date("Nov 3, 2020 00:00:01").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var t = demPrimary - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    document.getElementById("countdown-primary").innerHTML = days;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("countdown-primary").innerHTML = "0";
    }
}, 1000);
var y = setInterval(function() {
    var now = new Date().getTime();
    var t = generalElection - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    document.getElementById("countdown-general").innerHTML = days;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("countdown-general").innerHTML = "0";
    }
}, 1000);

/*** MAIN PAGE QUARTERLY FUNDRAISING LINE CHART ***/

var quarterlyRaisedSheet = 'https://docs.google.com/spreadsheets/d/1HZ74qM5x8cEvTU1brpKlcnMFfdk8T5WodswW_9dNFSU/edit#gid=0';

function init() {
    Tabletop.init({
        key: quarterlyRaisedSheet,
        callback: function(data, tabletop) {
            var lastRow = (data.slice(-1)[0]);
            var baerRaised = (lastRow.baer_raised).toLocaleString();
            var brayRaised = (lastRow.bray_raised).toLocaleString();
            var garciaRaised = (lastRow.garcia_raised).toLocaleString();
            var gardnerRaised = (lastRow.gardner_raised).toLocaleString();
            var hickenlooperRaised = (lastRow.hickenlooper_raised).toLocaleString();
            var johnstonRaised = (lastRow.johnston_raised).toLocaleString();
            var maddenRaised = (lastRow.madden_raised).toLocaleString();
            var romanoffRaised = (lastRow.romanoff_raised).toLocaleString();
            var spauldingRaised = (lastRow.spaulding_raised).toLocaleString();
            var walshRaised = (lastRow.walsh_raised).toLocaleString();
            var warrenRaised = (lastRow.warren_raised).toLocaleString();
            var williamsRaised = (lastRow.williams_raised).toLocaleString();
            var zornioRaised = (lastRow.zornio_raised).toLocaleString();

            var quarterlyMoneyChart = c3.generate({
                bindto: '#quarterly-money-chart',
                size: {
                    height: 400
                    //width: 800
                },
                data: {
                    json: data,
                    keys: {
                        // x: [ 'date0', 'date1', 'date2' ],
                        x: 'date',
                        value: ['baer_raised', 'bray_raised', 'garcia_raised', 'gardner_raised', 'hickenlooper_raised', 'johnston_raised', 'madden_raised', 'romanoff_raised', 'spaulding_raised', 'walsh_raised', 'warren_raised', 'williams_raised', 'zornio_raised']
                    },
                    names: {
                        baer_raised: 'Dan Baer*',
                        bray_raised: 'Diana Bray',
                        garcia_raised: 'Lorena Garcia',
                        gardner_raised: 'Cory Gardner',
                        hickenlooper_raised: 'John Hickenlooper',
                        johnston_raised: 'Mike Johnston*',
                        madden_raised: 'Alice Madden*',
                        romanoff_raised: 'Andrew Romanoff',
                        spaulding_raised: 'Stephany Rose Spaulding',
                        walsh_raised: 'John Walsh*',
                        warren_raised: 'Michelle Ferrigno Warren',
                        williams_raised: 'Angela Williams',
                        zornio_raised: 'Trish Zornio'
                    },
                    type: 'line',
                    // colors: {
                    //     'pending': 'red',
                    //     'approved': 'black',
                    // },
                },
                axis: {
                    x: {
                        type: 'category',
                        tick: {
                            rotate: 0,
                            multiline: false
                        }
                    },
                    y: {
                        tick: {
                            format: function(d) {
                                return d3.format('$.2s')(d)
                            }
                        },
                        // label: {
                        //     text: 'Money raised',
                        //     position: 'outer-middle'
                        // }
                    }
                },
                tooltip: {
                    format: {
                        value: function(value, ratio, id) {
                            return d3.format('$,')(value)
                        }
                    }
                },
                grid: {
                    x: {
                        show: true
                    },
                    y: {
                        show: true
                    }
                },
                point: {
                    r: 4
                }
            });
        },
        simpleSheet: true,
        parseNumbers: true
    });
};

/*** MAIN PAGE TOTAL FUNDRAISING BAR CHART ***/

var totalRaisedSheet = 'https://docs.google.com/spreadsheets/d/1JHfaRgWFIhST4NE72nLd_qpK81ZFIS4wSiu1YXagxhk/edit#gid=0';

function init2() {
    Tabletop.init({
        key: totalRaisedSheet,
        callback: function(data, tabletop) {
            var totalMoneyChart = c3.generate({
                bindto: '#total-money-chart',
                size: {
                    height: 400
                    //width: 800
                },
                padding: {
                    right: 15
                },
                data: {
                    json: data,
                    keys: {
                        x: 'candidate',
                        value: ['total']
                    },
                    names: {
                        total: 'Total raised'
                    },
                    type: 'bar',
                    colors: {
                        'total': '#5e5a80',
                    },
                },
                axis: {
                    rotated: true,
                    x: {
                        type: 'category',
                        tick: {
                            rotate: 0,
                            multiline: true
                        }
                    },
                    y: {
                        tick: {
                            format: function(d) {
                                return d3.format('$.1s')(d)
                            },
                            count: 6
                        },
                        // label: {
                        //     text: 'Money raised',
                        //     position: 'outer-middle'
                        // }
                    }
                },
                tooltip: {
                    format: {
                        value: function(value, ratio, id) {
                            return d3.format('$,')(value)
                        }
                    }
                },
                legend: {
                    show: false
                },
                grid: {
                    x: {
                        show: true
                    },
                    y: {
                        show: true
                    }
                },
            });
        },
        simpleSheet: true,
        parseNumbers: true
    });
}

window.addEventListener('DOMContentLoaded', init);
window.addEventListener('DOMContentLoaded', init2);