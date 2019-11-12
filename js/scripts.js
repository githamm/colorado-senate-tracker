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

/*** MAIN PAGE FUNDRAISING TOTALS CHART ***/

var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1HZ74qM5x8cEvTU1brpKlcnMFfdk8T5WodswW_9dNFSU/edit#gid=0';

function init() {
    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: function(data, tabletop) {
            // Get last row from sheet
            var lastRow = (data.slice(-1)[0]);
            // var lastRow = (data[data.length - 3]);
            var lastDate = lastRow.date;
            var baerRaised = (lastRow.baer_raised).toLocaleString();
            //var baerCash = (lastRow.baer_cash).toLocaleString();
            var brayRaised = (lastRow.bray_raised).toLocaleString();
            //var brayCash = (lastRow.bray_cash).toLocaleString();
            var garciaRaised = (lastRow.garcia_raised).toLocaleString();
            //var garciaCash = (lastRow.garcia_cash).toLocaleString();
            var gardnerRaised = (lastRow.gardner_raised).toLocaleString();
            //var gardnerCash = (lastRow.gardner_cash).toLocaleString();
            var hickenlooperRaised = (lastRow.hickenlooper_raised).toLocaleString();
            //var hickenlooperCash = (lastRow.hickenlooper_cash).toLocaleString();
            var johnstonRaised = (lastRow.johnston_raised).toLocaleString();
            //var johnstonCash = (lastRow.johnston_cash).toLocaleString();
            var maddenRaised = (lastRow.madden_raised).toLocaleString();
            //var maddenCash = (lastRow.madden_cash).toLocaleString();
            var romanoffRaised = (lastRow.romanoff_raised).toLocaleString();
            //var romanoffCash = (lastRow.romanoff_cash).toLocaleString();
            var spauldingRaised = (lastRow.spaulding_raised).toLocaleString();
            //var spauldingCash = (lastRow.spaulding_cash).toLocaleString();
            var walshRaised = (lastRow.walsh_raised).toLocaleString();
            //var walshCash = (lastRow.walsh_cash).toLocaleString();
            var warrenRaised = (lastRow.warren_raised).toLocaleString();
            //var warrenCash = (lastRow.warren_cash).toLocaleString();
            var williamsRaised = (lastRow.williams_raised).toLocaleString();
            //var williamsCash = (lastRow.williams_cash).toLocaleString();
            var zornioRaised = (lastRow.zornio_raised).toLocaleString();
            //var zornioCash = (lastRow.zornio_cash).toLocaleString();

            // Charts
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
            var totalMoneyChart = c3.generate({
                bindto: '#total-money-chart',
                size: {
                    height: 400
                    //width: 800
                },
                data: {
                    json: data,
                    keys: {
                        x: 'date',
                        value: ['baer_total_raised', 'bray_total_raised', 'garcia_total_raised', 'gardner_total_raised', 'hickenlooper_total_raised', 'johnston_total_raised', 'madden_total_raised', 'romanoff_total_raised', 'spaulding_total_raised', 'walsh_total_raised', 'warren_total_raised', 'williams_total_raised', 'zornio_total_raised']
                    },
                    names: {
                        baer_total_raised: 'Dan Baer*',
                        bray_total_raised: 'Diana Bray',
                        garcia_total_raised: 'Lorena Garcia',
                        gardner_total_raised: 'Cory Gardner',
                        hickenlooper_total_raised: 'John Hickenlooper',
                        johnston_total_raised: 'Mike Johnston*',
                        madden_total_raised: 'Alice Madden*',
                        romanoff_total_raised: 'Andrew Romanoff',
                        spaulding_total_raised: 'Stephany Rose Spaulding',
                        walsh_total_raised: 'John Walsh*',
                        warren_total_raised: 'Michelle Ferrigno Warren',
                        williams_total_raised: 'Angela Williams',
                        zornio_total_raised: 'Trish Zornio'
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
                                return d3.format('$.1s')(d)
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
}

window.addEventListener('DOMContentLoaded', init)