'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Employee",
	autoid: true,

	persistent: {
		'mst_empl' : {
			primarykeys: ['empl_id'],
			comment: 'Master Employee',
			data: {
				empl_id: {text:'ID', type: dbtype.varchar(30), null:false, uppercase: true},
				empl_nik: {text:'NIK', type: dbtype.varchar(30), null:false, uppercase: true, options:{required:true,invalidMessage:'NIK harus diisi'}},
				empl_name: {text:'Name', type: dbtype.varchar(60), null:false, uppercase: true, options:{required:true,invalidMessage:'Nama Karyawan harus diisi'}},


				edu_id
			},

			defaultsearch : ['empl_id', 'empl_nik', 'empl_name'],

			uniques: {
				'empl_nik' : ['empl_nik']
			}		
		}
	},

	schema: {
		title: 'Area',
		header: 'mst_area',
		detils: {}
	}
}

