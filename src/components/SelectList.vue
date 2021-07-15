<template>
    <div>
        <select name="genres" id="genres">
            <!-- IF I WANT MORE OPTION <option value="" @click="$emit('selectFilter', '')">Seleziona un {{ filterName }}</option> -->
            <option v-for="(filter, index) in filters" :key="index"
                    :value="filter"
                    @click="$emit('selectFilter', filter)">{{ filter }}</option>
        </select>
    </div>    
</template>

<script>


export default {
    name: 'Select',
    props: {
        filters: Array,
        filterName: String
    }
}
</script>

<style lang="scss" scoped>

</style>