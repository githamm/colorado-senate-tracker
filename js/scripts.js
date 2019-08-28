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

/*** MAIN PAGE FUNDRAISING TOTALS ***/
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1HZ74qM5x8cEvTU1brpKlcnMFfdk8T5WodswW_9dNFSU/edit#gid=0';

function init() {
    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: function(data, tabletop) {
            // Get last row from sheet
            var lastRow = (data.slice(-1)[0]);
            var lastDate = lastRow.date;
            var baerRaised = (lastRow.baer_raised).toLocaleString();
            var baerCash = (lastRow.baer_cash).toLocaleString();
            var brayRaised = (lastRow.bray_raised).toLocaleString();
            var brayCash = (lastRow.bray_cash).toLocaleString();
            var garciaRaised = (lastRow.garcia_raised).toLocaleString();
            var garciaCash = (lastRow.garcia_cash).toLocaleString();
            var gardnerRaised = (lastRow.gardner_raised).toLocaleString();
            var gardnerCash = (lastRow.gardner_cash).toLocaleString();
            var hickenlooperRaised = (lastRow.hickenlooper_raised).toLocaleString();
            var hickenlooperCash = (lastRow.hickenlooper_cash).toLocaleString();
            var johnstonRaised = (lastRow.johnston_raised).toLocaleString();
            var johnstonCash = (lastRow.johnston_cash).toLocaleString();
            var maddenRaised = (lastRow.madden_raised).toLocaleString();
            var maddenCash = (lastRow.madden_cash).toLocaleString();
            var romanoffRaised = (lastRow.romanoff_raised).toLocaleString();
            var romanoffCash = (lastRow.romanoff_cash).toLocaleString();
            var spauldingRaised = (lastRow.spaulding_raised).toLocaleString();
            var spauldingCash = (lastRow.spaulding_cash).toLocaleString();
            var walshRaised = (lastRow.walsh_raised).toLocaleString();
            var walshCash = (lastRow.walsh_cash).toLocaleString();
            var warrenRaised = (lastRow.warren_raised).toLocaleString();
            var warrenCash = (lastRow.warren_cash).toLocaleString();
            var williamsRaised = (lastRow.williams_raised).toLocaleString();
            var williamsCash = (lastRow.williams_cash).toLocaleString();
            var zornioRaised = (lastRow.zornio_raised).toLocaleString();
            var zornioCash = (lastRow.zornio_cash).toLocaleString();
            // Bind to html
            /*** UN-COMMENT BELOW WHEN THEY FILE ***/
            document.getElementById('baer-date').innerHTML = lastDate;
            document.getElementById('bray-date').innerHTML = lastDate;
            document.getElementById('garcia-date').innerHTML = lastDate;
            document.getElementById('gardner-date').innerHTML = lastDate;
            document.getElementById('hickenlooper-date').innerHTML = lastDate;
            document.getElementById('johnston-date').innerHTML = lastDate;
            document.getElementById('madden-date').innerHTML = lastDate;
            document.getElementById('romanoff-date').innerHTML = lastDate;
            document.getElementById('spaulding-date').innerHTML = lastDate;
            document.getElementById('walsh-date').innerHTML = lastDate;
            document.getElementById('warren-date').innerHTML = lastDate;
            document.getElementById('williams-date').innerHTML = lastDate;
            document.getElementById('zornio-date').innerHTML = lastDate;
            document.getElementById('baer-raised').innerHTML = baerRaised;
            document.getElementById('baer-cash').innerHTML = baerCash;
            document.getElementById('bray-raised').innerHTML = brayRaised;
            document.getElementById('bray-cash').innerHTML = brayCash;
            document.getElementById('garcia-raised').innerHTML = garciaRaised;
            document.getElementById('garcia-cash').innerHTML = garciaCash;
            document.getElementById('gardner-raised').innerHTML = gardnerRaised;
            document.getElementById('gardner-cash').innerHTML = gardnerCash;
            // document.getElementById('hickenlooper-raised').innerHTML = hickenlooperRaised;
            // document.getElementById('hickenlooper-cash').innerHTML = hickenlooperCash;
            document.getElementById('johnston-raised').innerHTML = johnstonRaised;
            document.getElementById('johnston-cash').innerHTML = johnstonCash;
            document.getElementById('madden-raised').innerHTML = maddenRaised;
            document.getElementById('madden-cash').innerHTML = maddenCash;
            document.getElementById('romanoff-raised').innerHTML = romanoffRaised;
            document.getElementById('romanoff-cash').innerHTML = romanoffCash;
            document.getElementById('spaulding-raised').innerHTML = spauldingRaised;
            document.getElementById('spaulding-cash').innerHTML = spauldingCash;
            document.getElementById('walsh-raised').innerHTML = walshRaised;
            document.getElementById('walsh-cash').innerHTML = walshCash;
            // document.getElementById('warren-raised').innerHTML = warrenRaised;
            // document.getElementById('warren-cash').innerHTML = warrenCash;
            // document.getElementById('williams-raised').innerHTML = williamsRaised;
            // document.getElementById('williams-cash').innerHTML = williamsCash;
            document.getElementById('zornio-raised').innerHTML = zornioRaised;
            document.getElementById('zornio-cash').innerHTML = zornioCash;

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
                        x: 'date',
                        value: ['baer_raised', 'bray_raised', 'garcia_raised', 'gardner_raised', 'hickenlooper_raised', 'johnston_raised', 'madden_raised', 'romanoff_raised', 'spaulding_raised', 'walsh_raised', 'warren_raised', 'williams_raised', 'zornio_raised']
                    },
                    names: {
                        baer_raised: 'Dan Baer',
                        bray_raised: 'Diana Bray',
                        garcia_raised: 'Lorena Garcia',
                        gardner_raised: 'Cory Gardner',
                        hickenlooper_raised: 'John Hicklooper',
                        johnston_raised: 'Mike Johnston',
                        madden_raised: 'Alice Madden',
                        romanoff_raised: 'Andrew Romanoff',
                        spaulding_raised: 'Stephany Rose Spaulding',
                        walsh_raised: 'John Walsh',
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
                            format: d3.format('$,')
                        },
                        // label: {
                        //     text: 'Money raised',
                        //     position: 'outer-middle'
                        // }
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
                        baer_total_raised: 'Dan Baer',
                        bray_total_raised: 'Diana Bray',
                        garcia_total_raised: 'Lorena Garcia',
                        gardner_total_raised: 'Cory Gardner',
                        hickenlooper_total_raised: 'John Hicklooper',
                        johnston_total_raised: 'Mike Johnston',
                        madden_total_raised: 'Alice Madden',
                        romanoff_total_raised: 'Andrew Romanoff',
                        spaulding_total_raised: 'Stephany Rose Spaulding',
                        walsh_total_raised: 'John Walsh',
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
                            format: d3.format('$,')
                        },
                        // label: {
                        //     text: 'Money raised',
                        //     position: 'outer-middle'
                        // }
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