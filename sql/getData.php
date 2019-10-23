<?php
/*
 * DataTables example server-side processing script.
 *
 * Please note that this script is intentionally extremely simple to show how
 * server-side processing can be implemented, and probably shouldn't be used as
 * the basis for a large complex system. It is suitable for simple use cases as
 * for learning.
 *
 * See http://datatables.net/usage/server-side for full details on the server-
 * side processing requirements of DataTables.
 *
 * @license MIT - http://datatables.net/license_mit
 */
 
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Easy set variables
 */
 
// DB table to use
$table = 'mytable';
 
// Table's primary key
$primaryKey = 'id';
 
// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes
$columns = array(
    array( 'db' => 'button', 'dt' => 0 ),
    array( 'db' => 'id', 'dt' => 1 ),
    array( 'db' => 'committee_name', 'dt' => 2 ),
    array( 'db' => 'report_year', 'dt' => 3 ),
    array( 'db' => 'report_type', 'dt' => 4 ),
    array( 'db' => 'entity_type_desc', 'dt' => 5 ),
    array( 'db' => 'contributor_name', 'dt' => 6 ),
    array( 'db' => 'contributor_city', 'dt' => 7 ),
    array( 'db' => 'contributor_state', 'dt' => 8 ),
    array( 'db' => 'contributor_zip', 'dt' => 9 ),
    array( 'db' => 'contributor_employer', 'dt' => 10 ),
    array( 'db' => 'contributor_occupation', 'dt' => 11 ),
    array( 'db' => 'receipt_type_full', 'dt' => 12 ),
    array( 'db' => 'contribution_receipt_amount', 'dt' => 13 ),
    array( 'db' => 'contributor_aggregate_ytd', 'dt' => 14 ),
    array( 'db' => 'fec_election_type_desc', 'dt' => 15 ),
    array( 'db' => 'pdf_url', 'dt' => 16 )
    // array( 'db' => 'button', 'dt' => 0 ),
    // array( 'db' => 'id', 'dt' => 1 ),
    // array( 'db' => 'animal', 'dt' => 2 )
);
 
// SQL server connection information - plus server
// $sql_details = array(
//     'user' => '',
//     'pass' => '',
//     'db'   => 'student_debt',
//     'host' => 'localhost'
// );

$sql_details = array(
    'user' => 'root',
    'pass' => 'root',
    'db'   => 'gardner_test',
    'host' => 'localhost'
);

// $sql_details = array(
//     'user' => 'datatables',
//     'pass' => '',
//     'db'   => '',
//     'host' => 'localhost'
// );
 
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * If you just want to use the basic configuration for DataTables with PHP
 * server-side, there is no need to edit below this line.
 */
 
require( 'ssp.class.php' );
 
echo json_encode(
    SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns )
);

// From https://stackoverflow.com/questions/41507443/yadcf-datatables-server-side-populate-select-with-php

// $data=SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns/*, $joinQuery, $extraWhere*/ );

// $db = SSP::sql_connect( $sql_details );
// $stmt3 = $db->prepare( 'SELECT DISTINCT(district) FROM immunization.immunization_records' );
// $stmt3->execute();
// $data['filter-1'] = $stmt3->fetchAll(PDO::FETCH_COLUMN, 0);

// $stmt5 = $db->prepare( 'SELECT DISTINCT(value2) FROM table' );
// $stmt5->execute();
// $data['yadcf_data_5'] = $stmt5->fetchAll(PDO::FETCH_COLUMN, 0);

// $stmt6 = $db->prepare( 'SELECT DISTINCT(value3) FROM table' );
// $stmt6->execute();
// $data['yadcf_data_6'] = $stmt6->fetchAll(PDO::FETCH_COLUMN, 0);


// echo json_encode($data);
