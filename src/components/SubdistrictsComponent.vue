<template>
    <div class="box">
         <b-table
            :data="data"
            detailed
            hoverable
            custom-detail-row
            :sticky-header="stickyHeaders"
            :mobile-cards="hasMobileCards"
            :striped="isStriped"
            :opened-detailed="['Arcamanik']"
            :default-sort="['name', 'asc']"
            detail-key="name"
            :show-detail-icon="showDetailIcon">

            <b-table-column
                field="name"
                :visible="columnsVisible['name'].display"
                :label="columnsVisible['name'].title"
                width="230"
                sortable
                v-slot="props">
                    <template v-if="showDetailIcon">
                        {{ props.row.name }}
                    </template>
                    <template v-else>
                        <a @click="toggle(props.row)">
                            {{ props.row.name }}
                        </a>
                    </template>
            </b-table-column>

            <b-table-column
                field="total"
                :visible="columnsVisible['total'].display"
                :label="columnsVisible['total'].title"
                sortable
                centered
                v-slot="props">
                {{ props.row.total }}
            </b-table-column>

            <b-table-column
                :visible="columnsVisible['percent'].display"
                :label="columnsVisible['percent'].title"
                centered
                v-slot="props">
                <span :class="
                        [
                            'tag',
                            {'': props.row.total  <= 0.45},
                            {'': props.row.total  > 0.45}
                        ]">
                    {{ Math.round((props.row.total ) / 100) }}%
                </span>
            </b-table-column>

            <template slot="detail" slot-scope="props">
                <tr v-for="item in props.row.items" :key="item.name">
                    <td v-if="showDetailIcon"></td>
                    <td v-show="columnsVisible['name'].display" >&nbsp;&nbsp;&nbsp;&nbsp;{{ item.name }}</td>
                    <td v-show="columnsVisible['total'].display" class="has-text-centered">{{ item.total }}</td>
                    <td v-show="columnsVisible['percent'].display" class="has-text-centered">
                        <span :class="
                            [
                                'tag',
                                {'': item.total / item.available <= 0.45},
                                {'': item.total / item.available > 0.45}
                            ]">
                            {{ Math.round((item.total / item.available) * 100) }}%
                        </span>
                    </td>
                </tr>
            </template>
        </b-table>
    </div>
</template>

<script>
 export default {
        data() {
            return {
                data: [
                    {
                        name: 'Arcamanik',
                        total: 131,
                        available: 301,
                        items: [
                            {
                                name: 'Cisaranten Endah',
                                total: 57,
                                available: 100
                            },
                            {
                                name: 'Cisaranten Kulon',
                                total: 23,
                                available: 84
                            },
                        ]
                    },
                    {
                        name: 'Batununggal',
                        total: 88,
                        available: 167,
                        items: [
                            {
                                name: 'Binong',
                                total: 31,
                                available: 38
                            },
                            {
                                name: 'Cibangkong',
                                total: 23,
                                available: 29
                            },
                            {
                                name: 'Kacapiring',
                                total: 20,
                                available: 44
                            },
                            {
                                name: 'Kebon Waru',
                                total: 14,
                                available: 56
                            }
                        ]
                    },
                    {
                        name: 'Ujung Berung',
                        total: 434,
                        available: 721,
                        items: [
                            {
                                name: 'Cigending',
                                total: 101,
                                available: 187
                            },
                            {
                                name: 'Pasanggrahan',
                                total: 85,
                                available: 156
                            },
                        ]
                    },
                    {
                        name: 'Bojonegara',
                        total: 434,
                        available: 721,
                        items: [
                            {
                                name: 'naon',
                                total: 101,
                                available: 187
                            },
                            {
                                name: 'naon',
                                total: 85,
                                available: 156
                            },
                        ]
                    },
                    {
                        name: 'Cibeunying',
                        total: 434,
                        available: 721,
                        items: [
                            {
                                name: 'kelurahan',
                                total: 101,
                                available: 187
                            },
                            {
                                name: 'kelurahan',
                                total: 85,
                                available: 156
                            },
                        ]
                    },
                ],
                stickyHeaders: true,
                isHoverable: true,
                isStriped: true,
                hasMobileCards: false,

                columnsVisible: {
                    name: { title: 'Name', display: true },
                    total: { title: 'Total Objek', display: true },
                    percent: { title: 'Persentase', display: true },
                },
                showDetailIcon: true
            }
        },
        methods: {
            toggle(row) {
                this.$refs.table.toggleDetails(row)
            }
        }
    }

</script>
