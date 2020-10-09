'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Employee",
	autoid: true,
	icon : "icon-employee-white.png",

	persistent: {
		'mst_empluser' : {
			primarykeys: ['empl_id'],
			comment: 'Master Employee',
			data: {
				empl_id: {text:'ID', type: dbtype.varchar(30), null:false, uppercase: true},
				empl_nik: {text:'NIK', type: dbtype.varchar(30), null:false, uppercase: true,  suppresslist: true, options:{readonly:true}},
				empl_name: {text:'Name', type: dbtype.varchar(60), null:false, uppercase: true,  options:{readonly:true}},
				dept_name: {text:'Dept Name', type: dbtype.varchar(60), null:false, uppercase: true, options:{readonly:true}},
				site_name: {text:'Site Name', type: dbtype.varchar(90), null:false, uppercase: true, suppresslist: true, options:{readonly:true}},
				user_id: {
					text:'User', type: dbtype.varchar(14), null:false, suppresslist: true,
					options:{required:true,invalidMessage:'User harus diisi', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'fgt_user', 
						field_value: 'user_id', field_display: 'user_name', 
						api: 'fgta/framework/fguser/list'})					
				
				},

			},

			defaultsearch : ['empl_id', 'empl_nik', 'empl_name']
		}
	},

	schema: {
		title: 'Employee User',
		header: 'mst_empluser',
		detils: {
		}
	}
}

