<template>
     <div class="box">
         <!-- <div class="level has-text-left">
            <p class="is-uppercase has-text-weight-semibold">Total Data Pemakaian :</p>
         <div class="column is-1">
         </div>
         <div class="level-item level-right">
            <p class="is-uppercase is-size-3 has-text-danger has-text-weight-semibold">200</p>
         </div>
         </div> -->
         <b-table 
            :data="data" 
            :sticky-header="stickyHeaders"
            :hoverable="isHoverable" 
            :striped="isStriped"
            :mobile-cards="hasMobileCards"
            >
            <template v-for="column in columns">
                <b-table-column :key="column.id" v-bind="column">
                    <template
                        v-if="column.searchable && !column.numeric"
                        #searchable="props">
                        <b-input
                            v-model="props.filters[props.column.field]"
                            placeholder="Cari Pemakai..."
                            icon="magnify"
                            size="is-small" />
                    </template>
                    <template v-slot="props">
                        {{ props.row[column.field] }}
                    </template>
                </b-table-column>
            </template>
           <template #footer>
                <th class="" style="width:40px">
                    <div class="th-wrap"></div>
                </th>
                <th class="">
                    <div class="th-wrap is-uppercase"> total data </div>
                </th>
                <th class="has-text-danger">
                    <div class="th-wrap is-numeric">1209</div>
                </th>
                <th class="has-text-danger">
                    <div class="th-wrap is-numeric">100%</div>
                </th>
            </template>
            <template>
                <b-table-column field="percent" label="Persentase" centered v-slot="props">
                     <span :class="
                        [
                            'tag',
                            {'': props.row.percent <= 0},
                            {'': props.row.percent > 5}
                        ]">
                    {{ parseInt( props.row.total  / 100) }}%
                </span>
                </b-table-column>
            </template>
         </b-table>
    </div> 
</template>


<script>

// export default {
//     data() {
//         return {
//         data : [
//             { 'no': 1, 'contract': 'Bidang Jasa', 'total': '123'},
//             { 'no': 2, 'contract': 'BUMN / BUMD', 'total': '435'},
//             { 'no': 3, 'contract': 'Fasos / Fasum', 'total': '432'},
//             { 'no': 4, 'contract': 'Gardu Listrik', 'total': '222'},
//             { 'no': 5, 'contract': 'Industri', 'total': '213'},
//             { 'no': 'Total', 'gender': '2 Females, 3 Males' },
//         ],
//             isStriped: true,
//             isNarrowed: false,
//             isHoverable: true,
//             hasMobileCards: false,
//         columns : [
//             {
//                 field: 'number',
//                     label: 'No',
//                     width: '40',
//                     numeric: true,
//                     centered: true,
//                 },
//                 {
//                     searchable: true,
//                     field: 'contract',
//                     label: 'Kontrak Pemakaian',
//                 },
//                 {
//                     field: 'total',
//                     label: 'Total',
//                 },
//             ]
//         }
//     },
// }

export default {
    data() {
        return {
            data: [ 
            {   'number': 1, 
                "contract": "Bidang Jasa",
                "total": 123,
            },
            {
                'number': 2,
                "contract": "BUMN / BUMD",
                "total": 3
            },
            {
                'number': 3,
                "contract": "Fasos / Fasum",
                "total": 1
            },
            {
                'number': 4,
                "contract": "Gardu Listrik",
                "total": 3
            },
            {
                'number': 5,
                "contract": "Industri",
                "total": 3
            },
            {
                'number': 6,
                "contract": "Kantor Instansi Non Pemerintah",
                "total": 3
            },
            {
                'number': 7,
                "contract": "Kantor RW",
                "total": 3
            },
            {
                'number': 8,
                "contract": "Koperasi",
                "total": 3
            },
            {
                'number': 9,
                "contract": "Peribadatan",
                "total": 3
            },
            {
                'number': 10,
                "contract": "Pertokoan",
                "total": 3
            },
            {
                'number': 11,
                "contract": "Perusahaan / Industri",
                "total": 3
            },
            {
                'number': 12,
                "contract": "Pompa Bensin",
                "total": 3
            },
            {
                'number': 13,
                "contract": "Rumah Sakit",
                "total": 3
            },
            {
                'number': 14,
                "contract": "Rumah Tinggal",
                "total": 3
            },
            {
                'number': 15,
                "contract": "Rumah Tinggal yang Dikontrakan",
                "total": 3
            },
            {
                'number': 16,
                "contract": "Sarana Sosial yang Dikontrakan",
                "total": 3
            },
            {
                'number': 17,
                "contract": "Sekolah / Yayasan",
                "total": 3
            },
            {
                'number': 18,
                "contract": "Tempat Usaha",
                "total": 3
            },
            ],

            stickyHeaders: true,
            isHoverable: true,
            isStriped: true,
            hasMobileCards: false,

            columns: [
                {
                    field: 'number',
                    label: 'No',
                    width: '40',
                    numeric: true,
                    centered: true,
                },
                {
                    searchable: true,
                    field: 'contract',
                    label: 'Kontrak Pemakaian',
                },
                {
                    field: 'total',
                    label: 'Total',
                },
            ]
        }
    },
    
}

</script>